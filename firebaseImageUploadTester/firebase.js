var theFile;
var successfulUploadToBrowser;
var database;
var storageRef;
var successfulUploadToFirebase;

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

	successfulUploadToFirebase = false;  
	successfulUploadToBrowser = false;
}


// this function assist with sketch.js 
function hasUploadToFirebase()
{
  if (successfulUploadToFirebase)
  {
    return true;
  }
  return false;
}


// this function initiates file upload from computer to browser through the "choose file button"
function previewFile() {

  var preview = document.querySelector('img');

  // take the first file and upload it
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  successfulUploadToBrowser = false;



  reader.addEventListener("load", function () {
    preview.src = reader.result;

    // save the image file onto firebase
	submitImageList(file.name);
    submitImage2(file);

    successfulUploadToBrowser = true;

    // load image data into a variable for p5js
    theFile = loadImage(reader.result);
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }


}

function submitImageList(imageFileName)
{
	
	var ref = database.ref('imagelist');

	var data = {
		name: imageFileName
	}

	ref.push(data);
	
}

function submitImage2(theFile)
{
	successfulUploadToFirebase = false;

	// target the root folder   root/
	var rootUploadRef = storageRef.ref();

	// target the subfolder within and what the file is called
	// root/images/picture
	var imagesFolderUploadRef = storageRef.ref('images/'+theFile.name);

	// add metadata like extensions .jpg
	var metadata = {
		'contentType': theFile.type
	}
	
	imagesFolderUploadRef.put(theFile, metadata).then(function(snapshot) {
		console.log('Uploaded a blob or file!');
		console.log('file name: ',theFile.name);
    	successfulUploadToFirebase = true;
	});

}


function hasUploadToBrowser()
{
  if (successfulUploadToBrowser)
  {
    return true;
  }
  return false;
}

