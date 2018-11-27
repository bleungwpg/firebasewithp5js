var health;
var healthEndTime;
var startHealthDeduct;

function preloadHealth()
{


}

function setupHealth()
{
	health = 300;
	healthEndTime = 0;
	startHealthDeduct = false;
}

function drawHealth(setGameOverCanvasID)
{
	fill(0,255,0);
	rect(300,30,health,25);
	fill(0,0,0);
	text(health,300+10,30+20)
	if (health <= 0)
	{
		canvasID = setGameOverCanvasID;
	}
}

function deductHealth(amount,countDownTime)
{
	if (startHealthDeduct == false)
	{
		healthEndTime = frameCount + countDownTime;
		startHealthDeduct = true;
		health = health - amount;
	}
	else
	{
		if (frameCount >= healthEndTime)
		{
			startHealthDeduct = false;
		}
	}

}