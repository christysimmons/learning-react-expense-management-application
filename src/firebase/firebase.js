import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCeM93-ybZ-cIkOSzq_gxwaYSHk0EWktlU",
    authDomain: "expension-7a763.firebaseapp.com",
    databaseURL: "https://expension-7a763.firebaseio.com",
    projectId: "expension-7a763",
    storageBucket: "expension-7a763.appspot.com",
    messagingSenderId: "971098684763"
};


firebase.initializeApp(config);

const db = firebase.database();

db.ref().set({
    name: "Chris Simmons", 
    age: 90,
    isChill: true,
    location: {
        city: "San Ramon", 
        state: 'California',
        country: "USA"
    }
});

db.ref('attributes').set({
    height: 68,
    foot: 40
})