$(function () {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    $('#menu').click(function () {
        $('.menu-link').toggleClass('off');
        $(this).toggleClass('on');
    });

    $(".owl-carousel").owlCarousel({
        center: true,
        items: 1,
        margin: 0,
        loop: true,
        onChanged: callback
    });

    function callback(event) {
        var targetProject = event.item.index,
            projectTitleValue = $(".project-logo").get(targetProject),
            printTitle = $(projectTitleValue).data("project"),
            linkURL = $(projectTitleValue).data("url"),
            invertBody = $(projectTitleValue).data("invert");
        
        $("#project-title-display").html(printTitle);
        $("#project-detail-link").attr("href", linkURL);

        if (invertBody == true) {
            $('body').addClass("inverted");
        } else {
            $('body').removeClass("inverted");
        }
    }

    document.getElementById('next').addEventListener('click', function () {
        $('.owl-carousel').trigger('next.owl.carousel');
    });

    document.getElementById('prev').addEventListener('click', function () {
        $('.owl-carousel').trigger('prev.owl.carousel');
    });

});

