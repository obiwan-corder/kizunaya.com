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