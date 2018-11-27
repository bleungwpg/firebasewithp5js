var database;
var storageRef;

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
}


function submitImage2(theFile)
{
	// ---------------------------------------- Part I --------------------------------------------------
	// target the root folder   root/
	var rootUploadRef = storageRef.ref();

	// target the subfolder within   root/images/
	var imagesFolderUploadRef = storageRef.ref('images')

	// define the file name to be uploaded; this takes the original file
	imagesFolderUploadRef.child(theFile.name);

	var metadata = {
		'contentType': theFile.type
	}

	imagesFolderUploadRef.put(theFile, metadata).then(function(snapshot) {
		console.log('Uploaded a blob or file!');
		console.log('file name: ',theFile.name);
	});

	// ---------------------------------------- Part I --------------------------------------------------


	// ---------------------------------------- Part II --------------------------------------------------

	var data = {
		name: "me",
		date: Date()
	}

//	database.ref('scores').push(data);

	// File or Blob named mountains.jpg
	var file = theFile;

	// Create the file metadata
	var metadata = {
	  contentType: file.type
	};


	// ---------------------------------------- Part II --------------------------------------------------

}

function submitHighScore(newName,newScore,theImage)
{
	
	// access the sccores node
	// a / will traverse the tree  e.g. scores/spaceinvaders
	var ref = database.ref('scores');

	var data = {
		name: newName,
		score: newScore,
		imageFile: theImage
	}


	ref.push(data);
	

}