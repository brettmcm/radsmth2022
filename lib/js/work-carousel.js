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
    
    // Create logo array
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

    // Layout logo elements
    for (index = 0; index < logos.length; index++) {
        var elem = document.createElement("img");
        elem.src = logos[index].logo;
        elem.setAttribute("data-invert", logos[index].invert);
        elem.setAttribute("class", "project");
        document.getElementById("work-carousel").appendChild(elem);
    }

    // Set clones for looping
    let totalProject = logos.length;

    var clone1 = document.createElement("img");
        clone1.src = logos[0].logo;
        elem.setAttribute("data-invert", logos[0].invert);
        clone1.setAttribute("class", "clone");
        document.getElementById("work-carousel").appendChild(clone1);

    var clone2 = document.createElement("img");
        clone2.src = logos[totalProject - 1].logo;
        elem.setAttribute("data-invert", logos[totalProject - 1].invert);
        clone2.setAttribute("class", "clone");
        document.getElementById("work-carousel").insertBefore(clone2, document.getElementById("work-carousel").firstChild);

    // Define first position
    let carousel = document.getElementById("work-carousel"),
        windowWidth = window.innerWidth;

        carousel.scrollLeft = windowWidth;

    // Init info display
    displayInfo(logos[0].title + "—" + logos[0].category, logos[0].url, logos[0].invert);


});

// Dynamically display info
function displayInfo(title, link, invert) {
    document.getElementById("project-title-display").innerHTML = title;
    document.getElementById("project-detail-link").href = link;
    if (invert == "true") {
        document.body.className = 'inverted';
    } else {
        document.body.className = 'not';
    }
}

// Get carousel position to find which logo is displayed
document.getElementById("work-carousel").addEventListener('scroll', function () {

    let carousel = document.getElementById("work-carousel"),
        totalProjects = document.querySelectorAll('img.project').length,
        scrollPosition = document.getElementById("work-carousel").scrollLeft,
        windowWidth = window.innerWidth,
        windowHalfWidth = windowWidth / 2,
        scrollStatus = 1 + (scrollPosition - windowHalfWidth) / windowWidth,
        targetProject = parseInt(scrollStatus) - 1;

        // Avoid targeting clones for data
        if (targetProject > totalProjects - 1) {
            targetProject = 0;
        } else if (targetProject < 0 ) {
            targetProject = totalProjects - 1;
        }

        // Set looping behavior
        if (scrollPosition == ( totalProjects + 1 ) * windowWidth ) {
            carousel.scrollLeft = windowWidth;
        } else if (scrollPosition == 0) {
            carousel.scrollLeft = totalProjects * windowWidth;
        }

    // Update info display
    displayInfo(logos[targetProject].title + "—" + logos[targetProject].category, logos[targetProject].url, logos[targetProject].invert);


});

// Function for manually advancing/returning carousel
function changePage(dir) { 
    let carousel = document.getElementById("work-carousel"),
        totalProjects = document.querySelectorAll('img.project').length,
        scrollPosition = document.getElementById("work-carousel").scrollLeft,
        windowWidth = window.innerWidth;


    switch (dir) {
        case next:
            carousel.scrollLeft = carousel.scrollLeft + windowWidth;
            break;
        case prev:
            carousel.scrollLeft = carousel.scrollLeft - windowWidth;
            break;
        default:
            break;
    }
}



$(function () {

    $('#next').click(function () {
        changePage(next);
    });

    $('#prev').click(function () {
        changePage(prev);
    });

    $(document.documentElement).keyup(function (event) {

        if (event.keyCode == 37) {
            // go left
            changePage(prev);
        } else if (event.keyCode == 39) {
            // go right
            changePage(next);
        }

    });

});