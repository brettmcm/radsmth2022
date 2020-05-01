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

    console.log(logos);

    for (index = 0; index < logos.length; index++) {
        var elem = document.createElement("img");
        elem.src = logos[index].logo;
        elem.setAttribute("data-title", logos[index].title + "—" + logos[index].category);
        elem.setAttribute("data-url", logos[index].url);
        elem.setAttribute("data-invert", logos[index].invert);

        document.getElementById("work-carousel").appendChild(elem);
    } 

});




$(function () {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    $('#menu').click(function () {
        $('nav').toggleClass('off');
        $(this).toggleClass('on');
    });


});