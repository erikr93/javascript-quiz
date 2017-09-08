var userInput = new Array();

var allQuestions = [
{
	question: "By what name is Lancelot Brown more usually known?",
	choices:["Capability Brown","Captain Hook","Captain Kirk","R.L. Stein"],
	correctAnswerIndex: 0
},
{
	question:"Name the world famous gardens situated ten miles outside of London, close to the River Thames.",
	choices:["Kew Gardens", "The Everglades", "The Drunkards Buffet","The Gardens of Sin"],
	correctAnswerIndex: 0
},
{
	question:"Which popular gardener created Barnsdale Gardens and was the author of many books such as The Ornamental Kitchen Garden, 'Gardeners World' Practical Gardening Course and Paradise Gardens?",
	choices:["Geoff Hamilton", "Monty Don", "Carolus Clusius", "Capability Brown"],
	correctAnswerIndex: 0
},
{
	question:"Which garden is considered to be among the Seven Wonders of the Ancient World?",
	choices:["The Hanging Gardens of Babylon", "The Garden of Eden", "Garden of Love", "The Selfish Giants Garden"],
	correctAnswerIndex: 0
},
{
	question:"What colour is a Welsh poppy?",
	choices:["Yellow", "Magenta", "Blue", "Brown"],
	correctAnswerIndex: 0
},
{
	question:"What colour is a Himalayan poppy?",
	choices:["Blue", "Yellow", "Purple", "Red"],
	correctAnswerIndex: 0
},
{
	question:"Name the organic gardener who is almost as famous for his long blond plait as he is for his books such as Going Organic and The Gourmet Gardener and his regular appearances on the BBC radio's Gardener's Question Time.",
	choices:["Bob Flowerdew", "Alan Titchmarsh", "Percy Thrower", "Capability Brown"],
	correctAnswerIndex: 0
},
{
	question:"Give the alternative name for a Mountain Ash tree.",
	choices:["Rowan", "Venus Fly Trap", "Pistachio", "Genus Plantus"],
	correctAnswerIndex: 0
},
{
	question:"Which kind of bulbs were once exchanged as a form of currency?",
	choices:["Tulips", "Light", "Amaryllis", "Crocus"],
	correctAnswerIndex: 0
},
{
	question:"By which Latin name was Rosa Gallica previously known?",
	choices:["Rosa Mundi", "Bellis Perennis", "Physalis Alkekengi", "Symphytum Tuberosum"],
	correctAnswerIndex: 0
}
]

// jquery selector aliases
var $question = $('.question');
var $next = $('#next');
var $answers = $('.answers');
var $label = $('label');

$( function() {
  $( "#progressbar" ).progressbar({
    value: .5
  });
} );

//picks choices in random order
function randomizedChoices(question) {
  var choices = [];
  while (choices.length !== question.choices.length) {
    var index = Math.floor(Math.random() * question.choices.length);
    var choice = question.choices[index];
    if (!choices.includes(choice)){
      choices.push(choice);
    }
  }
  return choices;
}
// random question function
function getRandomQuestion() {
   var i = Math.floor(Math.random() * allQuestions.length);
   return allQuestions[i];
}

// $(function(){
// 	$('#next').click(function(){
// 		getRandomQuestion();
// 	})
// });

// next event listener
$next.on('click', function() {
	var randomQuestion = getRandomQuestion();
	var choices = randomizedChoices(randomQuestion);
	$question.val(randomQuestion.question);
	for (var i = 0; i < $answers.length; i++) {
		//console.log($answers[i]);
		$($answers[i]).next().text(choices[i]);
		$question.text(randomQuestion.question);
	}
	// TODO: clear radio
	// TODO: checkIfCorrect();
});

//score function
function getScore(){
	var score=0;
	var numQuestions=10;

	for (var i=0;i<numQuestions;i++){
		if (userInput[i]==answers[i]){
			score += 1;
		}
		else{
			score += 0;
		}

	}
	return score;
}
