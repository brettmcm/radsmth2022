document.querySelectorAll('.carousel').forEach(item => {
        
    item.addEventListener('scroll', event => {
        let carousel = event.currentTarget,
            width = carousel.offsetWidth,
            pages = carousel.children.length,
            pagination = getNextSibling(carousel, '.pages'),
            controlPrev = getNextSibling(carousel, '.prev'),
            controlNext = getNextSibling(carousel, '.next'),
            currentPage = parseInt((carousel.scrollLeft / width) + 0.5);

        for (let i = 0; i < pagination.children.length; i++) {
            pagination.children[i].classList.remove('active');
        }
        pagination.children[currentPage].classList.add('active');

        if (currentPage == 0) {
            controlPrev.classList.add('disabled');
        } else if (currentPage == pages - 1) {
            controlNext.classList.add('disabled');
        } else {
            controlPrev.classList.remove('disabled');
            controlNext.classList.remove('disabled');
        }
    })

});

document.querySelectorAll('.controls.prev').forEach(item => {

    item.addEventListener('click', event => {
        let control = event.currentTarget,
            carousel = getPrevSibling(control, '.carousel'),
            width = carousel.offsetWidth;

        carousel.scrollLeft = carousel.scrollLeft - width;
    })

});

document.querySelectorAll('.controls.next').forEach(item => {

    item.addEventListener('click', event => {
        let control = event.currentTarget,
            carousel = getPrevSibling(control, '.carousel'),
            width = carousel.offsetWidth;

        carousel.scrollLeft = carousel.scrollLeft + width;
    })

});

var getNextSibling = function (elem, selector) {
    var sibling = elem.nextElementSibling;
    if (!selector) return sibling;
    while (sibling) {
        if (sibling.matches(selector)) return sibling;
        sibling = sibling.nextElementSibling
    }
};

var getPrevSibling = function (elem, selector) {
    var sibling = elem.previousElementSibling;
    if (!selector) return sibling;
    while (sibling) {
        if (sibling.matches(selector)) return sibling;
        sibling = sibling.previousElementSibling
    }
};