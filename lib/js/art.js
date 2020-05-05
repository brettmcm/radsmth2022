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


let folder = firebase.storage().ref("art");

// folder.listAll().then(function (res) {
//     res.prefixes.forEach(function (folderRef) {
//         console.log(folderRef);
//     });
//     res.items.forEach(function (itemRef) {
//         // All the items under listRef.
//     });
// }).catch(function (error) {
//     // Uh-oh, an error occurred!
// });

// Now we get the references of these images
folder.listAll().then(function (result) {
    result.items.forEach(function (imageRef) {
        // And finally display them
        displayImage(imageRef);
    });
}).catch(function (error) {
    // Handle any errors
});

function displayImage(imageRef) {
    imageRef.getDownloadURL().then(function (url) {
        // TODO: Display the image on the UI
        var piece = document.createElement("img"),
            time = Math.random() * 0.4;
        piece.src = url;
        piece.style.animationDelay = time + 's';
        document.getElementById("art-grid").appendChild(piece);
    }).catch(function (error) {
        // Handle any errors
    });
}