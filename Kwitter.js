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

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("username", user_name);
    window.location = "kwitter_room.html";
}