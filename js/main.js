$(document).ready(function(){

  $('body').scrollspy({
    target:'.menu' 
  });

	$('.carousel').carousel({
  		interval: 5000
	});


  //for smooth scrolling 
   $(".menu li a, .header-content a, #footer-nav li a, .smooth").on('click', function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top - (-10)
          }, 1000, function(){
           
              window.location.hash = hash;
          });
      } 
  });

    //operation of mobile button
  	 $(".mobile-btn").on("click", function(e) {
  	 			  e.preventDefault();
                  $(".menu ul").slideToggle();
                  
            });

    //when the menu link is clicked, check if the screen size is max:767 and close the slider only if the condition is true;
     $('.menu ul li a').on("click",function(e){
        e.preventDefault();
        mediaSize(); 
     });

     function mediaSize() { 
        /* Set the matchMedia */
        if (window.matchMedia('(max-width: 768px)').matches) {
        /* Changes when we reach the min-width  */
          $(".menu ul").slideToggle();

        }
    };


      //make the main navigation sticky if the screen is scrolled.
  	  $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('.sticky-header').addClass('sticker');
            }

            else {
                  $('.sticky-header').removeClass('sticker');
            }
      });

      //display the tabs accordingly
      $('#services-content .item-header a').on('click', function(e){
        e.preventDefault(); //stops the item from bouncing in tab click
        var tab_id= $(this).attr('href'); //gets the href value from the clicked tab
        $('.service-description div').removeClass('tab-show'); //remove tab-show class from all the other tabs
        $('#services-content .item-header a').removeClass('active');
        $('.service-description' + ' ' + tab_id).addClass('tab-show');  //add tab-show class to the clicked tab.
        $(this).addClass('active');
      }); 


      //for owl carousel
      $('.owl-carousel').owlCarousel({            
            
            loop:true,
            responsiveClass:true,
               responsive:{
                   0:{
                       items:1
                       
                   },
                   767:{
                       items:2                     
                   },
                   1199:{
                    items:3
                   }                  
               }
      });

        //for mix-it up js
      var mixer = mixitup('#portfolio-items');
      $('#portfolio-headers  a').on('click', function(e){
         e.preventDefault();
          $('#portfolio-headers  a').removeClass('active');
          $(this).addClass('active');
      });

});


