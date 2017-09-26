import * as firebase from 'firebase'

const config = {
	apiKey: 'AIzaSyCEbvZUf6U4IvPOcLO9upT4GdabnMqjx9k',
	authDomain: 'expensify-7b6ed.firebaseapp.com',
	databaseURL: 'https://expensify-7b6ed.firebaseio.com',
	projectId: 'expensify-7b6ed',
	storageBucket: 'expensify-7b6ed.appspot.com',
	messagingSenderId: '1039516606316'
}

firebase.initializeApp(config)

const db = firebase.database()

export { firebase, db as default }