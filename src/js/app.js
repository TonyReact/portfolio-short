document.body.style.overflowY = "hidden";
document.body.onload = function () {
  setTimeout(() => {
    const preloader = document.querySelector("#page-preloader");
    const wrapper = document.querySelector(".wrapper");
    wrapper.style.opacity = 1;
    document.body.style.overflowY = "";
    preloader.remove();
  }, 4000);
};

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
if (ScrollTrigger.isTouch == 1) {

} else {
  
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".head",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".head",
        start: "center",
        end: "820",
        scrub: true,
      },
    }
  );

  let itemsLeft = gsap.utils.toArray(".gallery__left .gallery__item");

  itemsLeft.forEach((item) => {
    gsap.fromTo(
      item,
      { x: -100, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });

  let itemsRight = gsap.utils.toArray(".gallery__right .gallery__item");

  itemsRight.forEach((item) => {
    gsap.fromTo(
      item,
      { x: 100, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });
}