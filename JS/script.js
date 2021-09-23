(function ($) { "use strict";
	var portfolio_item = $('.portfolio-items-wrapper');
	if (portfolio_item.length) {
		var mixer = mixitup(portfolio_item);
	};

	$('.testimonial-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 2000,
  		responsive: [
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});

})(jQuery);

window.marker = null;

function initialize() {
    var map;

    var nottingham = new google.maps.LatLng(51.507351, -0.127758);

    var style = [
    	{"stylers": [{"hue": "#ff61a6"},{"visibility": "on"},{"invert_lightness": true},{"saturation": 40},{"lightness": 10}]}
	];

    var mapOptions = {
        center: nottingham,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom:9,
        backgroundColor:"#000",
        zoom:17,
        panControl:false,
        zoomControl:true,
        mapTypeControl:false,
        scaleControl:false,
        streetViewControl:false,
        overviewMapControl:false,
        zoomControlOptions: {
            style:google.maps.ZoomControlStyle.LARGE
        }
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var mapType = new google.maps.StyledMapType(style, {name:"Grayscale"});
    map.mapTypes.set('grey', mapType);
    map.setMapTypeId('grey');
    var marker_image ='images/marker.png';
    var pinIcon = new google.maps.MarkerImage(marker_image,null,null, null,new google.maps.Size(25, 33));
    marker = new google.maps.Marker({
        position: nottingham,
        map: map,
        icon: pinIcon,
        title: 'navigator'
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

var mybutton = document.getElementById("arrow");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}