let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});


document.getElementById('hamburger').addEventListener('click', event => {
    let hamburger = event.currentTarget,
        menu = getNextSibling(hamburger, 'nav');

    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
        document.body.classList.remove("no-scroll");
    } else {
        hamburger.classList.add("active");
        menu.classList.add("active");
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