
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkksg0SMdjt0DPEy4a3cUUOBRE0yOgDuI",
  authDomain: "kwitter-83648.firebaseapp.com",
  projectId: "kwitter-83648",
  storageBucket: "kwitter-83648.appspot.com",
  messagingSenderId: "178716822935",
  appId: "1:178716822935:web:713a1762bba19c070b08d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
