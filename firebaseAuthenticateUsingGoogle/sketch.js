var p5ImageFile;
var btnSignIn;

function preload()
{
}

function setup()
{
	createCanvas(600,400);
	setupFirebase();

	var x = downloadImage();
	console.log(x);

	btnSignIn = 0;

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
		}
	}

	fill(125);
	rect(10,200,100,40);
	fill(255);
	text("Sign in Redirect",30,230);




	if (mouseX > 10 && mouseX < 10+100 && mouseY > 200 && mouseY < 200 + 40 && mouseIsPressed && btnSignIn == 0)
	{
		googleSignin();
		btnSignIn = -1;
	}


}


function mouseReleased()
{
	if (btnSignIn == -1)
	{
		btnSignIn = 0;
	}
}
