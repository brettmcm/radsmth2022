$(function () {
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 1,
        margin: 0,
        loop: true,
        onChanged: callback,
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

    $(document.documentElement).keyup(function (event) {

        // handle cursor keys
        if (event.keyCode == 37) {
            // go left
            $(".owl-carousel").trigger('prev.owl.carousel');
        } else if (event.keyCode == 39) {
            // go right
            $(".owl-carousel").trigger('next.owl.carousel');
        }

    });

});