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
const root = db.ref()

root.on('value', data => {
	const info = data.val()
	console.log(`${info.name} is a ${info.job.title} at ${info.job.company}`)
})

root.set({
	age: 26,
	job: {
		company: "reFX",
		title: "Customer Support"
	},
	location: {
		city: "Langley",
		country: "Canada"
	},
	name: "Adam Hartleb",
	stressLevel: 9
})

setTimeout(() => {
	db.ref('job').update({ title: "Web Developer" })
}, 3500)