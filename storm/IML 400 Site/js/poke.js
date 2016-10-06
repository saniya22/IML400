// Function to check whether data is being retrieved

function win (data) {
	console.log("Yes it worked!!")
	result = data;
}

// function winning (data) {
// 	console.log("Yes it worked!!")
// 	resultTwo = data;
// }

// Function if data isn't being retrieved 

function lose (err) {
	console.log("Oh no! This is the error =");
	console.log(err);
	result = undefined;
}

// urls 
var url = "http://pokeapi.co/api/v2/pokemon/6/";

var result = undefined;

// making the connection

$.get(url).done(win).fail(lose)


function showPokemon () {
	
	// declaring all the variables

	//Getting the starter pokemon and its stats
	var pokeName = result.name

	//Getting the Type
	var pokeType = result.types[0].type.name + " - " + result.types[1].type.name

	//Getting the Ability

	var pokeAbility = result.abilities[1].ability.name

	//Getting the height and weight

	var pokeHeight = result.height 

	var pokeWeight = result.weight

	//Getting battle stats

	var statOne = result.stats[0].stat.name + " : " + result.stats[0].base_stat

	var statTwo = result.stats[1].stat.name + " : " + result.stats[1].base_stat

	var statThree = result.stats[2].stat.name + " : " + result.stats[2].base_stat

	var statFour = result.stats[3].stat.name + " : " + result.stats[3].base_stat

	var statFive = result.stats[4].stat.name + " : " + result.stats[4].base_stat

	var statSix = result.stats[5].stat.name + " : " + result.stats[5].base_stat

	//Getting the front and back sprites

	var pokeImgOne = result.sprites.front_default
	var $imgOne = $('<img></img>')
	$imgOne.attr("src", pokeImgOne)

	var pokeImgTwo = result.sprites.back_default
	var $imgTwo = $('<img></img>')
	$imgTwo.attr("src", pokeImgTwo)

	//Getting all the info onto the page

	var $pokeApi = $("#pokeApi")
	$pokeApi.append($imgOne);
	$pokeApi.append($imgTwo);
	$pokeApi.append("<h1>" + "Name:" + " " + pokeName +"</h1>");
	$pokeApi.append("<h3>" + "Type:" + " " + pokeType +"</h3>");
	$pokeApi.append("<h3>" + "Special Ability:" + " " + pokeAbility +"</h3>");
	$pokeApi.append("<h3>" + "Height:" + " " + pokeHeight +"</h3>");
	$pokeApi.append("<h3>" + "Weight:" + " " + pokeWeight +"</h3>");
	$pokeApi.append("<h3>" + statOne +"</h2>");
	$pokeApi.append("<h3>" + statTwo +"</h2>");
	$pokeApi.append("<h3>" + statThree +"</h2>");
	$pokeApi.append("<h3>" + statFour +"</h2>");
	$pokeApi.append("<h3>" + statFive +"</h2>");
	$pokeApi.append("<h3>" + statSix +"</h2>");
}


$("#pokeApiButton").click(showPokemon);

