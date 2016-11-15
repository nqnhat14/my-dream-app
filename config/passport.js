/**
 * Created by My-PC on 9/13/2016.
 */
var passport = require('passport'),
  BearerStrategy = require('passport-http-bearer').Strategy,
  BasicStrategy = require('passport-http').BasicStrategy,
  ClientPasswordStrategy = require('passport-oauth2-client-password').Strategy,
  crypto = require('crypto'),
  db = require('../server/models');

module.exports = function () {
  passport.use("accessToken", new BearerStrategy(
    function (accessToken, done) {
      var accessTokenHash = crypto.createHash('sha1').update(accessToken).digest('hex');
      db.AccessToken.findOne({
        where: {
          token: accessTokenHash
        }
      }).then(function (token) {
        console.log(token);
        if (!token) return done(null, false)
        if (new Date() > token.expirationDate) {
          db.AccessToken.destroy({
            where: {
              token: accessTokenHash
            }
          }).then(function () {
          }, function (err) {
            return done(err);
          });
        } else {
          db.User.findOne({
            where: {
              email: token.userId
            }
          }).then(function (user) {
            if (!user) return done(null, false)
            // no use of scopes for no
            var info = {scope: '*'}
            done(null, user, info);
          }, function (err) {
            return done(err)
          });
        }
      }, function (err) {
        return done(err)
      });
    }
  ));
  passport.use("clientBasic", new BasicStrategy(
    function (clientId, clientSecret, done) {
      db.Client.findOne({
        where: {
          clientId: clientId
        }
      }).then(function (client) {
        if (!client) return done(null, false)
        if (client.clientSecret == clientSecret) return done(null, client)
        else return done(null, false)
      }, function (err) {
        console.log(err);
        return done(err)
      });
    }
  ));
  passport.use("clientPassword", new ClientPasswordStrategy(
    function (clientId, clientSecret, done) {
      db.Client.findOne({
        where: {
          clientId: clientId
        }
      }).then(function (client) {
        if (!client) return done(null, false)
        if (client.clientSecret == clientSecret) return done(null, client)
        else return done(null, false)
      }, function (err) {
        return done(err)
      });
    }
  ));
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
}
