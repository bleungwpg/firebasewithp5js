var p5ImageFile;

function preload()
{
}

function setup()
{
	createCanvas(600,400);
	setupFirebase();


/*
	var x = downloadImage();
	console.log(x);
*/
}

function draw()
{

	background(0,0,0);

	if (areImagesReady())
	{
		showAllImages();
	}
	else
	{
		fill(255);
		text("Waiting for images to download",20,30);
	}
}

