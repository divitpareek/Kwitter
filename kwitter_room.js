
var firebaseConfig = {
      apiKey: "AIzaSyCCqI6PIMtMrGoyx8r71COLPgfeP6YpIgY",
      authDomain: "kashmir-adks.firebaseapp.com",
      databaseURL: "https://kashmir-adks-default-rtdb.firebaseio.com",
      projectId: "kashmir-adks",
      storageBucket: "kashmir-adks.appspot.com",
      messagingSenderId: "1020875602158",
      appId: "1:1020875602158:web:15fc728b567712c09a5bff"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update
      ({
         purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_room.html";
}

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room name- " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML+=row;
      //End code
      });});}

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_room.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter_room.html"
}