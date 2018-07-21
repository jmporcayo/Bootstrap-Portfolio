console.log("this is linked");

var config = {
    apiKey: "AIzaSyA83k55VD-gbuL5MlVdBftuD5SOG8QHkYA",
    authDomain: "contacts-portfolio.firebaseapp.com",
    databaseURL: "https://contacts-portfolio.firebaseio.com",
    projectId: "contacts-portfolio",
    storageBucket: "",
    messagingSenderId: "617511962842"
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

    $(document).on("click", "#submit-button", function(){

        console.log("this was clicked");
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var message = $('#message').val().trim();

        console.log(name)
        console.log(email)
        console.log(message);


        // this is short hand because we are saving the property name to the same name as our variable
        var contactFormObj = {
            name,
            email,
            message
        }

        // var contactFormObj = {
        //     name: name,
        //     email: email,
        //     message: message
        // }

        database.ref().push(contactFormObj);
    })
