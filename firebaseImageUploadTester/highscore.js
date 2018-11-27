function setupHighScore()
{
	var ref = database.ref('scores');
	ref.on('value', gotData, errData);
}

function gotData(data)
{
//	console.log(data.val());
	var scores = data.val();
	var keys = Object.keys(scores);
//	console.log(keys);
	for (var i = 0; i < keys.length; i++)
	{
		var k = keys[i];
		var pic = scores[k].image;
		var name = scores[k].name;
		var score = scores[k].score;


		text(name,100+200,i*100+200);
		text(score,100+300,i*100+200);
		image(pic,100+350,i*100+200);

		console.log(name,score);
	}
}

function errData(err)
{
	console.log('Error!');
	console.log(err);
}

function showHighScoreButton(x,y,length,height)
{
	fill(125,125,125);
	rect(x,y,length,height);
	fill(255,255,255);
	text("High Score",x+length/10,y+height/10);	

	if (mouseX > x && mouseX < x + length && mouseY > y && mouseY < y + height && mouseIsPressed)
	{
		return -2;
	}
}

function viewHighScore()
{
	var x = 10;
	var y = 10;
	var length = 100;
	var height = 50;
	background(0,0,0);
	fill(125,125,125);
	rect(x,y,length,height);
	fill(255,255,255);
	text("Back",x+10,y+10);	

	setupHighScore();

	if (mouseX > x && mouseX < x + length && mouseY > y && mouseY < y + height && mouseIsPressed)
	{
		return 0;
	}

}

