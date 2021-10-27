$(function () {
function interSect(){
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
    }
    else {
        nav.classList.remove("scrolled");
    }
  });
},
intro_Options);

introObserver.observe(intro);
}
 
interSect();
  ////////////////////////document ready function ends here
});


