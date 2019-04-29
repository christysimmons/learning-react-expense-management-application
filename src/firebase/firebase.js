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

export {firebase, db as default};


//child edits subscriptions

/*db.ref('expenses')
  .on('child_removed', (snapshot) => {
      console.log(snapshot.key, snapshot.val());
  });

db.ref('expenses')
  .on('child_changed', (snapshot) => {
      console.log(snapshot.key, snapshot.val());
  });

db.ref('expenses')
  .on('child_added', (snapshot) => {
      console.log(snapshot.key, snapshot.val());
  });
*/

// initial database change subscriptions

/*db.ref('expenses')
  .once('value')
  .then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
          expenses.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
          })
      })
      console.log(expenses);
  });

db.ref('expenses')
  .on("value", (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    })
    console.log(expenses);
});*/

//Create new expenses array

/*db.ref('expenses').push({
    description: "One expense",
    amount: 3500, 
    note: "Hi",
    createdAt: 25852585
});

db.ref('expenses').push({
    description: "Two expense",
    amount: 35500, 
    note: "Pot",
    createdAt: 45654565
});

db.ref('expenses').push({
    description: "Three expense",
    amount: 355500, 
    note: "Rome",
    createdAt: 15951595
});*/

//New nested object array-like structure

// db.ref('notes').push({
//     title: 'To Do',
//     body: 'Eat a pizza'
// });

//Database fetching practice

// db.ref()
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log("Error fetching data:", e)
// })

// db.ref().on("value", (snapshot) => {
//     console.log(snapshot.val());
// });

//Initial async functions practice

/*setTimeout(() => {
    db.ref('age').set(33);
}, 3500);

setTimeout(() => {
    db.ref('age').off();
}, 7500);

const logChange = db.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} in ${val.location.state}`);
});

setTimeout(() => {
    db.ref('name').set("Moko");
}, 3500);

setTimeout(() => {
    db.ref('location/state').set("Florida");
}, 5500);*/

//Initial setting and updating practice

/*db.ref().set({
    name: "Chris Simmons", 
    age: 90,
    isChill: true,
    isStressed: false,
    location: {
        city: "San Ramon", 
        state: 'California',
        country: "USA"
    },
    job: {
        title: 'law miner',
        organization: 'Beedle Dee'
    }
}).then(() => {
    console.log('Data is saved')
}).catch((e) => {
    console.log("This action failed:", e)
});

db.ref('isChill').set(null);

db.ref('attributes').set({
    height: 68,
    foot: 40
}).then(() => {
    console.log("Great success")
}).catch((e) => {
    console.log('This is bad:', e)
});

db.ref('attributes')
.remove()
.then(() => {
    console.log("This worked")
})
.catch((e) => {
    console.log("This did not work", e)
});

db.ref().update({
    name: 'Hilo',
    "job/organization": 'MOMO',
    "location/country": 'Mexico'
});*/

