import * as firebase from 'firebase';
import moment from 'moment';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGiU4UCzSXY6d9As0hIqDPHU-k23hTv-Q",
  authDomain: "expensify-4f254.firebaseapp.com",
  databaseURL: "https://expensify-4f254-default-rtdb.firebaseio.com",
  projectId: "expensify-4f254",
  storageBucket: "expensify-4f254.appspot.com",
  messagingSenderId: "513754602926",
  appId: "1:513754602926:web:722ffffec31358b9ddfc3f",
  measurementId: "G-0KBDTWFK4L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//         .once('value', (snapshot) => {
//             const expenses = [];
//             snapshot.forEach((childSnapShot) => {
//                     const expense = {
//                         id: childSnapShot.key,
//                         ...childSnapShot.val()
//                     };
//                     expenses.push(expense);
//             });
//             console.log(expenses);
//         })
//         .then(() => {})
//         .catch((e) => {
//             console.log('error :: ',e);
//         });

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapShot) => {
//             const expense = {
//                 id: childSnapShot.key,
//                 ...childSnapShot.val()
//             };
//             expenses.push(expense);
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log('error :: ', e);
// });

// const deletedChange = database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// const childChanged = database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// const childAdded = database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').push({
//     description: 'test description 1',
//     note: 'test note 1',
//     amount: 11.00,
//     createdAt: moment() + ''
// });

// database.ref('expenses').push({
//     description: 'test description 2',
//     note: 'test note 2',
//     amount: 12.00,
//     createdAt: moment() + ''
// });

// database.ref('expenses').push({
//     description: 'test description 3',
//     note: 'test note 3',
//     amount: 13.00,
//     createdAt: moment() + ''
// });

// database.ref('notes').push({
//     title: 'to do new',
//     body: 'go for a run new'
// });


// database.ref().on('value', (snapshot) => {
//     const input = snapshot.val();
//     const output = input.name + ' is a ' + input.job.title + ' at ' + input.job.company;
//     console.log(output);
// }, (e) => {
//     console.log('error :: ', e);
// });



// const onValueChange = database.ref('location/city').on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error :: ', e);
// });
    


// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 3500);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 3500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((e) => {
//         console.log('Error :: ', e);
//     });

// database.ref().set({
//     name: 'Andrew Mead',
//     age: 26,
//     job: { 
//         title: 'Software developer',
//         company: 'Google'
//     },
//     stressLevel: 6,
//     isSingle: false,
//     location: {
//         city: "Philadelphia",
//         country: "United States"
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('This is failed', e);
// });

//this will only update at the root level and child objects are overwritten or ignore if not provided
// database.ref().update({
//     name: 'Mike',
//     location: {
//         city: 'Boston'
//     }
// });
//but the below syntax will work for updating a specific field
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });
// database.ref().update({
//     name: 'Mike',
//     age: 29,
//     job: 'Software developer',
//     isSingle: null
// });

//database.ref().set('This is data');

// database.ref('age').set(27);
// database.ref('location/city').set('New York');

// database.ref('attributes').set({
//     height: 10,
//     weight: 10
// }).then(() => {
//     console.log('data updated');
// }).catch((e) => {
//     console.log('Error occurred during update operation', e);
// });

// database.ref('isSingle').remove()
//     .then(() => {
//         console.log('succedded');
//     }).catch((e) => {
//         console.log("Error :: ", e);
//     });


