const firebaseConfig = {
      apiKey: "AIzaSyBMmGCfS12tHm_zRKNfj9pxlHmBnavSrd4",
      authDomain: "lets-chat-app-5836a.firebaseapp.com",
      projectId: "lets-chat-app-5836a",
      storageBucket: "lets-chat-app-5836a.appspot.com",
      messagingSenderId: "707401217834",
      appId: "1:707401217834:web:27c51cfdb6bef74eb8d053"
    };
    
    const app = initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";
    
    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
    }

    function getData()
    {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) {
         childKey  = childSnapshot.key;
          Room_names = childKey;
         console.log("Room name: " + Room_names);
         row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
         document.getElementById("output").innerHTML+=row;
         });});}
   getData();
   
   function redirectToRoomName(name){
         console.log(name);
         localStorage.setItem("room_name", name);
         window.location="kwitter_page.html";
   }
   
   function logout(){
         localStorage.removeItem("user_name");
         localStorage.removeItem("room_name");
         window.location="index.html";
   }