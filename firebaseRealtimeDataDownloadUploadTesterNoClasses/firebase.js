var database = 0;
var myHighScore = null;


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
	myHighScore = 20;

	// reference to storage
	var ref = database.ref('highscore');

	ref.on('value', gotData, errData);


}

function gotData(data)
{
	var x = data.val();
	console.log(x);
	var values = Object.values(x);
	myHighScore = findHighestScore(values);
}

function findHighestScore(values)
{
	var largest = values[0];
	for (x in values)
	{
		console.log(values[x]);
		if (values[x] > largest)
			largest = values[x];
	}
	return largest;
}

function errData(err)
{
	console.log('error');
	console.log(err);
}

function getHighScore()
{
	if (myHighScore == null)
		return 0;
	return myHighScore;

}

function setHighScore(newHighScore)
{
	if (newHighScore > myHighScore)
	{
		var ref = database.ref('highscore');
		ref.push(newHighScore);

		ref.on('value', gotData, errData);

	}

}


//		ref.on('value', gotData, errData);

/*
		function gotData(data)
		{
			var x = int(data.val());
			console.log(x);
			return x;
			this.myHighScore = 4;
		}

		function errData(err)
		{
			console.log('Error!');
			console.log(err);
		}
	}



*/
