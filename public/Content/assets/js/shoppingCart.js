/**
Custom module for you to write your own javascript functions
**/
var ShoppingCart = function () {

    // private functions & variables
    var _updateCart = function (data) {
        if (data.success) {
            $("#notification-bar").addClass("alert-success").removeClass("alert-danger").html(data.message).fadeIn().fadeOut(5000);
            $("#topcart").html(data.html);
        }
    }
    var _updateCartFailure = function () {
        $("#notification-bar").addClass("alert-danger").removeClass("alert-success").html(data.message).fadeIn().fadeOut(5000);
    }
    var addToCart = function (elm) {
        console.log(elm);
        var id = elm.data('id');
        var url = '/Home/AddToCart';
        $.ajax({
            type: 'GET',
            url: url,
            data: { productId: id },
            success: function (data) {
                _updateCart(data);
            },
            error: function () {
                _updateCartFailure();
            }
        });
    }
    var delGoods = function (elm) {
        var id = elm.data('id');
        $.ajax({
            type: 'POST',
            url: '/Home/DeleteItem',
            data: { id: id },
            success: function () {
                location.reload();
            },
            error: function () {

            }
        });
    }

    // public functions
    return {

        //main function
        init: function () {
            $(".add2cart").click(function (e) {
                addToCart($(this));
            });
            $(".del-goods").on('click', function (e) {
                delGoods($(this));
            });
        },

        //some helper function
        updateCart: function (data) {
            _updateCart(data);
        },
        updateCartFailure: function () {
            _updateCartFailure();
        }

    };

}();

var Comment = function() {
    return {
        init: function() {

        },
        processCommentSuccess: function(data) {
            //http://blog.reybango.com/2010/07/09/not-using-jquery-javascript-templates-youre-really-missing-out/
            $("#commentTemplate").tmpl(data).appendTo(".comment-panel");
            $("#commentBox").val("");
            $(".rateit[data-rateid='" + data.Id + "']").rateit();
        },
        processCommentFailure: function() {
            console.log('error');
        }
    }
}();

var ContactUs = function() {

    return{
        init: function() {

        },
        proccessContactSuccess: function () {
            $(".contact-panel").fadeOut();
            $(".thankyou-panel").fadeIn();
        },
        processContactFailure:function() {

        }
    }
}();

var Slider = function () {
    var $owl = $("#owl-demo");
    return {
        init:function() {

            $owl.owlCarousel({
                items: 1,
                autoplay: true,
                dots: true,
                loop: true,
                animateOut: 'fadeOut',

            });
        },
        goNext:function() {
            $owl.trigger('next.owl.carousel');
        },
        goPrev: function () {
            $owl.trigger('prev.owl.carousel', [300]);
        }
    }
}();

var TagCloud = function() {
    return {
        init: function () {
            var url = "/Home/GetTagTrend";
            $.ajax({
                type: 'POST',
                url: url,
                success: function (data) {
                    $("#wordcloud").jQCloud(data, {
                        autoResize: true
                    });
                }
            });
        }
    }
}();
jQuery(document).ready(function () {
    // ShoppingCart.init();
    // Comment.init();
    // Slider.init();
    // TagCloud.init();
});
