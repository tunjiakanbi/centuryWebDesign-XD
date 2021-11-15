$(function () {
  // gsap.registerPlugin(ScrollTrigger);

  //intersection observer starts here
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
//intersection observer ends here

//gsap code starts here
  const svgAssests = $('.mySVG');
  console.log(svgAssests);
  //const svgGroup1 = document.querySelectorAll('svg#Group_4.mySVG > path');
  //const svgGroup2 = document.querySelectorAll('svg#mskG_1a.mySVG > g#Mask_Group1 > #Group_1 > path');

  const svgGroup1 = $('svg#Group_4.mySVG > path');
  const svgGroup2 = $('svg#mskG_1a.mySVG > g#Mask_Group_1 > g#Group_1 > path');
  // const svgGroup2 = $('#Group_1 > path');
  // console.log(svgGroup1);
  // console.log(svgGroup2);
  // console.log(svgAssests);
  function init() {
    let tl = gsap.timeline();
    tl.to('div.intro-content', {
      autoAlpha: 1,
      duration: 3
    }, '-=2');
    tl.from(svgAssests, {
      xPercent: -100,
      autoAlpha: 0,
      stagger: 0.2,
      ease: 'linear'
    },'+=2');
    // tl.from(svgAssests, {
    //   xPercent: -100,
    //   autoAlpha: 0,
    //   stagger: 0.2,
    //   ease: 'elastic.inOut(1, 0.3)'
    // });
    tl.fromTo(svgGroup1, {
      yPercent: -100,
      autoAlpha: 0
    }, {
      yPercent: 0,
      autoAlpha: 1,
      stagger: 0.01
    })
    tl.fromTo(svgGroup2, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      stagger: 0.2
    },'-=3')
  

  }



  init();
    const scroll = new LocomotiveScroll({
      // el: document.querySelector('body'),
      el: document.querySelector('.intro-content'),
      smooth: true,
      // offset: ["10vh", "0"],
      // initPosition: {x:0, y: "10vh"},
      lerp: 0.1
  });
  ////////////////////////document ready function ends here
});