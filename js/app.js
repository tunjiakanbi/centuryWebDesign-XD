$(function () {
  function interSect() {
    const nav = document.querySelector("nav");
    const intro = document.querySelector(".intro-content");
    const intro_Options = {
      rootMargin: '-750px 0px 0px 0px',
      // threshold: 1
    };

    const introObserver = new IntersectionObserver(function (
        entries,
        introObserver
      ) {
        entries.forEach((entry) => {
          console.log(entry);
          if (!entry.isIntersecting) {
            nav.classList.add("scrolled");
          } else {
            nav.classList.remove("scrolled");
          }
        });
      },
      intro_Options);

    introObserver.observe(intro);
  }

  interSect();


  const svgAssests = $('.mySVG');
console.log(svgAssests);
function init() {
  let tl = gsap.timeline();
tl.to('div.intro-content', {autoAlpha: 1, duration: 3}, '+=2');
tl.from(svgAssests, {xPercent: -100, autoAlpha: 0, stagger: 0.2, ease: 'elastic.inOut(1, 0.3)'});
}

init();
  ////////////////////////document ready function ends here
});


