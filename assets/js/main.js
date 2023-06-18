
!(function ($) {

  // $("#toggle").click(function (e) { 
  //   $("#show").animate({
  //     width: "toggle",
  //   }, 1000);
  // });

  $(".ticket_part_2").slideUp(); 
   $("#tiket_card .ticket_content").mouseenter(function () {
       $(this).find(".ticket_part_2").slideDown(); 
   });

   $("#tiket_card .ticket_content").mouseleave(function () { 
    $(this).find(".ticket_part_2").slideUp(); 
   });


  $(window).scroll(function () { 
     if($(window).scrollTop() > 150){
       $(".sticky_head").addClass("shadow fixed-top");
       $(".sticky_head").show();

     }
     else{
       $(".sticky_head").removeClass("shadow fixed-top");
        $(".sticky_head").hide();
      }
  });

  $(".manubar").click(function () { 
    // alert("hellow")
    var bo = $("#main-mnue").html();
    $(".mnus-clone").html(bo);
    $("#mobile-header").show();
    $('#mobile-header').animate({
      'width': 300
    }, 500)

  });   

  $("#mobile-header #close").click(function () { 
   $("#mobile-header").hide();
   $('#mobile-header').animate({
    'width': 0
  }, 500)
   var got = $(".mnus-clone").html();
   $(got).remove();
  });

  // var owl = $(' .Team .owl-carousel');
  // owl.owlCarousel({
  //     items:1,
  //     loop:true,
  //     margin:10,
  //     autoplay:true,
  //     autoplayTimeout:1500,
  //     autoplayHoverPause:true
  // });

  $('.About_us .counter').counterUp({
    delay: 10,
    time: 3000
  });  
  $('.services_3 .counter').counterUp({
    delay: 10,
    time: 3000
  });  $('.testimonial .single_doctor  .cards .counter').counterUp({
    delay: 10,
    time: 3000
  });
  
  $("#show_popu").hide();
  $(" .Gallery .card img").click(function () { 
    var ok = $(this).attr("src");
    $("#show_popu").slideDown(1000);
    $("#show_popu .shows").html('<img src="'+ok+'" />');
  });

  $("#clos").click(function () { 
    $("#show_popu").slideUp();(1000);
  });
  
  $("#trig").click(function () { 
    $("#dropdown-menu").toggleClass("show");
  });
  $("#trig_S").click(function () { 
    $("#search_manue").toggleClass("show");
  });


  $('.banner_slider').slick({
    autoplay:true,
    dots: false,
    speed:300,
    arrows:true
  });  

  $('.service_slider  .ser_slide ').slick({
    autoplay:true,
    dots: false,
    appendDots: $('.slick-slider-dots'),
    speed:100,
    prevArrow: $('.prev_A'),
    nextArrow: $('.next_A')
  });

  $('.blog_dentist .blog_slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    autoplay:true,
    arrows: true,
    speed:100,
    prevArrow: $('.prev_B'),
    nextArrow: $('.next_B'),
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
           speed:100,
           prevArrow: $('.prev_B'),
           nextArrow: $('.next_B'),
           
        } 
      },
      {   
        breakpoint: 800,
        arrows: true,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
           speed:100,
           prevArrow: $('.prev_B'),
           nextArrow: $('.next_B'),
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
          speed:100,
          prevArrow: $('.prev_B'),
          nextArrow: $('.next_B'),
        }
      }
    ]
  });  
  
  $('.expert_in_field .team_slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    autoplay:true,
    arrows: true,
    speed:100,
    prevArrow: $('.prev_T'),
    nextArrow: $('.next_T'),
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 2,
           speed:100,
    prevArrow: $('.prev_T'),
    nextArrow: $('.next_T'),
           
        } 
      },
      {   
        breakpoint: 800,
        arrows: true,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
           speed:100,
    prevArrow: $('.prev_T'),
    nextArrow: $('.next_T'),
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
          speed:100,
          prevArrow: $('.prev_T'),
          nextArrow: $('.next_T'),
        }
      }
    ]
  });

  var iso = new Isotope('#spekers');
  var iso2 = new Isotope('#Gellary');
})(jQuery);