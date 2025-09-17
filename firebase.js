// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyDj3g1__nHt7LbLDVdbuJjOk3YzB0doBsw",
    authDomain: "smartgarbagesystem-f698b.firebaseapp.com",
    projectId: "smartgarbagesystem-f698b",
    storageBucket: "smartgarbagesystem-f698b.appspot.com",
    messagingSenderId: "902891540669",
    appId: "1:902891540669:web:3f3e41f64f1ca066c6e7d4",
    measurementId: "G-Y0XXMKW68C"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Firestore
  const db = firebase.firestore();
  