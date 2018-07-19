$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyAa-vARBptt3-f2gWM2MDBQCQ_wjCd5QGQ",
        authDomain: "firstportfolio-5b7c2.firebaseapp.com",
        databaseURL: "https://firstportfolio-5b7c2.firebaseio.com",
        projectId: "firstportfolio-5b7c2",
        storageBucket: "firstportfolio-5b7c2.appspot.com",
        messagingSenderId: "444402799294"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    $(document.forms[0]).on('submit', function(event) {
        event.preventDefault();
        var data = $(document.forms[0]).serializeArray();

        var newData = {};

        for (var i = 0; i < data.length; i++) {
            newData[data[i].name] = data[i].value;
        }

        database.ref().push(newData);

        console.log("SENT!")
    })
})