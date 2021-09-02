 $(function() {
      //navigation scroll
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    $(".main-button").hover(
        function() {
            $(this).find('.main-button__img-pc').attr("src", "./img/gifs/pc.gif");
            $(this).find('.main-button__img-sv').attr("src", "./img/gifs/paper.gif");
            $(this).find('.main-button__img-globe').attr("src", "./img/gifs/globe.gif");
        },
        function() {
            $(this).find('.main-button__img-pc').attr("src", "./img/gifs/pc.svg");
            $(this).find('.main-button__img-sv').attr("src", "./img/gifs/paper.png");
            $(this).find('.main-button__img-globe').attr("src", "./img/gifs/globe.svg");
        }                         
    );   
    $('.about-me').waypoint(function(direction){
        if(direction == 'down'){
        $('.fixed__nav').css('width', 'auto');
        $('.fixed__nav').css('height', 'auto');
        $('.open-close__container').css('width', '5rem');
         $('.open-close__container').css('height', '5rem');
        }else{
           $('.fixed__nav').css('width', '0');
        $('.fixed__nav').css('height', '0');
        $('.open-close__container').css('width', '0');
         $('.open-close__container').css('height', '0');
        }
    });    
    $('.open-close__container').click(function(){
        $('.fixed__nav').slideToggle(200);
         if($('.open-close').hasClass('open-close-x')){
            $('.open-close').removeClass('open-close-x');
        }else{
            $('.open-close').addClass('open-close-x');
        }
    });
    $('.personal__contact').click(function(){
        $('.personal-cards-1').css('animation', 'card-slide-up 1s 1 forwards')
        $('.personal-cards-2').css('animation', 'card-slide-back 1s 1 forwards')  
    });     
    $('.personal__about').click(function(){
        $('.personal-cards-1').css('animation', 'card-slide-back 1s 1 forwards')
        $('.personal-cards-2').css('animation', 'card-slide-up 1s 1 forwards')  
    });
    $('.services-1 .offer-button').click(function(){
        $('.popup__container-1').removeClass('close-container');
        $('.popup-1').removeClass('close-popup');
        $('.popup__container-1').addClass('open-container');
        $('.popup-1').addClass('open-popup');
    });  
    $('.popup__container-1').click(function(){
        $('.popup__container-1').removeClass('open-container');
        $('.popup-1').removeClass('open-popup');
        $('.popup__container-1').addClass('close-container');
        $('.popup-1').addClass('close-popup');
    }); 
     $(".popup__container-1 .popup-1").click(function(e) {
        e.stopPropagation();
   });
   $('.popup__close-1').click(function(){
        $('.popup__container-1').removeClass('open-container');
        $('.popup-1').removeClass('open-popup');
        $('.popup__container-1').addClass('close-container');
        $('.popup-1').addClass('close-popup');
    });  
     $('.popup-1__button').click(function(){
        $('.popup__container-1').removeClass('open-container');
        $('.popup-1').removeClass('open-popup');
        $('.popup__container-1').addClass('close-container');
        $('.popup-1').addClass('close-popup');
         $('.personal-cards-1').css('animation', 'card-slide-up 1s 1 forwards')
        $('.personal-cards-2').css('animation', 'card-slide-back 1s 1 forwards')  
    });  
    
    var number1 = 0;
    $('.go-right-1').click(function(){
      if(number1 == 0){
        number1++;
        $('.portfolio__site-1 .img-transformer').css('transform', 'translateX(-100%)')
      }else if(number1 == 1){
        number1++;
        $('.portfolio__site-1 .img-transformer').css('transform', 'translateX(-200%)')
      }
      else if(number1 == 2){
        number1++;
        $('.portfolio__site-1 .img-transformer').css('transform', 'translateX(-300%)')
      }
      else if(number1 == 3){
        number1++;
        $('.portfolio__site-1 .img-transformer').css('transform', 'translateX(-400%)')
      }
    });
     $('.go-left-1').click(function(){
      if(number1 == 1){
        number1--;
        $('.portfolio__site-1 .img-transformer').css('transform', 'translateX(0)')
      }else if(number1 == 2){
        number1--;
        $('.portfolio__site-1 .img-transformer').css('transform', 'translateX(-100%)')
      }
      else if(number1 == 3){
        number1--;
        $('.portfolio__site-1 .img-transformer').css('transform', 'translateX(-200%)')
      }
      else if(number1 == 4){
        number1--;
        $('.portfolio__site-1 .img-transformer').css('transform', 'translateX(-300%)')
      }
    });
    var number2 = 0;
    $('.go-right-2').click(function(){
      if(number2 == 0){
        number2++;
        $('.portfolio__site-2 .img-transformer').css('transform', 'translateX(-100%)')
      }else if(number2 == 1){
        number2++;
        $('.portfolio__site-2 .img-transformer').css('transform', 'translateX(-200%)')
      }
      else if(number2 == 2){
        number2++;
        $('.portfolio__site-2 .img-transformer').css('transform', 'translateX(-300%)')
      }
      else if(number2 == 3){
        number2++;
        $('.portfolio__site-2 .img-transformer').css('transform', 'translateX(-400%)')
      } else if(number2 == 4){
        number2++;
        $('.portfolio__site-2 .img-transformer').css('transform', 'translateX(-500%)')
      } else if(number2 == 5){
        number2++;
        $('.portfolio__site-2 .img-transformer').css('transform', 'translateX(-600%)')
      }
    });
    $('.go-left-2').click(function(){
      if(number2 == 1){
        number2--;
        $('.portfolio__site-2 .img-transformer').css('transform', 'translateX(0)')
      }else if(number2 == 2){
        number2--;
        $('.portfolio__site-2 .img-transformer').css('transform', 'translateX(-100%)')
      }
      else if(number2 == 3){
        number2--;
        $('.portfolio__site-2 .img-transformer').css('transform', 'translateX(-200%)')
      }
      else if(number2 == 4){
        number2--;
        $('.portfolio__site-2 .img-transformer').css('transform', 'translateX(-300%)')
      }
      else if(number2 == 5){
        number2--;
        $('.portfolio__site-2 .img-transformer').css('transform', 'translateX(-400%)')
      }
      else if(number2 == 6){
        number2--;
        $('.portfolio__site-2 .img-transformer').css('transform', 'translateX(-500%)')
      }
    });
});