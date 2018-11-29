var p5ImageFile;

function preload()
{
}

function setup()
{
	createCanvas(500,200);
	setupFirebase();

}

function draw()
{

	background(0,0,0);

	fill(255);

	// check if the image has been successfully updated to browser
	if (hasUploadToBrowser())
	{
		fill(0,255,0);
		text("Successful upload to browser",60,50);
		if (theFile.width > 100 || theFile.height > 100)
		{
			sizeDownImage(theFile,250,25);
		}
		else
		{
		    image(theFile,250,25);
		}
	}
	else
	{
		text("Waiting to upload to browser",60,50);
	}


	if (hasUploadToFirebase())
	{
		fill(0,255,0);
		text("Successful upload to firebase",60,150);
		if (theFile.width > 100 || theFile.height > 100)
		{
			sizeDownImage(theFile,250,125);
		}
		else
		{
		    image(theFile,250,125);
		}
	}
	else
	{
		text("Waiting to upload to firebase",60,150);		
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
