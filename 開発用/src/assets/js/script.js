const spendWrapper = document.querySelector(".p-spend-slide");
if(spendWrapper && window.innerWidth > 768){
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

function ScrollTimelineAnime(){
    $('.p-spend-slide__block').each(function(){
        var elemPos = $(this).offset().left;
        var scroll = $(window).scrollLeft();
        var windowWidth = $(window).width();
        var startPoint = 100;
        if(scroll >= elemPos - windowWidth - startPoint){
            var H = $(this).outerWidth(true)
            var percent = (scroll + startPoint - elemPos)/(H/2)*100;
            if(percent > 100 ){
                percent = 105;
            }
            // ボーダーの長さをセット
            $(this).children('.border-line').css({
                width:percent + "%",
            });
        }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on('scroll', function(){
	ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
});