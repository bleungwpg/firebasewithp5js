var b1;
var submit;
var highscore;

function preload()
{
//	preloadPlatforms();
}

function setup()
{
	createCanvas(600,400);
	setupFirebase();
	b1 = new Button(10,100,100,25);
	b1.setText("Click Me!");
	submit = new Button(10,200,100,25);
	submit.setText("Submit");
	highscore = 0;
}

function draw()
{
	background(0,0,0);
	fill(255,255,255);
	text(getHighScore(),50,50);
	text("New High Score: "+highscore,300,50);

	b1.showButton();
	submit.showButton();
	if (b1.getButtonState() == 2)
	{
		highscore++;
	}
	if (submit.getButtonState() == 1)
	{
		setHighScore(highscore);
	}

}
