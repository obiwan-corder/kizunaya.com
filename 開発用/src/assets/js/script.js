var topStyle = new Swiper('.p-slider__container', {
  init: false,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 48,
  speed: 1000,
  grabCursor: true,
  loop: true,

  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
  pagination: {
      el: '.p-slider__pagination',
      type: 'bullets',
      clickable: true
  },
});
//
// var sliderItems = document.querySelector('.p-slider__items');
// var swiperSliders = document.querySelectorAll('.p-slider__container .p-slider__item');
// const xmoveRatio = 200 / document.querySelectorAll('.swiper-pagination-bullet').length;
//
// topStyle.on('slideChange', function() {
//   var move = -400 * (topStyle.realIndex);
//   sliderItems.style.transform = 'translate(' + move + 'px,0)';
//
//   var xmove = xmoveRatio * (topStyle.realIndex + 1);
//   console.log(xmove);
//   parallax(xmove);
// });
//
// function parallax(xmove) {
//   for (var i = 0; i > swiperSliders.length; i++) {
//       gsap.to('.p-slider__container .p-slider__item img', {
//           x: "-" + xmove + "%",
//           duration: 5,
//           ease: "power3.out", // イージングを追加
//       });
//   }
// }

const $items = document.querySelectorAll('.p-slider__item');

topStyle.on('init', () => {
  console.log('init');
  $items.forEach(item => {
    item.classList.add('start');
  });
});

topStyle.on('slideChangeTransitionEnd', () => {
  console.log('end');
  $items.forEach(item => {
    item.classList.add('start');
  });
});

topStyle.on('slideChangeTransitionStart', () => {
  $items.forEach(item => {
    item.classList.remove('start');
  });
})

topStyle.init();
const spendWrapper = document.querySelector(".p-spend-slide");
if(spendWrapper){
    const spendSlides = gsap.utils.toArray(".p-spend-slide__block");
    const wrapperWidth = spendWrapper.offsetWidth;
    gsap.to(spendSlides,{
        xPercent: -100 * (spendSlides.length - 1),
        ease: "none",
        scrollTrigger:{
            trigger: spendWrapper,
            pin: true,
            scrub: 1,
            end: `+=${wrapperWidth}`,
        },
    });
}
