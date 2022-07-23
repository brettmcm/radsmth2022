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
            order: `${doc.data().order}`,
            category: `${doc.data().category}`,
            logo: `${doc.data().logo}`,
            url: `${doc.data().url}`,
            invert: `${doc.data().invert}`
        }

        logos.push(logoObj);

    });

    logos.sort(function (a, b) { return a.order - b.order });

    // Layout logo elements
    for (index = 0; index < logos.length; index++) {
        var container = document.createElement("div");
        var logoImg = document.createElement("img");
            logoImg.src = logos[index].logo;
            logoImg.setAttribute("class", "project");
            container.appendChild(logoImg);
        var logoName = document.createElement("h4");
            logoName.innerHTML = logos[index].title;
            container.appendChild(logoName);
        var logoCat = document.createElement("p");
            logoCat.classList.add("small");
            logoCat.innerHTML = logos[index].category;
            container.appendChild(logoCat);
        document.getElementById("display-target").appendChild(container);
    }


});