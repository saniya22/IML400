var mainContent = [

{
	"plot": "Little girl bullies evil headmistress with a piece of chalk.",
	"answer" : "Real",
	"fullAnswer" : "Matilda by Roald Dahl"
},

{
	"plot": "Nice old man can't get 14-year-old to love him.",
	"answer": "Real",
	"fullAnswer": "Lolita by Vladimir Nabokov"
},

{
	"plot": "Lonely rich dude stalks careless rich girl who likes his shirts. He dies",
	"answer": "Real",
	"fullAnswer": "The Great Gatsby by F. Scott Fitzgerald"
},

{
	"plot": "An old woman seriously cannot deal with her breakup, so she refuses to put her cake in the refrigerator. For years",
	"answer": "Real",
	"fullAnswer": "Great Expectations by Charles Dickens"
},

{
	"plot": "Cynical teen has a great time in New York just kidding he has a terrible time.",
	"answer": "Real",
	"fullAnswer": "Catcher in the Rye by J. D. Salinger"
},

{
	"plot": "Guy wastes his senior year to find a girl who likes to sleep in random places",
	"answer": "Real",
	"fullAnswer": "Paper Towns by John Green"
},

{
	"plot": "Scientist bring dead back to life. Dead is ungrateful. Chase each other to the north pole, eschewing therapy.",
	"answer": "Real",
	"fullAnswer": "Frankenstein by Mary Shelley"
},

{
	"plot": "Assassin girl doesn't approve of furniture made of glass and wants to kill anyone who sits on glass furniture.",
	"answer": "Real",
	"fullAnswer": "Throne of Glass by Sarah J. Mass"
},

{
	"plot": "A young woman falls in love with a man who falls in love with his horse.",
	"answer": "Real",
	"fullAnswer": "Anna Karenina by Leo Tolstoy"
},

{
	"plot": "Guy really should've taken his friend's habit of accidental murder more seriously.",
	"answer": "Real",
	"fullAnswer": "Of Mice and Men by John Steinbeck"
},

{
	"plot": "Orphaned kid with magical abilities is poorly supervised at school. Almost dies... seven times",
	"answer": "Real",
	"fullAnswer": "Harry Potter by J. K. Rowling"
},

{
	"plot": "Man goes hiking; loses 10 pounds",
	"answer": "Real",
	"fullAnswer": "127 Hours by Aron Ralston"
},


{
	"plot": "Older sister ruins younger sister's chance to be on nationally televised game show",
	"answer": "Real",
	"fullAnswer": "Hunger Games by Suzanne Collins"
},

{
	"plot": "Strange wealthy man tempts children with candy then kills them off one by one until he finds a worthy heir.",
	"answer": "Real",
	"fullAnswer": "Charlie and the Chocolate Factory by Roald Dahl"
},

{
	"plot": "Annoying flying kid relentlessly bullies misunderstood pirate.",
	"answer": "Real",
	"fullAnswer": "Peter Pan by J. M. Barrie"
},

{
	"plot": "A group of dudes work super hard to return some jewelry",
	"answer": "Real",
	"fullAnswer": "Lord of the Rings by J. R. R. Tolkien"
},

{
	"plot": "A woman is really into color-coding her notebooks.",
	"answer": "Real",
	"fullAnswer": "The Golden Notebook by Doris Lessing"
},

{
	"plot": "Wife shames husband for not being cool enough to murder the king.",
	"answer": "Real",
	"fullAnswer": "Macbeth by William Shakespeare"
},

{
	"plot": "Guy relentlessly bullies his friend into eating green food he doesn’t want to eat",
	"answer": "Real",
	"fullAnswer": "Green Eggs and Ham by Dr. Seuss"
},

{
	"plot": "Man gets lost on way home. Really lost. Refuses to ask for directions. Then expects dinner to be waiting.",
	"answer": "Real",
	"fullAnswer": "The Odyssey by Homer"
},

{
	"plot": "Misunderstood witch is eaten by a lion after 4 bratty kids walk through a wardrobe.",
	"answer": "Real",
	"fullAnswer": "The Chronicles of Narnia by C.S. Lewis"
},

{
	"plot": "2 boys with ADHD warp their sadistic principal's mind, turning him into a near naked superhero.",
	"answer": "Real",
	"fullAnswer": "Captain Underpants by Dav Pikey"
},

{
	"plot": "Faulty plumbing destroys a family's vacation",
	"answer": "Real",
	"fullAnswer": "The Shining by Stephen King"
},

]

$(document).ready(function() {
	var selecting = mainContent[Math.floor(Math.random()*24)];
	type = selecting["answer"];
	fullAnswer = selecting["fullAnswer"];
	$('#plot').html(selecting["plot"]);
	$('#next').hide();
	$('#results').hide();
});

$('.choice').click(function (e) {
	var pickedAnswer = e.target.id;

	$('#results').show();
	$('#plot').hide();
	$('#options').hide();

	if (pickedAnswer == type) {
		$('#results').html("<span class ='right'>Yay you're right!</span> It's " + fullAnswer + ".");
	} else {
		$('#results').html("<span class = 'wrong'> Eep, looks like you have to improve your BS Radar!</span> It's " + fullAnswer + ".");	
	}

	$('#next').show();
});

$('#next').click(function(){

	var selecting = mainContent[Math.floor(Math.random()*24)];
	type = selecting["answer"];
	fullAnswer = selecting["fullAnswer"];
	$('#plot').html(selecting["plot"]);
	$('#next').hide();
	$('#results').hide();
	$('#options').show();
	$('#plot').show();
})