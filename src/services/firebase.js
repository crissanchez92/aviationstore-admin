import * as firebase from 'firebase/app';

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBv3R7VyRVjw-Jc74cBHFCjcRn0fqk8KPk",
    authDomain: "aviationstore-dev.firebaseapp.com",
    databaseURL: "https://aviationstore-dev.firebaseio.com",
    projectId: "aviationstore-dev",
    storageBucket: "aviationstore-dev.appspot.com",
    messagingSenderId: "174796570282",
    appId: "1:174796570282:web:8c84829fb480568fec1ad3",
    measurementId: "G-L3ZXHL1W9T"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();