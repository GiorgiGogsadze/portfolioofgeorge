$(document).ready(function(){
     // for the sticky navigation
    $('.js--promise').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
        }, {
            offset: '80px'
    });




    $('.js--one').hover(function(){
        $(this).addClass('one');
    }, function () {
        $(this).removeClass("one");
      }
    );
    $('.js--two').hover(function(){
        $(this).addClass('two');
    }, function () {
        $(this).removeClass("two");
      }
    );
    $('.js--three').hover(function(){
        $(this).addClass('three');
    }, function () {
        $(this).removeClass("three");
      }
    );
    $('.js--four').hover(function(){
        $(this).addClass('four');
    }, function () {
        $(this).removeClass("four");
      }
    );
    $('.js--five').hover(function(){
        $(this).addClass('five');
    }, function () {
        $(this).removeClass("five");
      }
    );
    $('.js--six').hover(function(){
        $(this).addClass('six');
    }, function () {
        $(this).removeClass("six");
      }
    );
    $('.js--seven').hover(function(){
        $(this).addClass('seven');
    }, function () {
        $(this).removeClass("seven");
      }
    );

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


  $('.js--books').hover(function(){
        $(".book").css('display', 'none');
        $('.auto_stories').css("display", 'inline-block');
    }, function () {
        $('.book').css("display", 'inline-block');
        $('.auto_stories').css("display", 'none');
      });

      $('.part-1-1').hover(function(){
          $('.show-on-hover-1-1').css("display", 'block');
      },function(){
          $('.show-on-hover-1-1').css("display", 'none');
      });
      $('.part-1-2').hover(function(){
          $('.show-on-hover-1-2').css("display", 'block');
      },function(){
          $('.show-on-hover-1-2').css("display", 'none');
      });
      $('.part-1-3').hover(function(){
          $('.show-on-hover-1-3').css("display", 'block');
      },function(){
          $('.show-on-hover-1-3').css("display", 'none');
      });
      $('.part-2-1').hover(function(){
          $('.show-on-hover-2-1').css("display", 'block');
      },function(){
          $('.show-on-hover-2-1').css("display", 'none');
      });
      $('.part-2-2').hover(function(){
          $('.show-on-hover-2-2').css("display", 'block');
      },function(){
          $('.show-on-hover-2-2').css("display", 'none');
      });
      $('.part-2-3').hover(function(){
          $('.show-on-hover-2-3').css("display", 'block');
      },function(){
          $('.show-on-hover-2-3').css("display", 'none');
      });
      $('.part-3-1').hover(function(){
          $('.show-on-hover-3-1').css("display", 'block');
      },function(){
          $('.show-on-hover-3-1').css("display", 'none');
      });
      $('.part-3-2').hover(function(){
          $('.show-on-hover-3-2').css("display", 'block');
      },function(){
          $('.show-on-hover-3-2').css("display", 'none');
      });
      $('.part-3-3').hover(function(){
          $('.show-on-hover-3-3').css("display", 'block');
      },function(){
          $('.show-on-hover-3-3').css("display", 'none');
      });
      $('.part-4-1').hover(function(){
          $('.show-on-hover-4-1').css("display", 'block');
      },function(){
          $('.show-on-hover-4-1').css("display", 'none');
      });
      $('.part-4-2').hover(function(){
          $('.show-on-hover-4-2').css("display", 'block');
      },function(){
          $('.show-on-hover-4-2').css("display", 'none');
      });
      $('.part-4-3').hover(function(){
          $('.show-on-hover-4-3').css("display", 'block');
      },function(){
          $('.show-on-hover-4-3').css("display", 'none');
      });
      $('.part-5-1').hover(function(){
          $('.show-on-hover-5-1').css("display", 'block');
      },function(){
          $('.show-on-hover-5-1').css("display", 'none');
      });
      $('.part-5-2').hover(function(){
          $('.show-on-hover-5-2').css("display", 'block');
      },function(){
          $('.show-on-hover-5-2').css("display", 'none');
      });
      $('.part-5-3').hover(function(){
          $('.show-on-hover-5-3').css("display", 'block');
      },function(){
          $('.show-on-hover-5-3').css("display", 'none');
      });
      $('.part-6-1').hover(function(){
          $('.show-on-hover-6-1').css("display", 'block');
      },function(){
          $('.show-on-hover-6-1').css("display", 'none');
      });
      $('.part-6-2').hover(function(){
          $('.show-on-hover-6-2').css("display", 'block');
      },function(){
          $('.show-on-hover-6-2').css("display", 'none');
      });
      $('.part-6-3').hover(function(){
          $('.show-on-hover-6-3').css("display", 'block');
      },function(){
          $('.show-on-hover-6-3').css("display", 'none');
      });
      $('.part-7-1').hover(function(){
          $('.show-on-hover-7-1').css("display", 'block');
      },function(){
          $('.show-on-hover-7-1').css("display", 'none');
      });
      $('.part-7-2').hover(function(){
          $('.show-on-hover-7-2').css("display", 'block');
      },function(){
          $('.show-on-hover-7-2').css("display", 'none');
      });
      $('.part-7-3').hover(function(){
          $('.show-on-hover-7-3').css("display", 'block');
      },function(){
          $('.show-on-hover-7-3').css("display", 'none');
      });

      //MOBILE NAVIGATION
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
    });


});