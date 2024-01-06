//
// ハンバーガーメニュー
//
$(".c-drawer-btn").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass("js-active"); //ボタン自身に activeクラスを付与し
  $("#gnav").toggleClass("js-panelactive"); //ナビゲーションにpanelactiveクラスを付与
  $(".p-gnav__background").toggleClass("is-active"); //.p-gnav__backgroundにis-activeクラスを付与
  $("body").toggleClass("is-active"); //bodyにis-activeクラスを付与
});

$(".p-gnav__nav-link").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".c-drawer-btn").removeClass("js-active"); //ボタンの activeクラスを除去し
  $("#gnav").removeClass("js-panelactive"); //ナビゲーションのpanelactiveクラスも除去
  $(".p-gnav__background").removeClass("is-active");//.p-gnav__backgroundにis-activeクラスを除去
  $("body").removeClass("is-active");//bodyにis-activeクラスを除去
});

$(".p-gnav__background").click(function () {
  //バックグラウンドがクリックされたら
  $(".c-drawer-btn").removeClass("js-active"); //ボタンの activeクラスを除去し
  $("#gnav").removeClass("js-panelactive"); //ナビゲーションのpanelactiveクラスも除去
  $(".p-gnav__background").removeClass("is-active");//.p-gnav__backgroundにis-activeクラスを除去
  $("body").removeClass("is-active");//bodyにis-activeクラスを除去
});
//
//
//

const topStyle = new Swiper(".p-slider__container", {
  init: false,
  // slidesPerView: 3,
  // slidesPerGroup: 1,
  speed: 1000,
  grabCursor: true,
  loop: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".p-slider__pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 24,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
  },
});

const $items = document.querySelectorAll(".p-slider__item");
let timerId;

topStyle.on("init", () => {
  timerId = window.setTimeout(() => {
    $items.forEach((item) => {
      item.classList.add("start");
    });
  }, 100);
});

topStyle.on("slideChangeTransitionEnd", () => {
  $items.forEach((item) => {
    item.classList.add("start");
  });

  if (timerId) {
    clearTimeout(timerId);
  }
});

topStyle.on("slideChangeTransitionStart", () => {
  $items.forEach((item) => {
    item.classList.remove("start");
  });
});

topStyle.init();

// 過ごし方ページ：横スクロールのアニメーション--

const spendWrapper = document.querySelector(".p-spend-slide");
if (spendWrapper && window.innerWidth > 768) {
  const spendSlides = gsap.utils.toArray(".p-spend-slide__block");
  const wrapperWidth = spendWrapper.offsetWidth;
  gsap.to(spendSlides, {
    xPercent: -100 * (spendSlides.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: spendWrapper,
      pin: true,
      scrub: 1,
      start: "top top",
      end: `+=${wrapperWidth}`,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
}

// --過ごし方ページ：横スクロールのアニメーション


// 過ごし方ページ：進捗表示のアニメーション設定
//線が伸びるための設定を関数でまとめる
// function ScrollTimelineAnime(){
//   $('.p-spend-slide__block').each(function(){// それぞれのli要素の
//     var elemPos = $(this).offset().left;// 上からの高さ取得
//     var scroll = $(window).scrollLeft();// スクロール値取得
//     var windowWidth = $(window).width();// windowの高さ取得
//     var startPoint = 100; //線をスタートさせる位置を指定※レイアウトによって調整してください
//     if (scroll >= elemPos - windowWidth-startPoint){       
//       var H = $(this).outerWidth(true)//liの余白と高さを含めた数値を取得
//       //スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
//       var percent = (scroll+startPoint - elemPos) / (H/2) *100;//liの余白と高さの半分で線を100％に伸ばす

//       // 100% を超えたらずっと100%を入れ続ける
//       if(percent  > 100){
//         percent  = 100;
//       }
//       // ボーダーの長さをセット
//       $(this).children('.border-line').css({
//         width: percent + "%", //CSSでパーセント指定
//       });
//     } 
//   });
// }

// // 画面をスクロールをしたら動かしたい場合の記述
// $(window).on('scroll', function(){
//   ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
// });

// // ページが読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load', function(){
//   ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
// });

// function ScrollTimelineAnime1(){
//   $('.p-spend-slide__block1').each(function(){// それぞれのli要素の
//     var elemPos1 = $(this).offset().left;// 上からの高さ取得
//     var scroll1 = $(window).scrollLeft();// スクロール値取得
//     var windowWidth1 = $(window).width();// windowの高さ取得
//     var startPoint1 = 100; //線をスタートさせる位置を指定※レイアウトによって調整してください
//     if (scroll1 >= elemPos1 - windowWidth1-startPoint1){       
//       var H1 = $(this).outerWidth(true)//liの余白と高さを含めた数値を取得
//       //スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
//       var percent1 = (scroll1+startPoint1 - elemPos1) / (H1/2) *100;//liの余白と高さの半分で線を100％に伸ばす

//       // 100% を超えたらずっと100%を入れ続ける
//       if(percent1  > 100){
//         percent1  = 120;
//       }
//       // ボーダーの長さをセット
//       $(this).children('.border-line').css({
//         width: percent1 + "%", //CSSでパーセント指定
//       });
//     } 
//   });
// }

// // 画面をスクロールをしたら動かしたい場合の記述
// $(window).on('scroll', function(){
//   ScrollTimelineAnime1();// 線が伸びる関数を呼ぶ
// });

// // ページが読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load', function(){
//   ScrollTimelineAnime1();// 線が伸びる関数を呼ぶ
// });

// function ScrollTimelineAnime2(){
//   $('.p-spend-slide__block2').each(function(){// それぞれのli要素の
//     var elemPos2 = $(this).offset().left;// 上からの高さ取得
//     var scroll2 = $(window).scrollLeft();// スクロール値取得
//     var windowWidth2 = $(window).width();// windowの高さ取得
//     var startPoint2 = 100; //線をスタートさせる位置を指定※レイアウトによって調整してください
//     if (scroll2 >= elemPos2 - windowWidth2-startPoint2){       
//       var H2 = $(this).outerWidth(true)//liの余白と高さを含めた数値を取得
//       //スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
//       var percent2 = (scroll2+startPoint2 - elemPos2) / (H2/2) *100;//liの余白と高さの半分で線を100％に伸ばす

//       // 100% を超えたらずっと100%を入れ続ける
//       if(percent2  > 100){
//         percent2  = 120;
//       }
//       // ボーダーの長さをセット
//       $(this).children('.border-line').css({
//         width: percent2 + "%", //CSSでパーセント指定
//       });
//     } 
//   });
// }

// // 画面をスクロールをしたら動かしたい場合の記述
// $(window).on('scroll', function(){
//   ScrollTimelineAnime2();// 線が伸びる関数を呼ぶ
// });

// // ページが読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load', function(){
//   ScrollTimelineAnime2();// 線が伸びる関数を呼ぶ
// });

function ScrollTimelineAnime(selector, maxPercent = 100) {
  $(selector).each(function() {
      const elemPos = $(this).offset().left;
      const scroll = $(window).scrollLeft();
      const windowWidth = $(window).width();
      const startPoint = 100;
      if (scroll >= elemPos - windowWidth - startPoint) {
          let H = $(this).outerWidth(true);
          let  percent = (scroll + startPoint - elemPos) / (H / 2) * 100;
          if (percent > maxPercent) {
              percent = maxPercent;
          }
          $(this).children('.border-line').css({
              width: percent + "%",
          });
      }
  });
}

// 画面をスクロールしたり、ページが読み込まれたりしたときに動作させる
$(window).on('scroll load', function() {
  ScrollTimelineAnime('.p-spend-slide__block'); // 元のScrollTimelineAnime
  ScrollTimelineAnime('.p-spend-slide__block1', 105); // 元のScrollTimelineAnime1
  ScrollTimelineAnime('.p-spend-slide__block2', 106); // 元のScrollTimelineAnime2
  ScrollTimelineAnime('.p-spend-slide__block3', 105); // 元のScrollTimelineAnime2
  ScrollTimelineAnime('.p-spend-slide__block4', 99); // 元のScrollTimelineAnime2
  ScrollTimelineAnime('.p-spend-slide__block5', 97); // 元のScrollTimelineAnime2
  ScrollTimelineAnime('.p-spend-slide__block6', 100); // 元のScrollTimelineAnime2
  ScrollTimelineAnime('.p-spend-slide__block7', 110); // 元のScrollTimelineAnime2
  ScrollTimelineAnime('.p-spend-slide__block8', 100); // 元のScrollTimelineAnime2
  ScrollTimelineAnime('.p-spend-slide__block9', 100); // 元のScrollTimelineAnime2
});


$(document).ready(function () {
  setTimeout(function () {
    $("#splash").fadeOut("slow");
  }, 3000); 
}),
gsap.registerPlugin(ScrollTrigger);

// 各要素に対してアニメーションを設定
document.querySelectorAll(".p-spend-slide__block").forEach(element => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element, // トリガーとなる要素
      start: "left center", // 要素がビューポートの中央に来たときに開始
      toggleActions: "play none none none", // スクロール時の動作
      // オプションで markers: true を設定して、開始と終了ポイントを可視化できる
    },
    opacity: 1, // 透明度を1に
    y: 0, // Y軸の位置を0に（上への移動効果を解除）
    duration: 2, // アニメーションの長さ（秒）
    ease: "power2.out" // イージングの種類
  });
});
// 各要素に対してアニメーションを設定
document.querySelectorAll(".p-spend-tour__title").forEach(element => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element, // トリガーとなる要素
      start: "left center", // 要素がビューポートの中央に来たときに開始
      toggleActions: "play none none none", // スクロール時の動作
      // オプションで markers: true を設定して、開始と終了ポイントを可視化できる
    },
    opacity: 1, // 透明度を1に
    y: 0, // Y軸の位置を0に（上への移動効果を解除）
    duration: 2, // アニメーションの長さ（秒）
    ease: "power2.out" // イージングの種類
  });
});
document.querySelectorAll(".p-spend-tour__card").forEach(element => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element, // トリガーとなる要素
      start: "left center", // 要素がビューポートの中央に来たときに開始
      toggleActions: "play none none none", // スクロール時の動作
      // オプションで markers: true を設定して、開始と終了ポイントを可視化できる
    },
    opacity: 1, // 透明度を1に
    y: 0, // Y軸の位置を0に（上への移動効果を解除）
    duration: 2, // アニメーションの長さ（秒）
    ease: "power2.out" // イージングの種類
  });

});



// 
// モーダル------------------------------------------------------------------
//ダイアログ表示するためにクリックしたい要素
const dialogOpenImgs = document.querySelectorAll(".js-dialog-open");
// ×ボタンを入れた配列
const dialogCloseButtons = document.querySelectorAll(".js-dialog-close");
const { body } = document;
const MODAL_CLASS = "is-modal"; 

//  コールバック関数は任意名
dialogOpenImgs.forEach((open) => {
  const dialog = document.querySelector(open.dataset.dialog);

  open.addEventListener("click", () =>{
    dialog.showModal();
  });
});

// 閉じるとき
dialogCloseButtons.forEach((close) => {
  const dialog = close.closest("dialog");

  close.addEventListener("click", () => {
    dialog.close();
  });
});
// 
// 
// 

jQuery(window).on("scroll", function() {
	if (jQuery(this).scrollTop() > 200) {
		jQuery('.c-scroll__btn').fadeIn(500); // フェードイン
	} else {
		jQuery('.c-scroll__btn').fadeOut(500); // フェードアウト
	}
});

jQuery('.c-scroll__btn').click(function () {
	jQuery('body,html').animate({
		scrollTop: 0
	}, 500);
	return false;

});

jQuery(window).on("scroll", function() {
	if (jQuery(this).scrollTop() > 200) {
		jQuery('.c-search-btn').fadeIn(500); // フェードイン
	} else {
		jQuery('.c-search-btn').fadeOut(500); // フェードアウト
	}
});

jQuery('.c-search-btn').click(function () {
	jQuery('body,html').animate({
		scrollTop: 0
	}, 500);
	return false;

});
