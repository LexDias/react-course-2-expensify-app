import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Course Topics',
//     note: 'React Native, Python',
//     amount: 12345,
//     createdAt: 0
// });

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Python'
// });

// database.ref('notes/-MQTB4NWHVzYA_O1lP9k').remove();

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// }, (e) => {
//     console.log(e);
// });

// setTimeout(() => {
//     database.ref('job/title').set('Developer')
// }, 3000);

// // setTimeout(() => {
// //     database.ref().off('value', onValueChange);
// // }, 6000);

// setTimeout(() => {
//     database.ref('name').set('Claudio Dias')
// }, 5000);


// database.ref().once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// database.ref().set({
//     name: 'Claudio Dias',
//     age: 54,
//     job: {
//         title: 'Engineer',
//         company: 'Home'
//     },
//     stressLevel: 6,
//     location: {
//         city: 'RJ',
//         country: 'Brazil'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('isSingle removed');
//     }).catch((e) => {
//         console.log('Remove failed.', e);
//     });

// database.ref().update({
//     stressLevel: 9,
//     'location/city': 'RJ',
//     'job/company': 'HomeAgain'
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });
