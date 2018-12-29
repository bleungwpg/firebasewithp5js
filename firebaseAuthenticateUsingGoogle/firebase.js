var database;
var storageRef;
var theImage;
var imageReady;
var provider;


function setupFirebase()
{
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

	// reference to Real-Time database
	database = firebase.database();

	// reference to storage
	storageRef = firebase.storage();


	// setup sign in authentication
	provider = new firebase.auth.GoogleAuthProvider();

	/* optional sign in authentication parameters
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

	firebase.auth().languageCode = 'pt';
	// To apply the default browser preference instead of explicitly setting it.
	// firebase.auth().useDeviceLanguage();

	provider.setCustomParameters({
  		'login_hint': 'user@example.com'
	});
	*/

	console.log('sign in using google');




}

function googleSignin()
{
	firebase.auth().signInWithRedirect(provider);

	firebase.auth().getRedirectResult().then(function(result) {
	  if (result.credential) {
	    // This gives you a Google Access Token. You can use it to access the Google API.
	    var token = result.credential.accessToken;
			console.log('accessing google API');
	    // ...
	  }
	  // The signed-in user info.
	  var user = result.user;
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
		console.log(errorCode);
		console.log(errorMessage);

	});

	/*
	firebase.auth().signInWithPopup(provider).then(function(result) {
	  // This gives you a Google Access Token. You can use it to access the Google API.
	  var token = result.credential.accessToken;
	  // The signed-in user info.
	  var user = result.user;
	  console.log(result);
	  console.log('successful signin with google');
	  // ...
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  console.log(errorCode);
	  console.log('error sign in with google');
	  // ...
	});
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
