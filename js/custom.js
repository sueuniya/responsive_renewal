$(function(){
	

  $(window).load(function(){
    $('.loader').delay(3000).fadeOut(function() {
      $('header').addClass('show')
    });
  });


 
  //scrolltrigger
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".main_vis .bg" , {

    scrollTrigger: {
      trigger: ".main_vis",
      start: "top",
      // end: "center top",
      scrub: true,
      // markers: true
    },

    duration: 1,
    y:'20%',
  });

  gsap.to(".main_vis h2" , {

    scrollTrigger: {
      trigger: ".main_vis",
      start: "top",
      // end: "center top",
      scrub: true,
      // markers: true
    },
    duration: 1,
    y:'100%',
  });
  
  gsap.to(".main_vis .mouse_bg img" , {

    scrollTrigger: {
      trigger: ".main_vis",
      start: "top",
      end:"+=20000",    
      scrub: true,
    },
    duration: 1,
    rotation:1000,
  });

  gsap.to(".history .img_wrap img" , {

    scrollTrigger: {
      trigger: ".img_wrap img",
      start: "top 50%",
      // end: "center top",
      scrub: true,
      // markers: true
    },
    duration: 1,
    y:'-10%',
    stagger: 0.2, //시차가 생긴는 것
  });

  gsap.to(".history_logo ul" , {

    scrollTrigger: {
      trigger: ".history_logo",
      start: "top 50%",
      // end: "center top",
      scrub: 2,
      // markers: true
    },
    duration: 3,
    x:'5%',

  });

  gsap.to(".works .bg_txt" , {

    scrollTrigger: {
      trigger: ".works",
      start: "top 50%",
      // end: "center top",
      scrub: 2,
      // markers: true
    },
    duration: 1,
    left:'0%',
    stagger: 0.2, 
  });


 
  gsap.to(".mcdelivery .txt01" , {

    scrollTrigger: {
      trigger: ".mcdelivery",
      start: "+=3500",
      end: "+=3700",
      scrub: 1,
    },
    duration: 1,
    x: '30%'

  });
  gsap.to(".mcdelivery .txt02" , {

    scrollTrigger: {
      trigger: ".mcdelivery",
      start: "+=3500",
      end: "+=3700",
      scrub: true,
    },
    duration: 1,
    x: '-30%'

  });


  
  

  const history = gsap.timeline(
    // {
    // scrollTrigger: {
    //   trigger: ".history_logo",
    //   start: "top 50%",
    //   markers: true,
      
    // },
    {
    paused:true,
    },
  );

  history.fromTo(".history_logo ul li" ,
{
    y: 20,  
    opacity: 0,
  },
    {
    y:0,
    duration: 1,
    opacity:1,
    stagger: 0.2, 
  });



  $('.burger_box').click(function(){
    $('.burger_box').toggleClass('active');
    $('nav').toggleClass('on');
    $('body').toggleClass('hidden')
  });


    $('.main_menu').on ('click', function () {
      if($(this).hasClass('active')) {
        slideUp(200)
      }else{
        slideUp();
        $(this).addClass('active').next().slideDown(200);
      }
      function slideUp() {
        $('.main_menu').removeClass('active').next().slideUp(200);
      };

    });



  function numberCounter(target_frame, target_number) {
    this.count = 0; this.diff = 0;
    this.target_count = parseInt(target_number);
    this.target_frame = document.getElementById(target_frame);
    this.timer = null;
    this.counter();
  };
  numberCounter.prototype.counter = function() {
    var self = this;
    this.diff = this.target_count - this.count;
     
    if(this.diff > 0) {
        self.count += Math.ceil(this.diff / 5);
    }
     
    this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //정규식 ,와같은것
     
    if(this.count < this.target_count) {
        this.timer = setTimeout(function() { self.counter(); }, 20); //초단위 
    } else {
        clearTimeout(this.timer);
    }
  };

  numflag = 0;

  $(window).on("scroll", function() {
    curr = $(window).scrollTop();
    works = $('.works').offset().top-$(window).height()/2 ;
    history_logo = $('.history_logo').offset().top -$(window).height()/2;

    if($(window).scrollTop() > 50) {
        $('header').addClass("on");
    } else {
    $('header').removeClass("on");
    }

    if (curr > works){
      //숫자 카운트
      if(numflag == 0){
        new numberCounter("num01", 524500);
        new numberCounter("num02", 39198);
        new numberCounter("num03", 9800);
        new numberCounter("num04", 3000);
        new numberCounter("num05", 15200);
        numflag =1;
      }
    }

    if(curr > history_logo){
      history.play();
    }
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".product",
    start: "top",
    end: "+=5000",
    scrub: 1,
    pin:true,
  }
});
tl.fromTo(".product .txt01  , .product_picture .product01", {opacity:0},{opacity: 1, delay:1, duration: 3})
.to(".product .txt01 ", {y: '-100%',opacity: 0, duration: 3})
.to(".product_picture .product01", {opacity: 0, duration: 3})

.fromTo(".product .txt02 , .product_picture .product02 ", {opacity:0},{opacity: 1, delay:1, duration: 3})
.to(".product .txt02", {y: '-100%',opacity: 0, duration: 3})
.to(".product_picture .product02 ", {opacity: 0, duration: 3})

.fromTo(".product .txt03 , .product_picture .product03", {opacity:0},{opacity: 1, delay:1,duration: 3})
.to(".product .txt03", {y: '-100%',opacity: 0, duration: 3})
.to(".product_picture .product03", {opacity: 0, duration: 3})

.fromTo(".product .txt04 , .product_picture .product04", {opacity:0},{opacity: 1, delay:1,duration: 3})
.to(".product .txt04", {y: '-100%',opacity: 0, duration: 3})
.to(".product_picture .product04", {opacity: 0, duration: 3})

.fromTo(".product .txt05 , .product_picture .product05", {opacity:0},{opacity: 1, delay:1,duration: 3})
.to(".product .txt05", {y: '-100%'})
.to(".product_picture .product05", {opacity: 0, duration: 3})




let tlNewmenu = gsap.timeline({
  scrollTrigger: {
    trigger: ".new_menu",
    start: "top",
    end: "+=4000",
    scrub: true,
    pin:true,
    
  }
});

tlNewmenu.fromTo(".new_menu .txt01", {opacity:0},{opacity: 1, delay:1,  })
.to(".new_menu .txt01", {y: '-200%',opacity: 0, scale:.8})
.fromTo(".new_menu .txt02", {opacity:0},{opacity: 1, delay:1,  })
.to(".new_menu .txt02", {y: '-200%',opacity: 0, scale:.8})
.fromTo(".new_menu .txt03", {opacity:0},{opacity: 1, delay:1,  })
.to(".new_menu .txt03", {y: '-200%',opacity: 0, scale:.8})
.fromTo(".new_menu .txt04", {opacity:0},{opacity: 1, delay:1 })
.to(".new_menu .txt04", {y: '-200%',opacity: 0, scale:.8})
.fromTo(".new_menu .txt05", {opacity:0},{opacity: 1, delay:1,  })
.to(".new_menu .txt05", {y: '-200%',opacity: 0, scale:.8})
.fromTo(".new_menu .txt06 , .new_menu .txt_wrap .btn",  {opacity:0},{opacity: 1, delay:1 })






$('.mouse_bg').on('click',function(e){
    e.preventDefault();
    $("html,body").stop().animate({
      "scrollTop":0
  },300);
  });



  const theme = new Swiper(".logo-swiper", {
    slidesPerView: "auto",
    loop: "true",
    spaceBetween: 10,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
 });

 var swiper = new Swiper(".news-swiper", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});





  
});
