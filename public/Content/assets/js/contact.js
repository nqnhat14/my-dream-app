var Contact = function () {

    return {
        //main function to initiate the module
        init: function () {
            var map;
            $(document).ready(function () {
                map = new GMaps({
                    div: '#gmapbg',
                    lat: 10.80249,
                    lng: 106.64566
                });
                var marker = map.addMarker({
                    lat: 10.80249,
                    lng: 106.64566,
                    title: 'SunnyShop',
                    infoWindow: {
                        content: "<p><span class='logo-text-first'>Sunny</span><span class='logo-text-second'>Shop</span><p><div>7/5A C1 phường 15, quận Tân Bình, tp HCM</div>"
                    }
                });

                marker.infoWindow.open(map, marker);
            });
        }
    };

}();

jQuery(document).ready(function () {
    Contact.init();
});

