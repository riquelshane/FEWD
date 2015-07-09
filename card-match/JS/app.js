(function() {
  var cards = document.querySelectorAll(".card");
  var suits = ['clubs','diamonds','spades','hearts'];
  var currentSuit,
      matchSuit;


  for (var i = 0, len = cards.length; i < len; i++) {
    var card = cards[i];
    var randomSuit = suits[Math.floor(Math.random() * suits.length)];

    card.classList.add(randomSuit);
    clickListener(card);
  }

  function checkMatch(){

  }

  function clickListener(card) {
    currentSuit = card.className.split(' ')[1];
    card.addEventListener("click", function() {
      var c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
})();
