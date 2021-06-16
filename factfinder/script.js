var btn = document.querySelector('#a');
var display = document.querySelector('#b')

btn.f1.addEventListener("click", showFact1);
btn.f2.addEventListener("click", showFact2);
btn.f3.addEventListener("click", showFact3);
btn.f4.addEventListener("click", showFact4);
btn.f5.addEventListener("click", showFact5);

function showFact1() {
	display.innerHTML = "The original oranges from Southeast Asia were a tangerine-pomelo hybrid, and they were actually green. In fact, oranges in warmer regions like Vietnam and Thailand still stay green through maturity.<br><br><img src=\"images/oranges.jpg\" alt=\"green oranges\">";
}

function showFact2() {
	display.innerHTML = "Scotland has 421 words for \"snow\". Some examples include <em>sneesl</em> (to start raining or snowing), <em>feefle</em> (to swirl), and <em>flinkdrinkin</em> (a light snow).<br><br><img src=\"images/snow.jpg\" alt=\"snow\">";
}

function showFact3() {
	display.innerHTML = "Peanuts aren't technically nuts, they\'re legumes. According to Merriam-Webster, a nut is only a nut if it\'s a hard-shelled dry fruit or seed with a separable rind or shell and interior kernel. That means walnuts, almonds, cashews, and pistachios aren\'t nuts either. They\'re seeds.<br><br><img src=\"images/peanuts.jpg\" alt=\"peanuts\">";
}

function showFact4() {
	display.innerHTML = "The longest English word is 189,819 letters long. It\'s the full name for the protein nicknamed titin, and it would take three and a half hours to say out loud.<br><br><img src=\"images/scrabble.jpg\" alt=\"scrabble tiles\">";
}

function showFact5() {
	display.innerHTML = "Bees can fly higher than 29,525 feet above sea level, according to National Geographic. That\'s higher than Mount Everest, the tallest mountain in the world.<br><br><img src=\"images/bee.jpg\" alt=\"bee\">";
}
