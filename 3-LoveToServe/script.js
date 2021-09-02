$(document).ready(function(){
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
  //up-down button
   $('.comeuli').waypoint(function(direction){
        if(direction == 'down'){
          $('.fixed').attr('href', '#header');
          $('.fixed__svg').attr("viewBox", "0 0 320 512");
          $('.fixed__svg__path').attr("d", "M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z");
        }else{
          $('.fixed').attr('href', '#footer');
          $('.fixed__svg').attr("viewBox", "0 0 320 512");
          $('.fixed__svg__path').attr("d", "M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z");
        }
        }, {
            offset: '0'
    });

    // -------------------------- //
    //form close

    $('.container').click(function(){
      $('.container').removeClass('container-open');
      $('.form-popup').removeClass('popup-open');
      $('.container').addClass('container-close');
      $('.form-popup').addClass('popup-close');
    });
    $(".container .form-popup").click(function(e) {
        e.stopPropagation();
   });
    $('.form-popup__close').click(function(){
      $('.container').removeClass('container-open');
      $('.form-popup').removeClass('popup-open');
      $('.container').addClass('container-close');
      $('.form-popup').addClass('popup-close');
    });
    // checks if inputs are filled
     $('.form-button').click(function(){
      if($("#name")[0].validity.valid && $("#surname")[0].validity.valid  && $("#email")[0].validity.valid &&  $("#dop1")[0].validity.valid && $("#message")[0].validity.valid ) {
          $('.container').removeClass('container-open');
          $('.form-popup').removeClass('popup-open');
          $('.container').addClass('container-close');
          $('.form-popup').addClass('popup-close');
      }
    });
    //form open
    $('.footer__problem').click(function(){
      $('.container').addClass('container-open');
      $('.form-popup').addClass('popup-open');
      $('.container').removeClass('container-close');
      $('.form-popup').removeClass('popup-close');
    });
// -------------------------- //
    //order close
     $('.end-button').click(function(){
      if($("#Pnumber")[0].validity.valid &&  $("#tableN")[0].validity.valid) {
        $('.container-order').removeClass('container-open');
        $('.order-popup').removeClass('popup-open');
        $('.container-order').addClass('container-close');
        $('.order-popup').addClass('popup-close');
      }
    });
     $('.container-order').click(function(){
      $('.container-order').removeClass('container-open');
      $('.order-popup').removeClass('popup-open');
      $('.container-order').addClass('container-close');
      $('.order-popup').addClass('popup-close');
    });
    $(".container-order .order-popup").click(function(e) {
        e.stopPropagation();
   });
     $('.order-popup__close').click(function(){
      $('.container-order').removeClass('container-open');
      $('.order-popup').removeClass('popup-open');
      $('.container-order').addClass('container-close');
      $('.order-popup').addClass('popup-close');
    });
    //order open
    $('.card-button').click(function(){
      $('.container-order').addClass('container-open');
      $('.order-popup').addClass('popup-open');
      $('.container-order').removeClass('container-close');
      $('.order-popup').removeClass('popup-close');
    });
    // -------------------------- //
    //thanks close
     $('.container-thanks').click(function(){
      $('.container-thanks').removeClass('container-open');
      $('.thanks-popup').removeClass('popup-open');
      $('.container-thanks').addClass('container-close');
      $('.thanks-popup').addClass('popup-close');
    });
    $(".container-thanks .thanks-popup").click(function(e) {
        e.stopPropagation();
   });
     $('.thanks-popup__close').click(function(){
      $('.container-thanks').removeClass('container-open');
      $('.thanks-popup').removeClass('popup-open');
      $('.container-thanks').addClass('container-close');
      $('.thanks-popup').addClass('popup-close');
    });
    //thanks open
    $('.end-button').click(function(){
      if($("#Pnumber")[0].validity.valid &&  $("#tableN")[0].validity.valid) {
        $('.container-thanks').addClass('container-open');
      $('.thanks-popup').addClass('popup-open');
      $('.container-thanks').removeClass('container-close');
      $('.thanks-popup').removeClass('popup-close');
      $('#Pnumber').val('');
      $('#tableN').val('');
      }
    });
    // -------------------------- //
     //shawarma close
     $('.shawarma-ingr-open').click(function(){ if($("#shawarma-type-1")[0].validity.valid) {
      $('.container-shawarma').removeClass('container-open');
      $('.shawarma-popup').removeClass('popup-open');
      $('.container-shawarma').addClass('container-close');
      $('.shawarma-popup').addClass('popup-close');
      $('.container-shawarma .types-container__after').css('display', 'none');
      }else{
      $('.container-shawarma .types-container__after').slideDown(200);
      }
    });
     $('.container-shawarma').click(function(){
      $('.container-shawarma').removeClass('container-open');
      $('.shawarma-popup').removeClass('popup-open');
      $('.container-shawarma').addClass('container-close');
      $('.shawarma-popup').addClass('popup-close');
    });
    $(".container-shawarma .shawarma-popup").click(function(e) {
        e.stopPropagation();
   });
     $('.shawarma-popup__close').click(function(){
      $('.container-shawarma').removeClass('container-open');
      $('.shawarma-popup').removeClass('popup-open');
      $('.container-shawarma').addClass('container-close');
      $('.shawarma-popup').addClass('popup-close');
    });
    //shawarma open
    $('.shawarma-button').click(function(){
      $('.container-shawarma').addClass('container-open');
      $('.shawarma-popup').addClass('popup-open');
      $('.container-shawarma').removeClass('container-close');
      $('.shawarma-popup').removeClass('popup-close');
    });
    //ingredients open with shawarma
    $('.shawarma-ingr-open').click(function(){
      if($("#shawarma-type-1")[0].validity.valid) {
       $('.container-shawarma-ingredients').addClass('container-open');
      $('.shawarma-ingredients-popup').addClass('popup-open');
      $('.container-shawarma-ingredients').removeClass('container-close');
      $('.shawarma-ingredients-popup').removeClass('popup-close');
      }
    });
    //////////////////////////////
    // shawarma ingredients
   $('.close-should-shawarma').click(function(){ 
      $('.container-shawarma-ingredients').removeClass('container-open');
      $('.shawarma-ingredients-popup').removeClass('popup-open');
      $('.container-shawarma-ingredients').addClass('container-close');
      $('.shawarma-ingredients-popup').addClass('popup-close');
    });
     $('.container-shawarma-ingredients').click(function(){
      $('.container-shawarma-ingredients').removeClass('container-open');
      $('.shawarma-ingredients-popup').removeClass('popup-open');
      $('.container-shawarma-ingredients').addClass('container-close');
      $('.shawarma-ingredients-popup').addClass('popup-close');
    });
    $(".container-shawarma-ingredients .shawarma-ingredients-popup").click(function(e) {
        e.stopPropagation();
   });
     $('.shawarma-ingredients-popup__close').click(function(){
      $('.container-shawarma-ingredients').removeClass('container-open');
      $('.shawarma-ingredients-popup').removeClass('popup-open');
      $('.container-shawarma-ingredients').addClass('container-close');
      $('.shawarma-ingredients-popup').addClass('popup-close');
    });
     $('.shawarma-ingredients-popup__back').click(function(){
      $('.container-shawarma-ingredients').removeClass('container-open');
      $('.shawarma-ingredients-popup').removeClass('popup-open');
      $('.container-shawarma-ingredients').addClass('container-close');
      $('.shawarma-ingredients-popup').addClass('popup-close');
      $('.container-shawarma').addClass('container-open');
      $('.shawarma-popup').addClass('popup-open');
      $('.container-shawarma').removeClass('container-close');
      $('.shawarma-popup').removeClass('popup-close');
    });
      //oder open with shawarma
    $('.close-should-shawarma').click(function(){
       $('.container-order').addClass('container-open');
      $('.order-popup').addClass('popup-open');
      $('.container-order').removeClass('container-close');
      $('.order-popup').removeClass('popup-close');
      $('input[name=shawarma-types]').prop('checked', false);
    });
    // -------------------------- //
     //hamburger close
      $('.close-should-hamburger').click(function(){ 
      $('.container-hamburger').removeClass('container-open');
      $('.hamburger-popup').removeClass('popup-open');
      $('.container-hamburger').addClass('container-close');
      $('.hamburger-popup').addClass('popup-close');
    });
     $('.container-hamburger').click(function(){
      $('.container-hamburger').removeClass('container-open');
      $('.hamburger-popup').removeClass('popup-open');
      $('.container-hamburger').addClass('container-close');
      $('.hamburger-popup').addClass('popup-close');
    });
    $(".container-hamburger .hamburger-popup").click(function(e) {
        e.stopPropagation();
   });
     $('.hamburger-popup__close').click(function(){
      $('.container-hamburger').removeClass('container-open');
      $('.hamburger-popup').removeClass('popup-open');
      $('.container-hamburger').addClass('container-close');
      $('.hamburger-popup').addClass('popup-close');
    });
    //hamburger open
    $('.hamburger-button').click(function(){
      $('.container-hamburger').addClass('container-open');
      $('.hamburger-popup').addClass('popup-open');
      $('.container-hamburger').removeClass('container-close');
      $('.hamburger-popup').removeClass('popup-close');
    });
      //oder open with hamburger
    $('.close-should-hamburger').click(function(){
       $('.container-order').addClass('container-open');
      $('.order-popup').addClass('popup-open');
      $('.container-order').removeClass('container-close');
      $('.order-popup').removeClass('popup-close');
    });
    /////////////////////////////////////////////////////////////////////////////
      // -------------------------- //
     //khachapuri close
      $('.close-should-khachapuri').click(function(){
      if($("#khachapuri-type-1")[0].validity.valid) {
       $('.container-khachapuri').removeClass('container-open');
      $('.khachapuri-popup').removeClass('popup-open');
      $('.container-khachapuri').addClass('container-close');
      $('.khachapuri-popup').addClass('popup-close');
      $('.container-khachapuri .types-container__after').css('display', 'none');
      }else{
      $('.container-khachapuri .types-container__after').slideDown(200);
      }
    });
     $('.container-khachapuri').click(function(){
      $('.container-khachapuri').removeClass('container-open');
      $('.khachapuri-popup').removeClass('popup-open');
      $('.container-khachapuri').addClass('container-close');
      $('.khachapuri-popup').addClass('popup-close');
    });
    $(".container-khachapuri .khachapuri-popup").click(function(e) {
        e.stopPropagation();
   });
     $('.khachapuri-popup__close').click(function(){
      $('.container-khachapuri').removeClass('container-open');
      $('.khachapuri-popup').removeClass('popup-open');
      $('.container-khachapuri').addClass('container-close');
      $('.khachapuri-popup').addClass('popup-close');
    });
    //khachapuri open
    $('.khachapuri-button').click(function(){
      $('.container-khachapuri').addClass('container-open');
      $('.khachapuri-popup').addClass('popup-open');
      $('.container-khachapuri').removeClass('container-close');
      $('.khachapuri-popup').removeClass('popup-close');
    });
    //oder open with khachapuri
    $('.close-should-khachapuri').click(function(){
      if($("#khachapuri-type-1")[0].validity.valid) {
       $('.container-order').addClass('container-open');
      $('.order-popup').addClass('popup-open');
      $('.container-order').removeClass('container-close');
      $('.order-popup').removeClass('popup-close');
      $('input[name=khachapuri-types]').prop('checked', false);
      }
    });
     // -------------------------- //
     //pizza close
     $('.close-should-pizza').click(function(){
        if($("#pizza-type-1")[0].validity.valid) {
      $('.container-pizza').removeClass('container-open');
      $('.pizza-popup').removeClass('popup-open');
      $('.container-pizza').addClass('container-close');
      $('.pizza-popup').addClass('popup-close');
      $('.container-pizza .types-container__after').css('display', 'none');
      }else{
      $('.container-pizza .types-container__after').slideDown(200);
        }
    });
     $('.container-pizza').click(function(){
      $('.container-pizza').removeClass('container-open');
      $('.pizza-popup').removeClass('popup-open');
      $('.container-pizza').addClass('container-close');
      $('.pizza-popup').addClass('popup-close');
    });
    $(".container-pizza .pizza-popup").click(function(e) {
        e.stopPropagation();
   });
     $('.pizza-popup__close').click(function(){
      $('.container-pizza').removeClass('container-open');
      $('.pizza-popup').removeClass('popup-open');
      $('.container-pizza').addClass('container-close');
      $('.pizza-popup').addClass('popup-close');
    });
    //pizza open
    $('.pizza-button').click(function(){
      $('.container-pizza').addClass('container-open');
      $('.pizza-popup').addClass('popup-open');
      $('.container-pizza').removeClass('container-close');
      $('.pizza-popup').removeClass('popup-close');
    });
      //oder open with pizza
    $('.close-should-pizza').click(function(){
      if($("#pizza-type-1")[0].validity.valid) {
       $('.container-order').addClass('container-open');
      $('.order-popup').addClass('popup-open');
      $('.container-order').removeClass('container-close');
      $('.order-popup').removeClass('popup-close');
      $('input[name=pizza-types]').prop('checked', false);
      }
    });
     // -------------------------- //
     //donut close
     $('.close-should-donut').click(function(){
        if($("#donut-type-1")[0].validity.valid) {
      $('.container-donut').removeClass('container-open');
      $('.donut-popup').removeClass('popup-open');
      $('.container-donut').addClass('container-close');
      $('.donut-popup').addClass('popup-close');
      $('.container-donut .types-container__after').css('display', 'none');
      }else{
      $('.container-donut .types-container__after').slideDown(200);
        }
    });
     $('.container-donut').click(function(){
      $('.container-donut').removeClass('container-open');
      $('.donut-popup').removeClass('popup-open');
      $('.container-donut').addClass('container-close');
      $('.donut-popup').addClass('popup-close');
    });
    $(".container-donut .donut-popup").click(function(e) {
        e.stopPropagation();
   });
     $('.donut-popup__close').click(function(){
      $('.container-donut').removeClass('container-open');
      $('.donut-popup').removeClass('popup-open');
      $('.container-donut').addClass('container-close');
      $('.donut-popup').addClass('popup-close');
    });
    //donut open
    $('.donut-button').click(function(){
      $('.container-donut').addClass('container-open');
      $('.donut-popup').addClass('popup-open');
      $('.container-donut').removeClass('container-close');
      $('.donut-popup').removeClass('popup-close');
    });
      //oder open with donut
    $('.close-should-donut').click(function(){
      if($("#donut-type-1")[0].validity.valid) {
       $('.container-order').addClass('container-open');
      $('.order-popup').addClass('popup-open');
      $('.container-order').removeClass('container-close');
      $('.order-popup').removeClass('popup-close');
      $('input[name=donut-types]').prop('checked', false);
      }
    });
     // -------------------------- //
     //ice-cream close
      $('.close-should-ice-cream').click(function(){
         if($("#ice-cream-type-1")[0].validity.valid) {
      $('.container-ice-cream').removeClass('container-open');
      $('.ice-cream-popup').removeClass('popup-open');
      $('.container-ice-cream').addClass('container-close');
      $('.ice-cream-popup').addClass('popup-close');
      $('.container-ice-cream .types-container__after').css('display', 'none');
      }else{
      $('.container-ice-cream .types-container__after').slideDown(200);
         }
    });
     $('.container-ice-cream').click(function(){
      $('.container-ice-cream').removeClass('container-open');
      $('.ice-cream-popup').removeClass('popup-open');
      $('.container-ice-cream').addClass('container-close');
      $('.ice-cream-popup').addClass('popup-close');
    });
    $(".container-ice-cream .ice-cream-popup").click(function(e) {
        e.stopPropagation();
   });
     $('.ice-cream-popup__close').click(function(){
      $('.container-ice-cream').removeClass('container-open');
      $('.ice-cream-popup').removeClass('popup-open');
      $('.container-ice-cream').addClass('container-close');
      $('.ice-cream-popup').addClass('popup-close');
    });
    //ice-cream open
    $('.ice-cream-button').click(function(){
      $('.container-ice-cream').addClass('container-open');
      $('.ice-cream-popup').addClass('popup-open');
      $('.container-ice-cream').removeClass('container-close');
      $('.ice-cream-popup').removeClass('popup-close');
    });
      //oder open with ice-cream
    $('.close-should-ice-cream').click(function(){
      if($("#ice-cream-type-1")[0].validity.valid) {
       $('.container-order').addClass('container-open');
      $('.order-popup').addClass('popup-open');
      $('.container-order').removeClass('container-close');
      $('.order-popup').removeClass('popup-close');
      $('input[name=ice-cream-types]').prop('checked', false);
      }
    });
     // -------------------------- //
     //milkshake close
     $('.close-should-milkshake').click(function(){
        if($("#milkshake-type-1")[0].validity.valid) {
      $('.container-milkshake').removeClass('container-open');
      $('.milkshake-popup').removeClass('popup-open');
      $('.container-milkshake').addClass('container-close');
      $('.milkshake-popup').addClass('popup-close');
      $('.container-milkshake .types-container__after').css('display', 'none');
      }else{
      $('.container-milkshake .types-container__after').slideDown(200);
        }
    });
     $('.container-milkshake').click(function(){
      $('.container-milkshake').removeClass('container-open');
      $('.milkshake-popup').removeClass('popup-open');
      $('.container-milkshake').addClass('container-close');
      $('.milkshake-popup').addClass('popup-close');
    });
    $(".container-milkshake .milkshake-popup").click(function(e) {
        e.stopPropagation();
   });
     $('.milkshake-popup__close').click(function(){
      $('.container-milkshake').removeClass('container-open');
      $('.milkshake-popup').removeClass('popup-open');
      $('.container-milkshake').addClass('container-close');
      $('.milkshake-popup').addClass('popup-close');
    });
    //milkshake open
    $('.milkshake-button').click(function(){
      $('.container-milkshake').addClass('container-open');
      $('.milkshake-popup').addClass('popup-open');
      $('.container-milkshake').removeClass('container-close');
      $('.milkshake-popup').removeClass('popup-close');
    });
      //oder open with milkshake
    $('.close-should-milkshake').click(function(){
      if($("#milkshake-type-1")[0].validity.valid) {
       $('.container-order').addClass('container-open');
      $('.order-popup').addClass('popup-open');
      $('.container-order').removeClass('container-close');
      $('.order-popup').removeClass('popup-close');
      $('input[name=milkshake-types]').prop('checked', false);
      }
    });
     // -------------------------- //
     //coffee close
       $('.close-should-coffee').click(function(){
          if($("#coffee-type-1")[0].validity.valid) {
      $('.container-coffee').removeClass('container-open');
      $('.coffee-popup').removeClass('popup-open');
      $('.container-coffee').addClass('container-close');
      $('.coffee-popup').addClass('popup-close');
      $('.container-coffee .types-container__after').css('display', 'none');
      }else{
      $('.container-coffee .types-container__after').slideDown(200);
          }
    });
     $('.container-coffee').click(function(){
      $('.container-coffee').removeClass('container-open');
      $('.coffee-popup').removeClass('popup-open');
      $('.container-coffee').addClass('container-close');
      $('.coffee-popup').addClass('popup-close');
    });
    $(".container-coffee .coffee-popup").click(function(e) {
        e.stopPropagation();
   });
     $('.coffee-popup__close').click(function(){
      $('.container-coffee').removeClass('container-open');
      $('.coffee-popup').removeClass('popup-open');
      $('.container-coffee').addClass('container-close');
      $('.coffee-popup').addClass('popup-close');
    });
    //coffee open
    $('.coffee-button').click(function(){
      $('.container-coffee').addClass('container-open');
      $('.coffee-popup').addClass('popup-open');
      $('.container-coffee').removeClass('container-close');
      $('.coffee-popup').removeClass('popup-close');
    });
      //oder open with coffee
    $('.close-should-coffee').click(function(){
      if($("#coffee-type-1")[0].validity.valid) {
       $('.container-order').addClass('container-open');
      $('.order-popup').addClass('popup-open');
      $('.container-order').removeClass('container-close');
      $('.order-popup').removeClass('popup-close');
      $('input[name=coffee-types]').prop('checked', false);
      }
    });


    /////////////////////////////////////////////////////////////////////////
    //animation only scroll
    // -------------------1-------------------//
    $('.header').waypoint(function(direction){
        $('.header__1').css('animation', 'pulse 5s linear infinite');
    });
     $('.comeuli').waypoint(function(direction){
         if(direction == 'down'){
        $('.header__1').css('animation', 'none');
         }else{
           $('.header__1').css('animation', 'pulse 5s linear infinite');
         }
    });
     // -------------------2-------------------//
    $('.header').waypoint(function(direction){
        $('.header__2').css('animation', 'pulse 6s linear infinite');
    });
     $('.comeuli').waypoint(function(direction){
         if(direction == 'down'){
        $('.header__2').css('animation', 'none');
         }else{
           $('.header__2').css('animation', 'pulse 6s linear infinite');
         }
    });
     // -------------------3-------------------//
    $('.header').waypoint(function(direction){
        $('.header__3').css('animation', 'pulse 3s linear infinite');
    });
     $('.comeuli').waypoint(function(direction){
         if(direction == 'down'){
        $('.header__3').css('animation', 'none');
         }else{
           $('.header__3').css('animation', 'pulse 3s linear infinite');
         }
    });
     // -------------------4-------------------//
    $('.header').waypoint(function(direction){
        $('.header__4').css('animation', 'pulse 8s linear infinite');
    });
     $('.comeuli').waypoint(function(direction){
         if(direction == 'down'){
        $('.header__4').css('animation', 'none');
         }else{
           $('.header__4').css('animation', 'pulse 8s linear infinite');
         }
    });
     // -------------------5-------------------//
    $('.header').waypoint(function(direction){
        $('.header__5').css('animation', 'pulse 10s linear infinite');
    });
     $('.comeuli').waypoint(function(direction){
         if(direction == 'down'){
        $('.header__5').css('animation', 'none');
         }else{
           $('.header__5').css('animation', 'pulse 10s linear infinite');
         }
    });
     // -------------------6-------------------//
    $('.header').waypoint(function(direction){
        $('.header__6').css('animation', 'pulse 4s linear infinite');
    });
     $('.comeuli').waypoint(function(direction){
         if(direction == 'down'){
        $('.header__6').css('animation', 'none');
         }else{
           $('.header__6').css('animation', 'pulse 4s linear infinite');
         }
    });
     // -------------------7-------------------//
    $('.header').waypoint(function(direction){
        $('.header__7').css('animation', 'pulse 7s linear infinite');
    });
     $('.comeuli').waypoint(function(direction){
         if(direction == 'down'){
        $('.header__7').css('animation', 'none');
         }else{
           $('.header__7').css('animation', 'pulse 7s linear infinite');
         }
    });
     // -------------------8-------------------//
    $('.header').waypoint(function(direction){
        $('.header__8').css('animation', 'pulse 9s linear infinite');
    });
     $('.comeuli').waypoint(function(direction){
         if(direction == 'down'){
        $('.header__8').css('animation', 'none');
         }else{
           $('.header__8').css('animation', 'pulse 9s linear infinite');
         }
    });


    //card rotation
    $('.card__front').click(function(){
      //this back other return front
      $('.card__front').css('transform', 'rotateY(0deg)');
      $('.card__back').css('transform', 'rotateY(180deg)');
      $(this).css('transform', 'rotateY(-180deg)');
      $(this).siblings('.card__back').css('transform', 'rotateY(0deg)');
    });
    $('.card__back').click(function(){
      $(this).siblings('.card__front').css('transform', 'rotateY(0deg)');
      $(this).css('transform', 'rotateY(180deg)');
    });
    //not rotating at popup open
    $(".card-button").click(function(e) {
        e.stopPropagation();
   });
    $(".shawarma-button").click(function(e) {
        e.stopPropagation();
   });
    $(".hamburger-button").click(function(e) {
        e.stopPropagation();
   });
    $(".pizza-button").click(function(e) {
        e.stopPropagation();
   });
    $(".khachapuri-button").click(function(e) {
        e.stopPropagation();
   });
    $(".donut-button").click(function(e) {
        e.stopPropagation();
   });
    $(".ice-cream-button").click(function(e) {
        e.stopPropagation();
   });
    $(".milkshake-button").click(function(e) {
        e.stopPropagation();
   });
    $(".coffee-button").click(function(e) {
        e.stopPropagation();
   });
});

//---------------------//
// shawarma ingredients inputs
 if ($("#shw-chk-1").is(':checked')){
    $('.shawarma-ingredients__img-pepper').css  ('display', 'inline-block');
  }else{
    $('.shawarma-ingredients__img-pepper').css  ('display', 'none');
  }
   if ($("#shw-chk-2").is(':checked')){
    $('.shawarma-ingredients__img-cucumber').css  ('display', 'inline-block');
  }else{
    $('.shawarma-ingredients__img-cucumber').css  ('display', 'none');
  }
   if ($("#shw-chk-3").is(':checked')){
    $('.shawarma-ingredients__img-ketchup').css  ('display', 'inline-block');
  }else{
    $('.shawarma-ingredients__img-ketchup').css  ('display', 'none');
  }
   if ($("#shw-chk-4").is(':checked')){
    $('.shawarma-ingredients__img-mustard').css  ('display', 'inline-block');
  }else{
    $('.shawarma-ingredients__img-mustard').css  ('display', 'none');
  }
   if ($("#shw-chk-5").is(':checked')){
    $('.shawarma-ingredients__img-onion').css  ('display', 'inline-block');
  }else{
    $('.shawarma-ingredients__img-onion').css  ('display', 'none');
  }
   if ($("#shw-chk-6").is(':checked')){
    $('.shawarma-ingredients__img-salad').css  ('display', 'inline-block');
  }else{
    $('.shawarma-ingredients__img-salad').css  ('display', 'none');
  }
   if ($("#shw-chk-7").is(':checked')){
    $('.shawarma-ingredients__img-tomato').css  ('display', 'inline-block');
  }else{
    $('.shawarma-ingredients__img-tomato').css  ('display', 'none');
  }
//////////////////////
$('#shw-chk-1').change(function(){
  if ($("#shw-chk-1").is(':checked')){
    $('.shawarma-ingredients__img-pepper').css  ('display', 'inline-block');
  }else{
    $('.shawarma-ingredients__img-pepper').css  ('display', 'none');
  }
});
$('#shw-chk-2').change(function(){
  if ($("#shw-chk-2").is(':checked')){
    $('.shawarma-ingredients__img-cucumber').css  ('display', 'inline-block');
  }else{
    $('.shawarma-ingredients__img-cucumber').css  ('display', 'none');
  }
});
$('#shw-chk-3').change(function(){
  if ($("#shw-chk-3").is(':checked')){
    $('.shawarma-ingredients__img-ketchup').css  ('display', 'inline-block');
  }else{
    $('.shawarma-ingredients__img-ketchup').css  ('display', 'none');
  }
});
$('#shw-chk-4').change(function(){
  if ($("#shw-chk-4").is(':checked')){
    $('.shawarma-ingredients__img-mustard').css  ('display', 'inline-block');
  }else{
    $('.shawarma-ingredients__img-mustard').css  ('display', 'none');
  }
});
$('#shw-chk-5').change(function(){
  if ($("#shw-chk-5").is(':checked')){
    $('.shawarma-ingredients__img-onion').css  ('display', 'inline-block');
  }else{
    $('.shawarma-ingredients__img-onion').css  ('display', 'none');
  }
});
$('#shw-chk-6').change(function(){
  if ($("#shw-chk-6").is(':checked')){
    $('.shawarma-ingredients__img-salad').css  ('display', 'inline-block');
  }else{
    $('.shawarma-ingredients__img-salad').css  ('display', 'none');
  }
});
$('#shw-chk-7').change(function(){
  if ($("#shw-chk-7").is(':checked')){
    $('.shawarma-ingredients__img-tomato').css  ('display', 'inline-block');
  }else{
    $('.shawarma-ingredients__img-tomato').css  ('display', 'none');
  }
});


///////////////////////////////////
////////////////////////////////////
// hamburger ingredients inputs
//---------------------//
 if ($("#ham-chk-1").is(':checked')){
    $('.hamburger-ingredients__img-salad-1, .hamburger-ingredients__img-salad-2').css  ('display', 'inline-block');
  }else{
    $('.hamburger-ingredients__img-salad-1, .hamburger-ingredients__img-salad-2').css  ('display', 'none');
  }
   if ($("#ham-chk-2").is(':checked')){
    $('.hamburger-ingredients__img-tomato').css  ('display', 'inline-block');
  }else{
    $('.hamburger-ingredients__img-tomato').css  ('display', 'none');
  }
   if ($("#ham-chk-3").is(':checked')){
    $('.hamburger-ingredients__img-cheese').css  ('display', 'inline-block');
  }else{
    $('.hamburger-ingredients__img-cheese').css  ('display', 'none');
  }
   if ($("#ham-chk-4").is(':checked')){
    $('.hamburger-ingredients__img-ketchup').css  ('display', 'inline-block');
  }else{
    $('.hamburger-ingredients__img-ketchup').css  ('display', 'none');
  }
   if ($("#ham-chk-5").is(':checked')){
    $('.hamburger-ingredients__img-onion').css  ('display', 'inline-block');
  }else{
    $('.hamburger-ingredients__img-onion').css  ('display', 'none');
  }
   if ($("#ham-chk-6").is(':checked')){
    $('.hamburger-ingredients__img-cucumber').css  ('display', 'inline-block');
  }else{
    $('.hamburger-ingredients__img-cucumber').css  ('display', 'none');
  }
//////////////////////
$('#ham-chk-1').change(function(){
  if ($("#ham-chk-1").is(':checked')){
    $('.hamburger-ingredients__img-salad-1, .hamburger-ingredients__img-salad-2').css  ('display', 'inline-block');
  }else{
    $('.hamburger-ingredients__img-salad-1, .hamburger-ingredients__img-salad-2').css  ('display', 'none');
  }
});
$('#ham-chk-2').change(function(){
  if ($("#ham-chk-2").is(':checked')){
    $('.hamburger-ingredients__img-tomato').css  ('display', 'inline-block');
  }else{
    $('.hamburger-ingredients__img-tomato').css  ('display', 'none');
  }
});
$('#ham-chk-3').change(function(){
  if ($("#ham-chk-3").is(':checked')){
    $('.hamburger-ingredients__img-cheese').css  ('display', 'inline-block');
  }else{
    $('.hamburger-ingredients__img-cheese').css  ('display', 'none');
  }
});
$('#ham-chk-4').change(function(){
  if ($("#ham-chk-4").is(':checked')){
    $('.hamburger-ingredients__img-ketchup').css  ('display', 'inline-block');
  }else{
    $('.hamburger-ingredients__img-ketchup').css  ('display', 'none');
  }
});
$('#ham-chk-5').change(function(){
  if ($("#ham-chk-5").is(':checked')){
    $('.hamburger-ingredients__img-onion').css  ('display', 'inline-block');
  }else{
    $('.hamburger-ingredients__img-onion').css  ('display', 'none');
  }
});
$('#ham-chk-6').change(function(){
  if ($("#ham-chk-6").is(':checked')){
    $('.hamburger-ingredients__img-cucumber').css  ('display', 'inline-block');
  }else{
    $('.hamburger-ingredients__img-cucumber').css  ('display', 'none');
  }
});
//////////////////////////
if ($('input[name=hamburger-ingredients-checkbox]:checked').length == $('input[name=hamburger-ingredients-checkbox]').length) {
       $('.hamburger-ingredients__img-full').css  ('display', 'inline-block');
    }else{
      $('.hamburger-ingredients__img-full').css  ('display', 'none');
    }
$("input[name=hamburger-ingredients-checkbox]").change(function(){
    if ($('input[name=hamburger-ingredients-checkbox]:checked').length == $('input[name=hamburger-ingredients-checkbox]').length) {
      $('.hamburger-ingredients__img-full').css  ('display', 'inline-block');
      $('.hamburger-ingredients__img-bone').css  ('display', 'inline-block');
    }else{
      $('.hamburger-ingredients__img-full').css  ('display', 'none');
       $('.hamburger-ingredients__img-bone').css  ('display', 'inline-block');
    }
});



