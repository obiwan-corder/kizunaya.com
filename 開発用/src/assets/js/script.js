//
// ハンバーガーメニュー
//
$(".c-drawer-btn").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass("js-active"); //ボタン自身に activeクラスを付与し
  $("#gnav").toggleClass("js-panelactive"); //ナビゲーションにpanelactiveクラスを付与
});

$(".p-gnav__nav-link").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".c-drawer-btn").removeClass("js-active"); //ボタンの activeクラスを除去し
  $("#gnav").removeClass("js-panelactive"); //ナビゲーションのpanelactiveクラスも除去
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
      end: `+=${wrapperWidth}`,
    },
  });
}

function ScrollTimelineAnime() {
  $(".p-spend-slide__block").each(function () {
    var elemPos = $(this).offset().left;
    var scroll = $(window).scrollLeft();
    var windowWidth = $(window).width();
    var startPoint = 100;
    if (scroll >= elemPos - windowWidth - startPoint) {
      var H = $(this).outerWidth(true);
      var percent = ((scroll + startPoint - elemPos) / (H / 2)) * 100;
      if (percent > 100) {
        percent = 105;
      }
      // ボーダーの長さをセット
      $(this)
        .children(".border-line")
        .css({
          width: percent + "%",
        });
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on("scroll", function () {
  ScrollTimelineAnime(); // 線が伸びる関数を呼ぶ
});

$(document).ready(function () {
  setTimeout(function () {
    $("#splash").fadeOut("slow");
  }, 3000); // 3秒後に実行
});
