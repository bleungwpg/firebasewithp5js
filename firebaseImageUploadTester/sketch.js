var canvasID;
var p5ImageFile;

function preload()
{
//	preloadPlatforms();
}

function setup()
{
	createCanvas(600,400);
	setupFirebase();
//	setupHighScore();

	canvasID = 1;

}

function draw()
{
	if (canvasID == 1)
	{
		background(0,0,0);
		fill(125);
		rect(10,10,100,40);
		fill(255);
		text("Show Image",20,30);

		if (mouseX > 10 && mouseX < 10+100 && mouseY > 10 && mouseY < 10 + 40 && mouseIsPressed)
		{

			/*
		    var x = document.getElementById("myFile");

			var reader = new FileReader();

			// Closure to capture the file information.
			reader.onload = (function(theFile) {
				return function(e) {
					// Render thumbnail.
					var span = document.createElement('span');
					span.innerHTML = ['<img class="thumb" src="', e.target.result,
					                '" title="', escape(x.files.name), '"/>'].join('');

//					p5ImageFile = loadImage(span);
					document.getElementById('list').insertBefore(span, null);
				};
			})(x.files[0]);

			// Read in the image file as a data URL.
			reader.readAsDataURL(x.files[0]);
*/
			
//		    console.log(x.files.length);
		    image(theFile,200,50);
		}
/*
		if (showHighScoreButton(400,10,100,50) == -2)
		{
			canvasID = -2;
		}
		*/
	}
	else if (canvasID == -2)
	{
//		viewHighScore();
	}
}

