var firebaseConfig = {
   apiKey: "AIzaSyDpkMHAIw8UefGZGSt7T1Wf4vqMWcGdTX4",
   authDomain: "lets-chat-web-app-30763.firebaseapp.com",
   databaseURL: "https://lets-chat-web-app-30763-default-rtdb.firebaseio.com",
   projectId: "lets-chat-web-app-30763",
   storageBucket: "lets-chat-web-app-30763.appspot.com",
   messagingSenderId: "389675528750",
   appId: "1:389675528750:web:674bc62790566bc42225bf"
 };
 
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room name: " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function addRoom() {
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose: "Adding room name"
   });
   localStorage.setItem("room_name", room_name);
   window.location = "kwitter_room.html";
}

function redirectToRoomName(name) {
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_room.html";
}