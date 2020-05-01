var firebaseConfig = {
    apiKey: "AIzaSyCvxG4cvYi44bDNnGNI_z49lPjZngV2Fbs",
    authDomain: "radsmth-website.firebaseapp.com",
    databaseURL: "https://radsmth-website.firebaseio.com",
    projectId: "radsmth-website",
    storageBucket: "radsmth-website.appspot.com",
    messagingSenderId: "167933182309",
    appId: "1:167933182309:web:ab24c6399b7392f37b618c",
    measurementId: "G-1T0X34DMQD"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();


let db = firebase.firestore(),
    logoData = db.collection("logos"),
    logoObj = {},
    logos = [];

logoData.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

        logoObj = {
            title: `${doc.data().title}`,
            category: `${doc.data().category}`,
            logo: `${doc.data().logo}`,
            url: `${doc.data().url}`,
            invert: `${doc.data().invert}`
        }

        logos.push(logoObj);

    });

    for (index = 0; index < logos.length; index++) {
        var elem = document.createElement("img");
        elem.src = logos[index].logo;
        elem.setAttribute("data-title", logos[index].title + "—" + logos[index].category);
        elem.setAttribute("data-url", logos[index].url);
        elem.setAttribute("data-invert", logos[index].invert);

        document.getElementById("work-carousel").appendChild(elem);

    }

    displayInfo(logos[0].title + "—" + logos[0].category, logos[0].url, logos[0].invert);


});

function displayInfo(title, link, invert) {
    document.getElementById("project-title-display").innerHTML = title;
    document.getElementById("project-detail-link").href = link;

    var bodyElement = document.body;

    if (invert == "true") {
        document.body.className = 'inverted';
    } else {
        document.body.className = 'not';
    }
}


document.getElementById("work-carousel").addEventListener('scroll', function () {

    let scrollPosition = document.getElementById("work-carousel").scrollTop,
        windowHeight = window.innerHeight,
        windowHalfHeight = windowHeight / 2,
        scrollStatus = 1 + (scrollPosition - windowHalfHeight) / windowHeight,
        targetProject = parseInt(scrollStatus);

    displayInfo(logos[targetProject].title + "—" + logos[targetProject].category, logos[targetProject].url, logos[targetProject].invert);

});



$(function () {
    // $(".owl-carousel").owlCarousel({
    //     center: true,
    //     items: 1,
    //     margin: 0,
    //     loop: true,
    //     onChanged: callback,
    // });


    // function callback(event) {
    //     var targetProject = event.item.index,
    //         projectTitleValue = $(".project-logo").get(targetProject),
    //         printTitle = $(projectTitleValue).data("project"),
    //         linkURL = $(projectTitleValue).data("url"),
    //         invertBody = $(projectTitleValue).data("invert");

    //     $("#project-title-display").html(printTitle);
    //     $("#project-detail-link").attr("href", linkURL);

    //     if (invertBody == true) {
    //         $('body').addClass("inverted");
    //     } else {
    //         $('body').removeClass("inverted");
    //     }

    // }

    // document.getElementById('next').addEventListener('click', function () {
    //     $('.owl-carousel').trigger('next.owl.carousel');
    // });

    // document.getElementById('prev').addEventListener('click', function () {
    //     $('.owl-carousel').trigger('prev.owl.carousel');
    // });

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