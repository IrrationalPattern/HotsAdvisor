import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyB-CIUYchFCjQxzgu9lNNwMLZjnHz_LJj8",
    authDomain: "hots-advisor.firebaseapp.com",
    databaseURL: "https://hots-advisor.firebaseio.com",
    projectId: "hots-advisor",
    storageBucket: "hots-advisor.appspot.com",
    messagingSenderId: "969304311955"
};

export default class Firebase {
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        this.database = firebase.database();
    }

    read(table) {
        return this.database.ref(table);
    }

}

