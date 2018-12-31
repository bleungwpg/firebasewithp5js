var p5ImageFile;

function preload()
{
}

function setup()
{
	createCanvas(600,400);
	setupFirebase();

	var x = downloadImage();
	console.log(x);

}

function draw()
{

	background(0,0,0);
	fill(125);
	rect(10,10,100,40);
	fill(255);
	text("Show Image",20,30);

	if (mouseX > 10 && mouseX < 10+100 && mouseY > 10 && mouseY < 10 + 40 && mouseIsPressed)
	{
		if (getImageURL() != "-1")
		{
			p5ImageFile = getImageURL();
			image(p5ImageFile,200,50);
			var myname = getUserName();
			fill(200,200,200);
			text(myname,200,100);
		}
	}

}


function mouseReleased()
{
	if (btnSignIn == -1)
	{
		btnSignIn = 0;
	}
}
