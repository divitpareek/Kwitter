var firebaseConfig = {
      apiKey: "AIzaSyCCqI6PIMtMrGoyx8r71COLPgfeP6YpIgY",
      authDomain: "kashmir-adks.firebaseapp.com",
      databaseURL: "https://kashmir-adks-default-rtdb.firebaseio.com",
      projectId: "kashmir-adks",
      storageBucket: "kashmir-adks.appspot.com",
      messagingSenderId: "1020875602158",
      appId: "1:1020875602158:web:15fc728b567712c09a5bff"
    };
    
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push
      ({
         name:user_name ,
         message:msg,
         like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
