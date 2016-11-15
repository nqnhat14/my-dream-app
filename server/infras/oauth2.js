/**
 * Created by My-PC on 9/13/2016.
 */
// Load required packages
var oauth2orize = require('oauth2orize');
var passport = require('passport');
var crypto = require('crypto');
var guid = require('../utils/guid');
var server = oauth2orize.createServer();
var db = require('../models');
server.exchange(oauth2orize.exchange.password(function (client, username, password, scope, done) {
  console.log('abcd');
  db.User.findOne({
    where: {
      email: username
    }
  }).then(function (user) {
    console.log('login success');
    if (!user) return done(null, false)
    if (password === user.password) {
      var token = guid.uid(256);
      var refreshToken = guid.uid(256);
      var tokenHash = crypto.createHash('sha1').update(token).digest('hex');
      var refreshTokenHash = crypto.createHash('sha1').update(refreshToken).digest('hex');
      var expirationDate = new Date(new Date().getTime() + (3600 * 1000));
      db.AccessToken.create({
        token: tokenHash,
        expirationDate: expirationDate,
        clientId: client.clientId,
        userId: username
      }).then(function () {
        db.RefreshToken.create({
          token: refreshTokenHash,
          clientId: client.clientId,
          userId: username
        }).then(function () {
          done(null, token, refreshToken, {expires_in: expirationDate})
        }, function (err) {
          return done(err)
        });
      }, function (err) {
        return done(err)
      });
    }
    else {
      console.log('Cannot find user');
      return done(null, false)
    }
  }, function (err) {
    return done(err);
  });
}))

server.exchange(oauth2orize.exchange.refreshToken(function (client, refreshToken, scope, done) {
  var refreshTokenHash = crypto.createHash('sha1').update(refreshToken).digest('hex');

  db.RefreshToken.findOne(
    {
      where: {refreshToken: refreshTokenHash}

    }).then(function (token) {
    if (!token) return done(null, false)
    if (client.clientId !== token.clientId) return done(null, false)

    var newAccessToken = guid.uid(256)
    var accessTokenHash = crypto.createHash('sha1').update(newAccessToken).digest('hex');

    var expirationDate = new Date(new Date().getTime() + (3600 * 1000))

    db.AccessToken.update({
      token: accessTokenHash,
      scope: scope,
      expirationDate: expirationDate

    }, {
      where: {
        userId: token.userId
      }
    }).then(function () {
      done(null, newAccessToken, refreshToken, {expires_in: expirationDate});
    }, function (err) {
      return done(err);
    })
  }, function (err) {
    return done(err);
  });
}))


exports.decision = [
  server.decision()
]

exports.token = [
  passport.authenticate(['clientBasic', 'clientPassword'], {session: false}),
  server.token(),
  server.errorHandler()
]
