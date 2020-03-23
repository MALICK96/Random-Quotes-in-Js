function randomQuote() {
  // store the quotes the array variable quotes
  var quotes = [
    "<p>'Every body in this country, should learn how to code'<br>- steeve job</p>",
    "<p>'Love For All, Hatred For None'<br>- damin carerio</p>",
    "<p>'Impossible is for the unwilling'<br>- John Keats</p>",
    "<p>'No pressure, no diamonds'<br>- Thomas Carlyle</p>",
    "<p>'Stay folish to stay sane.'<br>- Maxim Legacé</p>",
    "<p>'When nothing goes right, Go Left'<br>- Unknown author</p>",
    "<p>'Try again. Fail agin. Fail better.'<br>- Samuel Beckett</p>",
    "<p>'Dont tell people your plans, show them your results.'<br>- Unknown author</p>",
    "<p>'I can do it, and I will do it If Go please.'<br>- Malick Diakite</p>",
    "<p>'Take the risk or lose the chance'<br>- Unknown author</p>"
  ];

  // call the generateRandomQuote function continously
  // after every 5 second delay
  setInterval(generateRandomQuote, 5000);

  function generateRandomQuote() {
    // generate random int between 0 - and the length of quotes
    var rand = Math.floor(Math.random() * quotes.length);
    document.querySelector(".quote").innerHTML = quotes[rand];
  }
}
