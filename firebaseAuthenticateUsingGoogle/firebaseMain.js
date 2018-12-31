var firebaseApp;

var database;
var storageRef;
var theImage;
var imageReady;
var provider;


function setupFirebase()
{
	var config = {
		apiKey: "AIzaSyBh258HDhov9mIVUjJRiCxNzf4-hmllZWU",
		authDomain: "p5jstester.firebaseapp.com",
		databaseURL: "https://p5jstester.firebaseio.com",
		projectId: "p5jstester",
		storageBucket: "p5jstester.appspot.com",
		messagingSenderId: "294054023101"
	};
	firebaseApp = firebase.initializeApp(config);

	// reference to Real-Time database
	database = firebaseApp.database();

	// reference to storage
	storageRef = firebaseApp.storage();

/*
	var user = firebase.auth().currentUser;
	var name, email, photoUrl, uid, emailVerified;

	if (user != null) {
	  name = user.displayName;
	  email = user.email;
	  photoUrl = user.photoURL;
	  emailVerified = user.emailVerified;
	  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
	                   // this value to authenticate with your backend server, if
	                   // you have one. Use User.getToken() instead.
		console.log('user: '+name);
		console.log('email: '+email);
	}
	*/


}


function downloadImage()
{
	// Create a reference to the file we want to download
	var folderRef = storageRef.ref();
	var imageRef = folderRef.child('images/present.png');
	imageReady = false;

	// Get the download URL
	imageRef.getDownloadURL().then(function(url) {
		// Insert url into an <img> tag to "download"
		console.log('log '+url);
		theImage = loadImage(url);
		imageReady = true;
		return 0;
	});

}

function getImageURL()
{
	if (imageReady)
	{
		return theImage;
	}

	return "-1";
}
