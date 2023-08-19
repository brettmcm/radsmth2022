const checkpoint = 200;
const checkpoint2 = 500;
const currentScroll = 0;

var transparentHeader = document.querySelector("header.transparent");
if (transparentHeader) {
    document.querySelector("header.transparent").style.setProperty("--header-opacity", 0);
} 

// var marquee = document.querySelector("div.marquee");
// if (marquee) {
//     document.querySelector("div.marquee").style.setProperty("--marquee-opacity", 1);
//     document.querySelector("div.marquee").style.setProperty("--marquee-translate", 0);
// } 


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
  // document.querySelector("div.marquee").style.setProperty("--marquee-opacity", marqueeOpacity);
  // document.querySelector("div.marquee").style.setProperty("--marquee-translate", currentScroll * 0.5 + "px");
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

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

document.querySelectorAll('.work-highlight').forEach(item => {
  item.addEventListener('mousemove', (event) => {
    // var overItem = item.offset();
    var itemOver = item.getBoundingClientRect();
    var xPos = event.clientX - item.getBoundingClientRect().left;
    var yPos = event.clientY - item.getBoundingClientRect().top;

    var xHalf = (item.getBoundingClientRect().right - item.getBoundingClientRect().left)/2;
    var yHalf = (item.getBoundingClientRect().bottom - item.getBoundingClientRect().top)/2;
    var xTilt = ((xPos - xHalf)/(yHalf * 2)) * 4;
    var yTilt = ((yPos - yHalf)/(xHalf * 2)) * -10;
    
    item.style.cssText += '--mouseX:' + Math.floor(xPos) + 'px; --mouseY:' + Math.floor(yPos) + 'px; --tiltX:' + xTilt + 'deg; --tiltY:' + yTilt + 'deg';
  })
  item.addEventListener('mouseover', (event) => {
    var setimg = item.dataset.hoverimg;
    console.log(setimg);
    item.querySelector('.cover').setAttribute('src', setimg);
  })
  item.addEventListener('mouseout', (event) => {
    var setimg = item.dataset.coverimg;
    console.log(setimg);
    item.querySelector('.cover').setAttribute('src', setimg);
  })
})
