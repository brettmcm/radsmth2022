$(function () {

    $('#menu').click(function () {
        $('.menu-link').toggleClass('off');
        $(this).toggleClass('on');
    });

    $(".owl-carousel").owlCarousel({
        center: true,
        items: 1,
        autoHeight: true,
        loop: true,
        onChanged: callback
    });

    function callback(event) {
        var targetProject = event.item.index,
            projectTitleValue = $(".project-logo").get(targetProject),
            printTitle = $(projectTitleValue).data("project"),
            linkURL = $(projectTitleValue).data("url");
        
        $("#project-title-display").html(printTitle);
        $("#project-detail-link").attr("href", linkURL);
    }

    document.getElementById('next').addEventListener('click', function () {
        $('.owl-carousel').trigger('next.owl.carousel');
    });

    document.getElementById('prev').addEventListener('click', function () {
        $('.owl-carousel').trigger('prev.owl.carousel');
    });

});

