var stage ={},
    c = createjs,
    w = 375,
    baseSize = 20,
    soundID = "music",
    isPlay = false,
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

// stage.sound = (function(){
//   c.Sound.registerSound("img/music.mp3", soundID);
// }());

stage.play = (function(){
   $(function(){
     $('#music').on('click', function(){
       if(!isPlay) {
         isPlay = !isPlay;
         c.Sound.play(soundID, {loop: -1});
         this.classList = 'music-wave music-play';
       } else {
         isPlay = !isPlay;
         createjs.Sound.stop(soundID);
         this.classList = 'music-wave';
       }
     });
   });
}());


stage.sequence = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

stage.swiperVConf = {
    pagination: '.swiper-pagination-v',
    paginationClickable: true,
    direction: 'vertical',
    effect: 'coverflow',
    // initialSlide: 8,
    speed: 500,
    // coverflow: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows : true
    // },
    onInit: function(swiper){
      // swiperAnimateCache(swiper);
      // swiperAnimate(swiper);
      stage.one.tl.play();
    },
    // onSlideChangeStart: function(swiper){
    //   // console.log(swiper);
    // },
    onSlideChangeEnd: function(swiper){
      // swiperAnimate(swiper);
      if(swiper.activeIndex == 0 || swiper.activeIndex == 8) {
        $('.arrow').addClass('hide');
      }
      if(swiper.activeIndex == 1) {
        $('.arrow').removeClass('hide');
      }
    },
    onSlidePrevEnd: function(s){
      stage[stage.sequence[s.activeIndex]].tl.seek(0).restart();
      stage[stage.sequence[s.activeIndex+1]].tl.seek(0).pause();
      if($('.arrow').is(':hidden')) {
        $('.arrow').removeClass('hide');
      }
    },
    onSlideNextEnd: function(s){
      stage[stage.sequence[s.activeIndex]].tl.seek(0).restart();
      stage[stage.sequence[s.activeIndex-1]].tl.seek(0).pause();
      if(s.activeIndex == s.slides.length-1) {
        $('.arrow').addClass('hide');
      }
    },
};

stage.load = function(){
  manifest = [
//     { src: "music.mp3", id: soundID },
    { src: "loading-bar-fs8.png" },
    { src: "loading-wrap-fs8.png" },
    { src: "page-4-fenxiang-arrow-fs8.png" },
    { src: "page-4-fenxiang-fs8.png" },
    { src: "page-4-tuiguang-arrow-fs8.png" },
    { src: "page-4-tuiguang-fs8.png" },
    { src: "page-4-cheguwen-arrow-fs8.png" },
    { src: "page-4-cheguwen-fs8.png" },
    { src: "page-5-c-7-fs8.png" },
    { src: "page-5-c-6-fs8.png" },
    { src: "page-5-c-5-fs8.png" },
    { src: "page-5-c-4-fs8.png" },
    { src: "page-5-c-3-fs8.png" },
    { src: "page-5-c-2-fs8.png" },
    { src: "page-5-c-1-fs8.png" },
    { src: "page-5-title-fs8.png" },
    { src: "arrow-down-fs8.png" },
    { src: "page-9-text-2-fs8.png" },
    { src: "page-9-text-1-fs8.png" },
    { src: "page-9-logo-fs8.png" },
    { src: "page-8-dialog-2-fs8.png" },
    { src: "page-8-dialog-1-fs8.png" },
    { src: "page-8-c-15-fs8.png" },
    { src: "page-8-c-14-fs8.png" },
    { src: "page-8-c-13-fs8.png" },
    { src: "page-8-c-12-fs8.png" },
    { src: "page-8-c-11-fs8.png" },
    { src: "page-8-c-10-fs8.png" },
    { src: "page-8-c-9-fs8.png" },
    { src: "page-8-c-8-fs8.png" },
    { src: "page-8-c-7-fs8.png" },
    { src: "page-8-c-6-fs8.png" },
    { src: "page-8-c-5-fs8.png" },
    { src: "page-8-c-4-fs8.png" },
    { src: "page-8-c-3-fs8.png" },
    { src: "page-8-c-2-fs8.png" },
    { src: "page-8-c-1-fs8.png" },
    { src: "page-8-title-fs8.png" },
    { src: "page-7-phone-fs8.png" },
    { src: "page-7-person-fs8.png" },
    { src: "page-7-tuiguang-fs8.png" },
    { src: "page-7-jifen-fs8.png" },
    { src: "page-7-dialog-fs8.png" },
    { src: "page-7-title-fs8.png" },
    { src: "page-6-dialog-fs8.png" },
    { src: "page-6-c-09-fs8.png" },
    { src: "page-6-c-08-fs8.png" },
    { src: "page-6-c-07-fs8.png" },
    { src: "page-6-c-06-fs8.png" },
    { src: "page-6-c-05-fs8.png" },
    { src: "page-6-c-04-fs8.png" },
    { src: "page-6-c-03-fs8.png" },
    { src: "page-6-c-02-fs8.png" },
    { src: "page-6-c-01-fs8.png" },
    { src: "page-6-title-fs8.png" },
    { src: "page-4-desc-fs8.png" },
    { src: "page-2-dialog-fs8.png" },
    { src: "page-4-xiansuo-fs8.png" },
    { src: "page-4-pengyou-fs8.png" },
    { src: "page-4-fenfa-fs8.png" },
    { src: "page-4-path-fs8.png" },
    { src: "page-4-title-fs8.png" },
    { src: "page-3-text-3-fs8.png" },
    { src: "page-3-text-2-fs8.png" },
    { src: "page-3-text-1-fs8.png" },
    { src: "page-3-book-fs8.png" },
    { src: "page-3-tree-fs8.png" },
    { src: "page-3-title-fs8.png" },
    { src: "page-2-bottom-fs8.png" },
    { src: "page-2-content-03-fs8.png" },
    { src: "page-2-content-02-fs8.png" },
    { src: "page-2-content-01-fs8.png" },
    { src: "star-fs8.png" },
    { src: "page-2-title-fs8.png" },
    { src: "page-1-a-04-fs8.png" },
    { src: "page-1-a-03-fs8.png" },
    { src: "page-1-a-02-fs8.png" },
    { src: "page-1-a-01-fs8.png" },
    { src: "page-1-right-hand-fs8.png" },
    { src: "page-1-left-hand-fs8.png" },
    { src: "page-1-book-fs8.png" },
    { src: "page-1-hand-down-fs8.png" },
    { src: "page-1-02-fs8.png" },
    { src: "page-1-01-fs8.png" },
    { src: "bg-fs8.png" },
    { src: "loading-fs8.png" },
    { src: "proverbs-fs8.png" },
    { src: "s-01-logo-white-fs8.png" },
    { src: "page-9-logo-big-fs8.png" },
    { src: "company-logo-fs8-fs8.png" },
    { src: "proverbs-fs8.png" },
    { src: "arrow-down-fs8.png" }
  ];
  preload = new c.LoadQueue(true);
  preload.installPlugin(c.Sound);
  preload.loadFile({id:"music", src:"./img/music.mp3"});
  preload.loadManifest(manifest, true, "img/");
  preload.on("fileload", handleFileLoaded);
  preload.on("progress", handleProgress);
  preload.on("complete", handleComplete);

};


stage.one = {};
stage.two = {};
stage.three = {};
stage.four = {};
stage.five = {};
stage.six = {};
stage.seven = {};
stage.eight = {};
stage.nine = {};

var star = TweenMax.from('.star', 1.5, {
  scale: .5,
  repeat: -1,
  yoyo: true
});

stage.one.tl = new TimelineMax({
  paused: true
});
stage.one.tl
  .staggerFrom(
    ['.page-1 .logo', '.page-1 .proverbs'], .5,
    {
      autoAlpha: 0,
      y: '-=200'
    }
  )
  .from('.page-1-01', .4, {
    scale: 0,
    autoAlpha: 0
  })
  .from('.page-1-02', .4, {
    y: '12rem',
    autoAlpha: 0
  }, '-=0.2')
  .from('.page-1-left-hand, .page-1-right-hand', .5, {
    top: '-=5rem',
    autoAlpha: 0
  }, '-=0.2')
  .from('.page-1-book', .6, {
    y: '20rem',
    autoAlpha: 0,
    ease: Back.easeOut
  }, '-=0.6')
  .staggerFrom('.page-1-a-02, .page-1-a-03, .page-1-a-01, .page-1-a-04', .6,
    {
      scale: 0,
      y: '+=9rem',
      // z: '+=20',
      left: '50%',
      transformOrigin: "50% 50%",
      autoAlpha: 0,
      ease: Back.easeOut
    },
  0.2)
  .from('.page-1-hand-down', .6, {
    // scale: .6,
    autoAlpha: 0,
    y: '-=10',
    ease: Power1.ease,
    repeat: -1,
    yoyo: true
  })
  ;

stage.two.tl = new TimelineMax({
  paused: true
});
stage.two.tl
  .set('.page-2', { visibility: 'visible' })
  .from('.page-2 .page-title', .5, {
    top: '-=10rem',
    autoAlpha: 0
  })
  .from('.page-2 .page-bottom', .3, {
    top: '+=100',
    autoAlpha: 0
  })
  .staggerFrom(
    ['.page-2 .page-content-1',
     '.page-2 .page-content-2',
     '.page-2 .page-content-3'], .6,
    {
      top: '-=20',
      autoAlpha: 0
    },
  .2)
  .from('.page-2 .page-dialog', .6, {
    top: '+=100',
    autoAlpha: 0
  }, '-=.8')
  ;

stage.three.tl = new TimelineMax({
  paused: true
});
stage.three.tl
  .set('.page-3', { visibility: 'visible' })
  .from('.page-3 .page-title', .6, {
    top: '-=10rem',
    autoAlpha: 0
  })
  // .from('.page-3 .page-tree', .3, {
  //   autoAlpha: 0
  // })
  .from('.page-3 .page-text-1', .6, {
    left: '+=5rem',
    autoAlpha: 0,
    ease: Back.easeOut
  })
  .from('.page-3 .page-text-2', .6, {
    left: '-=5rem',
    autoAlpha: 0,
    ease: Back.easeOut
  })
  .from('.page-3 .page-text-3', .6, {
    left: '+=5rem',
    autoAlpha: 0,
    ease: Back.easeOut
  })
  .from('.page-3 .page-book', .6, {
    left: '+=100',
    autoAlpha: 0,
    ease: Back.easeOut
  }, '-=.3')
  .from('.page-3 .page-book', 1, {
    rotation: -25,
    yoyo: true,
    repeat: -1,
    ease: Power0.easeNone
  })
  ;

stage.four.tl = new TimelineMax({
  paused: true
});
stage.four.tl
  .set('.page-4', { visibility: 'visible' })
  .from('.page-4 .page-title', .5, {
    top: '-=10rem',
    autoAlpha: 0
  })
  .from('.page-4 .page-xiansuo', .3, {
    top: '-=5rem',
    autoAlpha: 0
  })
  .from('.page-4 .page-path', .4, {
    top: '+=10rem',
    autoAlpha: 0
  })
  .from('.page-4 .page-desc', .3, {
    top: '+=10rem',
    autoAlpha: 0
  }, '-=.2')
  .from('.page-4 .page-cheguwen', .6, {
    top: '+=2rem',
    autoAlpha: 0
  }, '-=.3')
  .from('.page-4 .page-cheguwen-arrow', .6, {
    top: '+=2rem',
    autoAlpha: 0
  }, '-=.3')
  .from('.page-4 .page-tuiguang', .6, {
    top: '+=2rem',
    autoAlpha: 0
  })
  .from('.page-4 .page-tuiguang-arrow', .6, {
    top: '+=2rem',
    autoAlpha: 0
  }, '-=0.6')
  .from('.page-4 .page-fenxiang', .6, {
    top: '+=2rem',
    autoAlpha: 0
  }, '-=.6')
  .from('.page-4 .page-fenxiang-arrow', .6, {
    top: '+=2rem',
    autoAlpha: 0
  },'-=.6')
  .from('.page-4 .page-fenfa', .6, {
    y: '+=80',
    autoAlpha: 0
  }, '-=.3')
  .from('.page-4 .page-pengyou', .6, {
    y: '+=80',
    autoAlpha: 0
  }, '-=.6')
  .staggerTo(
    ['.page-4 .page-cheguwen-arrow','.page-4 .page-tuiguang-arrow', '.page-4 .page-fenxiang-arrow'],
    .6,
    {
      y: '-=6',
      yoyo: true,
      ease: Power2.easeOutIn,
      repeat: -1
    }, .2
  );

stage.seven.tl = new TimelineMax({
  paused: true
});
stage.seven.tl
  .set('.page-5', { visibility: 'visible' })
  .from('.page-5 .page-title', .5, {
    top: '-=10rem',
    autoAlpha: 0
  })
  .from('.page-5 .page-c-1', .5, {
    top: '-=50',
    autoAlpha: 0
  })
  .from('.page-5 .page-c-2', .5, {
    top: '+=50',
    autoAlpha: 0
  }, '-=.5')
  .from('.page-5 .page-c-3', .5, {
    left: '-=50',
    autoAlpha: 0
  })
  .from('.page-5 .page-c-4', .5, {
    left: '+=50',
    autoAlpha: 0
  }, '-=.5')
  .from('.page-5 .page-c-5', .5, {
    left: '-=50',
    autoAlpha: 0
  })
  .from('.page-5 .page-c-6', .5, {
    left: '+=50',
    autoAlpha: 0
  }, '-=.5')
  .from('.page-5 .page-c-7', .5, {
    top: '-=100',
    autoAlpha: 0
  }, '-=.5')
  ;
stage.five.tl = new TimelineMax({
  paused: true
});
stage.five.tl
  .set('.page-6', { visibility: 'visible' })
  .from('.page-6 .page-title', .5, {
    top: '-=10rem',
    autoAlpha: 0
  })
  .staggerFrom(
    [
      '.page-6 .page-6-c-1', '.page-6 .page-6-c-2', '.page-6 .page-6-c-3',
      '.page-6 .page-6-c-4', '.page-6 .page-6-c-5', '.page-6 .page-6-c-6',
      '.page-6 .page-6-c-7', '.page-6 .page-6-c-8'
    ], .3,
    {
      autoAlpha: 0,
      top: '+=20',
      opacity: 0,
      ease: Back.easeOut
    },
  .2)
  .from('.page-6 .page-6-c-9', .5, {
    autoAlpha: 0,
    scale: 0,
    ease: Back.easeOut
  })
  .from('.page-6 .page-6-dialog', .5, {
    top: '+=5rem',
    autoAlpha: 0,
    ease: Back.easeOut
  }, '-=.3')
;

stage.six.tl = new TimelineMax({
  paused: true
});

stage.six.tl
  .set('.page-7', { visibility: 'visible' })
  .from('.page-7 .page-title', .5, {
    top: '-=10rem',
    autoAlpha: 0
  })
  .from('.page-7 .page-phone', .6, {
    left: '-=100',
    autoAlpha: 0
  })
  .from('.page-7 .page-person', .6, {
    left: '+=100',
    autoAlpha: 0
  }, '-=.6')
  .from('.page-7 .page-jifen', .4, {
    top: '+=100',
    autoAlpha: 0,
    ease: Power2.easeOut
  })
  .from('.page-7 .page-tuiguang', .4, {
    top: '+=100',
    autoAlpha: 0,
    ease: Power2.easeOut
  }, '-=.4')
  .from('.page-7 .page-dialog', .6, {
    top: '+=100',
    autoAlpha: 0,
    ease: Back.easeOut
  })
  ;

stage.eight.tl = new TimelineMax({
  paused: true
});
stage.eight.tl
  .set('.page-8', { visibility: 'visible' })
  .from('.page-8 .page-title', .5, {
    top: '-=10rem',
    autoAlpha: 0
  })
  .from('.page-8 .page-c-15', .3, {
    top: '+=100',
    autoAlpha: 0,
    ease: Back.easeOut
  })
  .from('.page-8 .page-dialog-1', .3, {
    top: '+=50',
    autoAlpha: 0,
    ease: Power3.easeOut
  })
  .staggerFrom(
    [
      '.page-8 .page-c-1',
      '.page-8 .page-c-2',
      '.page-8 .page-c-3',
      '.page-8 .page-c-4',
      '.page-8 .page-c-5',
      '.page-8 .page-c-6',
    ],
    .4,
    {
      autoAlpha: 0,
      scale: .5,
      ease: Power3.easeOut
    },
    .2
  )
  .from('.page-8 .page-c-7', .5, {
    autoAlpha: 0,
    scale: 0,
    ease: Power3.easeOut
  })
  .to('.page-8 .page-c-7', .5, {
    // rotation: 10,
    yoyo: true,
    ease: Power0.easeNone
  })
  .staggerFrom(
    [
      '.page-8 .page-c-8',
      '.page-8 .page-c-9',
      '.page-8 .page-c-10',
      '.page-8 .page-c-11',
      '.page-8 .page-c-12',
      '.page-8 .page-c-13',
      '.page-8 .page-c-14'
    ],
    .2,
    {
      autoAlpha: 0,
      top: '+=15',
      ease: Back.easeInOut
    },
    .2
  )
  .from('.page-8 .page-dialog-2', .6, {
    top: '+=50',
    autoAlpha: 0,
    ease: Power3.easeOut
  })
  .to('.page-8 .page-c-7', .5, {
    rotation: 10,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeOut
  })
  ;

stage.nine.tl = new TimelineMax({
  paused: true
});
stage.nine.tl
  .set('.page-9', { visibility: 'visible' })
  .from('.page-9 .page-logo-big', .6, {
    autoAlpha: 0,
    scale: 5,
    rotation: -720,
    ease: Power2.easeOut
  })
  .to('.page-9 .page-logo-big', .4, {
    scale: .2,
    top: '1.5rem',
    rotation: 720,
    ease: Power2.easeIn
  })
  .to('.page-9 .page-logo-big', .6, {
    x: -105,
    rotation: 720,
    autoAlpha: 0,
    ease: Power2.easeOut
  })
  .from('.page-9 .page-logo', 1.5, {
    x: 100,
    autoAlpha: 0,
    ease: Power2.easeOut
  }, '-=.6')
  .from('.page-9 .page-text-1', .6, {
    left: '+=200',
    autoAlpha: 0,
    scale: 2,
  })
  .from('.page-9 .page-text-2', .6, {
    top: '+=200',
    autoAlpha: 0,
  })
  ;

function handleProgress(event) {
    $('#number').html(parseInt(event.loaded.toFixed(2)*100) + '%');
    $('#loadingBar .progress').css({width: parseInt(event.loaded.toFixed(2)*100) + '%'});
}

function handleFileLoaded(event){}

function handleComplete(event){
  // c.Sound.play('music');
  $('#number, #loadingBar').remove();
  if(!isPlay){
    $('#music').trigger('click');
    isPlay = !isPlay;
  }
  $('.swiper-container').removeClass('invisible');
  stage.swiperV = new Swiper('.swiper-container-v', stage.swiperVConf);
}



// $(function(){
//   stage.load();
//   if(!/http/.test(window.location.origin)){
//     $('#number, #loadingBar').remove();
//     $('.swiper-container').removeClass('invisible');
//     stage.swiperV = new Swiper('.swiper-container-v', stage.swiperVConf);
//   }
// });


//if(!/8020/.test(window.location.origin)){
    // wx.config({
    //     debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //     appId: 'wxf95904d2d64d7cf8', // 必填，公众号的唯一标识
    //     timestamp:'1499046750', // 必填，生成签名的时间戳
    //     nonceStr: '4A47D2983C8BD392B120B627E0E1CAB4', // 必填，生成签名的随机串
    //     signature: '02b61f5fa9e347cfdb06fa21cc9e825f1aabce25',// 必填，签名，见附录1
    //     jsApiList: [ 'onMenuShareTimeline' , 'onMenuShareAppMessage','onMenuShareQQ','onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    // });
//}

wx.ready(function(){
  stage.load();
  if(!/http/.test(window.location.origin)){
    $('#number, #loadingBar').remove();
    $('.swiper-container').removeClass('invisible');
    stage.swiperV = new Swiper('.swiper-container-v', stage.swiperVConf);
  }
});
