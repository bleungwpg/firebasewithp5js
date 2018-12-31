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
	database = firebase.database();

	// reference to storage
	storageRef = firebase.storage();


	console.log('sign in using google');




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
