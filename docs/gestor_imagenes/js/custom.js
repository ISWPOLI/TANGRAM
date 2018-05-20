    $(document).ready(function(){
/* ========================================================================= */
/*	Single Pag Nav init
/* ========================================================================= */
jQuery('#navigation').singlePageNav({
offset: jQuery('#nav').outerHeight(),      // Offset from top
currentClass: 'current',    // Class added to menu link when section is active
currentThreshold: 500,      // Threshold for triggering current section action
speed: 1200,
filter: ':not(.external)',
updateHash: true,
duration: 500,              // Duration of scroll animation in milliseconds
effect: 'swing',            // Effect for scroll animation
started: function (){       // Callback at start of animation
// console.log('Started');
console.log('begin scrolling');
},
finished: function (){      // Callback after animation is finished
// console.log('Finished')
console.log('done scrolling');
}
});
	// document.onscroll = scroll;
	
		// jQuery('.nav > li > a, #logo-center a, #logo-letras, #exc').click(function() {
		 // e.preventDefault();

		// jQuery.scrollTo(jQuery(this).attr('href'), 1200, {
			// offset:-(jQuery('#slider #navigation').height()), axis:'y'
		// }
		// );
	// });
    
	     // $(window).scroll(function () {
        // if ($(window).scrollTop() > 400) {
             // $("#navigation").css("background-color","#fff");
         // } else {
            // $("#navigation").css("background-color","rgba(255, 255, 255, 0.8)");
         // }
     // });
	 
	 	 		// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a.colapsar').click(function() {   //or a.nombreClase
    $('.navbar-toggle:visible').click();
});

			// if ($(window).width < 1025) para ventana
			if (screen.width< 1024) //tamaño real de pantalla
			$("#player1").remove();		

 // $(document).ready(function(){
// tri1=$( window).width();
// document.getElementById('triangulo').style.borderLeft = tri1 +"px"+" solid transparent";
	// $( window ).resize(function() {
  // tri1=$( window).width();
  // document.getElementById('triangulo').style.borderLeft = tri1 +"px"+" solid transparent";
// });	
// });

	/* ========================================================================= */
	/*	WOW init
	/* ========================================================================= */ 
	 
	 		var wow = new WOW ({
				boxClass:     'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset:       0,          // distance to the element when triggering the animation (default is 0)
				mobile:       true,       // trigger animations on mobile devices (default is true)
				live:         true        // act on asynchronously loaded content (default is true)
			  }
			);
			wow.init();

	
	
	 /* ========================================================================= */
	/*	Carousel Slider Bootstrap
	/* ========================================================================= */	
	$("#carousel-example-generic").carousel({interval:12000});	
	
	
/* ========================================================================= */
/*	owl Carousel
/* ========================================================================= */					
var owl = $('.owl-carousel');
owl.owlCarousel({
animateOut: 'slideOutDown',
    //animateIn: 'flipInX',
    items:5,
	nav:false,
	dots:false,	
    loop:true,
    margin:0,
	slideSpeed:100,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
	    responsive:{
        0:{
            items:1
        },
        640:{
            items:2
        },
        1000:{
            items:5
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('autoplay.play.owl',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('autoplay.stop.owl')
})

		$('#colour-variations ul').styleSwitcher({
			defaultThemeId: 'theme-switch',
			hasPreview: false,
			cookie: {
	          	// expires: 30,
	          	// isManagingLoad: true
	      	}
		});	
		$('.option-toggle').click(function() {
			$('#colour-variations').toggleClass('sleep');
		});
		
	
	
	$("#botonchat").click(function () {
          $('#qnimate').addClass('popup-box-on');
		  $('#botonchat').addClass('invisible');
            });
          
    $("#removeClass").click(function () {
          $('#qnimate').removeClass('popup-box-on');
		  $('#botonchat').removeClass('invisible');
            });
	
	
	
 });//End document.ready function

 
 // Fires whenever a player has finished loading
function onPlayerReady(event) {
    event.target.playVideo();
}

function capturarDatos()
    {
        var pwd=document.getElementById('pwd').value;
        var usuario=document.getElementById('usuario').value;
		
		if(pwd=='admin' && usuario=='admin')
		{
		window.location.href ="pcsistel.html";	
		}
		
		else
		{
		swal("¡Houston, tenemos un problema!", "Los datos no coinciden", "error");	
		}
		
		if(pwd=='' || usuario=='' || (pwd=='' && usuario==''))
		{
		swal("¡Houston, tenemos un problema!", "Debes llenar todos los campos", "error");	
		}
				
    }



