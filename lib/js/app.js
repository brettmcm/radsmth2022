const checkpoint = 200;
const checkpoint2 = 500;
const currentScroll = 0;

var transparentHeader = document.querySelector("header.transparent");
if (transparentHeader) {
    document.querySelector("header.transparent").style.setProperty("--header-opacity", 0);
} 

var marquee = document.querySelector("div.marquee");
if (marquee) {
    document.querySelector("div.marquee").style.setProperty("--marquee-opacity", 1);
    document.querySelector("div.marquee").style.setProperty("--marquee-translate", 0);
} 


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    headerOpacity = currentScroll / checkpoint;
  } else {
    headerOpacity = 1;
  }
  if (currentScroll <= checkpoint2) {
    marqueeOpacity = 1 - (currentScroll / checkpoint2);
  } else {
    marqueeOpacity = 0;
  }
  document.querySelector("header.transparent").style.setProperty("--header-opacity", headerOpacity);
  document.querySelector("div.marquee").style.setProperty("--marquee-opacity", marqueeOpacity);
  document.querySelector("div.marquee").style.setProperty("--marquee-translate", currentScroll * 0.5 + "px");
});

function setTranslate(xPos, yPos, blurVal, fadeVal, el) {
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}

// window.addEventListener("DOMContentLoaded", scrollLoop, false);

var xScrollPosition;
var yScrollPosition;

// function scrollLoop() {
//     xScrollPosition = window.scrollX;
//     yScrollPosition = window.scrollY;

//     setTranslate(0, yScrollPosition * 0.5, yScrollPosition * 0.05, 1 - (yScrollPosition * 0.001), marquee);

//     requestAnimationFrame(scrollLoop);
// }


document.getElementById('hamburger').addEventListener('click', event => {
    let hamburger = event.currentTarget,
        menu = getNextSibling(hamburger, 'nav'),
        logo = document.querySelector(".logo");

    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
        logo.classList.remove("active");
        document.body.classList.remove("no-scroll");
    } else {
        hamburger.classList.add("active");
        menu.classList.add("active");
        logo.classList.add("active");
        document.body.classList.add("no-scroll");
    }
});

var getNextSibling = function (elem, selector) {
    var sibling = elem.nextElementSibling;
    if (!selector) return sibling;
    while (sibling) {
        if (sibling.matches(selector)) return sibling;
        sibling = sibling.nextElementSibling
    }
};