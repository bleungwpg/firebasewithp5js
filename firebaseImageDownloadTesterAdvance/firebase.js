var database;
var storageRef;
var theImage;
var imageReady;

var imageArray;
var imageCounter;
var realtimeFolder;
var downloadFolder;


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


	realtimeFolder = 'imagelist';
	downloadFolder = 'images';

	var myRef = database.ref(realtimeFolder);
	myRef.on('value', gotData, errData)
}

function gotData(data)
{
	console.log('Got data!');

	console.log(data.val());
	var imagelist = data.val();

	var theKeys = Object.keys(imagelist);
	console.log(theKeys);

	imageArray = new Array(theKeys.length);
	imageCounter = theKeys.length;
	
	for (var i = 0; i < theKeys.length; i++)
	{
		var k = theKeys[i];
		var imageFileName = imagelist[k].name;
		console.log(imageFileName);
		downloadImage(downloadFolder+'/'+imageFileName,i,theKeys.length);
//		downloadImage(imageFileName,i,theKeys.length);

	}
	
	
}

function errData(err)
{
	console.log('Error!');
	console.log(err);
}


function downloadImage(file,x,max)
{
	console.log('Attempting to download image');
	console.log(file);
	// Create a reference to the file we want to download
	var imageRef = storageRef.ref(file);
//	var imageRef = folderRef.child(file);

	imageReady = false;

	// Get the download URL
	
	imageRef.getDownloadURL().then(function(url) {
		// load the image into p5js
		console.log('log '+url);
//		theImage = loadImage(url);
		imageArray[x] = loadImage(url);

		if (x >= max-1)
		{
			imageReady = true;
		}
	});

}


function areImagesReady()
{
	if (imageReady)
	{
		return true;
	}

	return false;
}

function showAllImages()
{
	for (var i = 0; i < imageArray.length; i++)
	{
		if (imageArray[i].width > 100 || imageArray[i].height > 100)
		{
			sizeDownImage(imageArray[i],250,i*50+25);
		}
		else
		{
		    image(imageArray[i],250,i*50+25);
		}
	}
}

function sizeDownImage(imageFile,x,y)
{
	var finished = false;
	var newWidth = imageFile.width;
	var newHeight = imageFile.height;
	var count = 0;

	while (!finished)
	{
		if (newWidth > 100 || newHeight > 100)
		{
			newWidth /= 2;
			newHeight /= 2;
		}
		else
		{
			finished = true;
		}
		count++;
		console.log(count);
	}
	image(imageFile,x,y,newWidth,newHeight);
}