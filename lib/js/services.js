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
    serviceData = db.collection("services"),
    services = [];

serviceData.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        services.push(`${ doc.data().title }`);
    });

    // Layout logo elements
    for (index = 0; index < services.length; index++) {
        var service = document.createElement("li");
        service.innerHTML = services[index];
        document.getElementById("service-list").appendChild(service);
    }



});