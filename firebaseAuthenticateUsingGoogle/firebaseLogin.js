var firebaseApp = {};


(function(){
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyBh258HDhov9mIVUjJRiCxNzf4-hmllZWU",
		authDomain: "p5jstester.firebaseapp.com",
		databaseURL: "https://p5jstester.firebaseio.com",
		projectId: "p5jstester",
		storageBucket: "p5jstester.appspot.com",
		messagingSenderId: "294054023101"
	};
	firebase.initializeApp(config);

	firebaseApp = firebase;

})
