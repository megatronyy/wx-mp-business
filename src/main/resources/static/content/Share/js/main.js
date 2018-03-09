var stage ={},
    c = createjs,
    w = 375,
    baseSize = 20,
    soundID = "music",
    preload, manifest,
    cw = document.documentElement.clientWidth,
    ch = document.documentElement.clientHeight;
   stage.resizeFontSize = (function(){
     $('html').attr('style', 'font-size:'+ cw/w * 20 +'px');
   })();

   // detectAnimateEnd
stage.dae = function(elem, callback){
   $(elem).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', callback);
};

stage.animateCss = function(elem, animationName){
   var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
   $(elem).addClass('animated ' + animationName).one(animationEnd, function() {
       $(this).removeClass('animated ' + animationName);
   });
};

stage.sound = (function(){
    c.Sound.registerSound("../Content/Share/img/Journey-Capo-Productions.mp3", soundID);
}());

stage.play = (function(){
   var isPlay = false;
   $(function(){
     $('#music').on('click', function(){
       if(!isPlay) {
         isPlay = !isPlay;
         c.Sound.play(soundID, {loop: -1});
         this.classList = 'ani-elem music-on';
       } else {
         isPlay = !isPlay;
         createjs.Sound.stop(soundID);
         this.classList = 'ani-elem music';
       }
     });
   });
}());

stage.swiperH = new Swiper('.swiper-container-h', {
    pagination: '.swiper-pagination-h',
    direction : 'horizontal',
    // initialSlide: 3,
    onInit: function(swiper){
      swiperAnimateCache(swiper);
      swiperAnimate(swiper);
    },
    onSlideChangeStart: function(swiper){
      swiperAnimate(swiper);
    },
    onSlideChangeEnd: function(swiper){
      swiperAnimate(swiper);
    }
});

stage.swiperVConf = {
    pagination: '.swiper-pagination-v',
    paginationClickable: true,
    direction: 'vertical',
    // loop:true,
    // initialSlide: 7,
    onInit: function(swiper){
      swiperAnimateCache(swiper);
      swiperAnimate(swiper);
    },
    onSlideChangeStart: function(swiper){
      // console.log(swiper);
    },
    onSlideChangeEnd: function(swiper){
      swiperAnimate(swiper);
      if(swiper.activeIndex == 0) {
        $('#music').addClass('hide')
      }
      if(swiper.activeIndex == 1) {
        $('#music').removeClass('hide');
      }
      if(swiper.activeIndex == 3 || swiper.activeIndex == 5) {
        $('.page-5 .plate-b, .page-5 .l-title-1').hide();
      }
      if(swiper.activeIndex == 4) {
        $('.page-5 .plate-b, .page-5 .l-title-1').show();
        stage.animateCss('.page-5 .plate-b', 'animated flipInY');
        stage.animateCss('.page-5 .l-title-1', 'animated fadeInDown');
        stage.swiperH.init();
      }
      if($('.arrow').is(':hidden')) {
        $('.arrow').show();
      }
      if(swiper.activeIndex == 6){
        // stage.animateCss('.page-7-circle-1','animated zoomIn');
      }
      if(swiper.activeIndex == 7){
        $('.arrow').hide();
      }

    }
};

stage.load = function(){
  manifest = [
    { src: "Journey-Capo-Productions.mp3", id: soundID },
    { src: "bg-fs8.png" },
    { src: "arrow-down-fs8.png" },
    { src: "company-brief-1-fs8.png" },
    { src: "company-brief-2-fs8.png" },
    { src: "company-logo-s-fs8.png" },
    { src: "company-logo-fs8.png" },
    { src: "loading-fs8.png" },
    { src: "music-off-fs8.png" },
    { src: "music-on-fs8.png" },
    { src: "plate-a-fs8.png" },
    { src: "plate-b-fs8.png" },
    { src: "proverbs-fs8.png" },
    { src: "s-01-logo-white-fs8.png" },
    { src: "s-01-logo-fs8.png" },
    { src: "s-01-title-1-fs8.png" },
    { src: "s-01-website-fs8.png" },
    { src: "s-03-line-fs8.png" },
    { src: "s-03-title-s-1-fs8.png" },
    { src: "s-03-title-s-2-fs8.png" },
    { src: "s-03-title-s-3-fs8.png" },
    { src: "s-03-title-fs8.png" },
    { src: "s-04-01-fs8.png" },
    { src: "s-04-02-fs8.png" },
    { src: "s-04-03-fs8.png" },
    { src: "s-04-04-fs8.png" },
    { src: "s-04-05-fs8.png" },
    { src: "s-04-06-fs8.png" },
    { src: "s-05-1-img-1-fs8.png" },
    { src: "s-05-1-img-2-fs8.png" },
    { src: "s-05-1-img-3-fs8.png" },
    { src: "s-05-1-line-1-fs8.png" },
    { src: "s-05-1-line-2-fs8.png" },
    { src: "s-05-1-title-s-1-fs8.png" },
    { src: "s-05-2-img-1-fs8.png" },
    { src: "s-05-2-img-2-fs8.png" },
    { src: "s-05-2-line-1-fs8.png" },
    { src: "s-05-2-line-2-fs8.png" },
    { src: "s-05-3-img-1-fs8.png" },
    { src: "s-05-3-img-2-fs8.png" },
    { src: "s-05-3-line-1-fs8.png" },
    { src: "s-05-3-line-2-fs8.png" },
    { src: "s-05-4-img-1-fs8.png" },
    { src: "s-05-4-img-2-fs8.png" },
    { src: "s-05-4-img-3-fs8.png" },
    { src: "s-05-4-img-4-fs8.png" },
    { src: "s-05-4-img-5-fs8.png" },
    { src: "s-05-4-img-6-fs8.png" },
    { src: "s-05-4-img-7-fs8.png" },
    { src: "s-05-4-img-8-fs8.png" },
    { src: "s-05-4-line-1-fs8.png" },
    { src: "s-06-car-fs8.png" },
    { src: "s-06-line-left2right-fs8.png" },
    { src: "s-06-line-top2bottom-fs8.png" },
    { src: "s-06-people-fs8.png" },
    { src: "s-06-phone-fs8.png" },
    { src: "s-06-title-s-1-fs8.png" },
    { src: "s-08-01-fs8.png" },
    { src: "s-08-03-fs8.png" },
    { src: "s-08-04-fs8.png" },
    { src: "s-08-05-fs8.png" },
    { src: "s-08-logo-l-fs8.png" }
  ];
  preload = new c.LoadQueue(true);
  preload.on("fileload", handleFileLoaded);
  preload.on("progress", handleProgress);
  preload.on("complete", handleComplete);
  preload.loadManifest(manifest, true, "../Content/Share/img/");
};

function handleProgress(event) {
    $('#number').html(parseInt(event.loaded.toFixed(2)*100) + '%');
}

function handleFileLoaded(event){}

function handleComplete(event){
  //  $('.loading, .loading-bird').addClass('hide');
   $('.arrow').removeClass('hide');
   $('.loading-page').remove();
   stage.swiperV = new Swiper('.swiper-container-v', stage.swiperVConf);
}

stage.popTxt = function () {
  $(".page-7").on("touchstart","#merit .page-circle",function(){
    var
      active_text1 = $(".page-7-circle-active").find(".page-7-title-s1").html(),
      active_text2 = $(".page-7-circle-active").find(".page-7-title-s2").html(),
      text1 = $(this).find(".page-7-title-s1").html(),
      text2 = $(this).find(".page-7-title-s2").html();
      $(".page-7-circle-active").find(".page-7-title-s1").html(text1);
      $(".page-7-circle-active").find(".page-7-title-s2").html(text2);
      $(this).find(".page-7-title-s1").html(active_text1);
      $(this).find(".page-7-title-s2").html(active_text2);
      $('.page-7-circle-1')
          .removeAttr('style')
          .removeClass('animated zoomIn');
      stage.animateCss('.page-7-circle-1', 'animated flipInY');
  });
}


$(function(){
  stage.load();
  stage.popTxt();
});
