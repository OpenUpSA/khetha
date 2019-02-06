/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


firebase.initializeApp({
  messagingSenderId: '61841380732',
});


const messaging = firebase.messaging();
