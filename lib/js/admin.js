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
            id: `${doc.id}`,
            order: `${doc.data().order}`,
            title: `${doc.data().title}`,
            logo: `${doc.data().logo}`,
            invert: `${doc.data().invert}`
        }

        logos.push(logoObj);

    });

    logos.sort(function (a, b) { return a.order - b.order });

    // Layout logo elements
    for (index = 0; index < logos.length; index++) {
        var card = document.createElement("div");
            card.setAttribute("id", logos[index].id);
            card.setAttribute("data-order", index + 1);
            card.setAttribute("class", "project");
            document.getElementById("work-list").appendChild(card);

        var theLogo = document.createElement("img");
            theLogo.src = logos[index].logo;
            document.getElementById(logos[index].id).appendChild(theLogo);
    }


});

function saveData() {

    for (index = 0; index < logos.length; index++) {
        db.collection("logos").doc(logos[index].id).set({
            order: document.getElementById(logos[index].id).dataset.order
        }, { merge: true })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
    }
    
}




$(function () {

    $("#work-list").sortable({
        placeholder: "ui-state-highlight",
        stop: function (event, ui) { 

            $(".project").each(function () {
                $(this).attr("data-order", $(this).index() + 1);
            });
            
        }
    });

    $("#save-button").click(function () {
        saveData();
    });

});