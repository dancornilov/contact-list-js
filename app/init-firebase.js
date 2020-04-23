// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyDJ1WSAiVgZ-0wWvJjSELJNJ-YF5hRzvGk",
    authDomain: "my-contacts-a1a46.firebaseapp.com",
    databaseURL: "https://my-contacts-a1a46.firebaseio.com",
    projectId: "my-contacts-a1a46",
    storageBucket: "my-contacts-a1a46.appspot.com",
    messagingSenderId: "390425294413",
    appId: "1:390425294413:web:aafec413ea809f30144e04",
    measurementId: "G-8CR4PRG210"
};

// Initialize Firebase with a "default" Firebase project
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
