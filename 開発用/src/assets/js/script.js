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



// 過ごし方ページ：進捗表示のアニメーション設定--

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


$(window).on('scroll load', function() {
  ScrollTimelineAnime('.p-spend-slide__block'); 
  ScrollTimelineAnime('.p-spend-slide__block1', 105);
  ScrollTimelineAnime('.p-spend-slide__block2', 106); 
  ScrollTimelineAnime('.p-spend-slide__block3', 105); 
  ScrollTimelineAnime('.p-spend-slide__block4', 99); 
  ScrollTimelineAnime('.p-spend-slide__block5', 97); 
  ScrollTimelineAnime('.p-spend-slide__block6', 100); 
  ScrollTimelineAnime('.p-spend-slide__block7', 110); 
  ScrollTimelineAnime('.p-spend-slide__block8', 100); 
  ScrollTimelineAnime('.p-spend-slide__block9', 100); 
});

$(document).ready(function () {
  setTimeout(function () {
    $("#splash").fadeOut("slow");
  }, 2500);
}),
  
gsap.registerPlugin(ScrollTrigger);
// document.querySelectorAll(".p-spend-slide__block").forEach(element => {
//   gsap.to(element, {
//     scrollTrigger: {
//       trigger: '.p-spend-slide__block', // トリガーとなる要素
//       start: "left center", // 要素がビューポートの中央に来たときに開始
//       toggleActions: "play none none none", // スクロール時の動作
//       // オプションで markers: true を設定して、開始と終了ポイントを可視化できる
//     },
//     opacity: 1, // 透明度を1に
//     y: 0, // Y軸の位置を0に（上への移動効果を解除）
//     duration: 2, // アニメーションの長さ（秒）
//     ease: "power2.out" // イージングの種類
//   });
// });


gsap.to('.p-spend-slide__block',{opacity:1,
  scrollTrigger: {
    trigger: '.p-spend-slide__block', // トリガーとなる要素
    start: "left center", // 要素がビューポートの中央に来たときに開始
    toggleActions: "play none none none", // スクロール時の動作
    // オプションで markers: true を設定して、開始と終了ポイントを可視化できる
  },
  duration: 2, // アニメーションの長さ（秒）
  ease: "elastic", // イージングの種類
});


// 観光セクションのアニメーション
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
    duration: 1, // アニメーションの長さ（秒）
    ease: "none" // イージングの種類
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
    duration: 1, // アニメーションの長さ（秒）
    ease: "none" // イージングの種類
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
