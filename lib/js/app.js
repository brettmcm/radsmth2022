let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});


// document.getElementById("menu").addEventListener("click", , function () {
//     var nav = document.nav,
//         menu = this;

//     nav.classList.toggle("off");
//     menu.classList.toggle("on");
// });

$(function () {

    

    $('#menu').click(function () {
        $('nav').toggleClass('off');
        $(this).toggleClass('on');
    });


});