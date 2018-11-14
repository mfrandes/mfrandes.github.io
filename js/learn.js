function learnVariables() {
    console.info(0);
  
    function sayWelcome() {
      console.info("Salut " + prenume + ", bine ai venit la noi!");
    }
  
    var nume = "Matei";
    var prenume = "Nicolae";
    var owner = "Matei's";
    var msg1 = 'ai zis "Nick"?';
    var msg2 = 'Nu, am zis "Nicolae"';
    var template = `Text cu ghilimele " sau simple '`;
  
    console.debug("auzi...? dar cum te cheama? -" + prenume);
    sayWelcome();
  
    var skills = ["html", "css", "js"];
  
    prenume = "Nick";
  
    console.info("toate variabilele au fost initializate");
    console.log(nume);
    console.debug("cum te cheama? -" + prenume);
    sayWelcome();
  
    // schimb valutar
  
    var cursEUR = 4.5;
    var myEUR = 20;
    var myRON = 0;
    var friendEUR = 100;
    var friendRON = 0;
  
    // operatori * / + -
  
    myRON = myEUR * cursEUR;
    console.info("eu am " + myRON + " RON");
  
    friendRON = friendEUR * cursEUR - (friendEUR * cursEUR * 1) / 100;
    console.info("tu ai " + friendRON + " RON");
  }
  //Learn Iterators
  
  /*function larnIterators() {
    function countTo(n) {
      console.info("sa numaram pana la " + n);
      // for(init; condition; after);
      for (var i = 1; i <= n; i++) {
        console.info(i);
      }
      var i = 1;
      for (; i <= n; ) {
        console.info(i);
        i++;
      }
    }
    function countDown(n) {
      var i = n;
      for (; i > 0; ) {
        console.info(i);
        i--;
      }
      //var i = n; ~nu mai e nevoie ~
      while (n > 0) {
        console.info(n);
        n--;
      }
    }
    countTo(10);
    countDown(10);
  }
  larnIterators();*/
  
  //Learn variables
  
  var ATMFunds = 50000;
  var funds = 5000;
  
  function getExtractFee(amount) {
    var comision = amount * 0.01;
    if (comision < 2.5) {
      console.warn("comision minim aplicat");
      comision = 2.5;
    }
    return comision;
  }
  
  // TODO implement
  
  function checkExtractPermision() {
    return true;
  }
  
  function extractFromATM(amount) {
    console.info("==== ==== ==== ==== ====");
    console.info("suma extrasa este: " + amount);
    var comision = getExtractFee(amount);
  
    var totalExtract = amount + comision;
  
    if (totalExtract > funds) {
      console.error("Insuficient Funds");
      return 0;
    }
  
    if (totalExtract > ATMFunds) {
      console.error("ATM insuficient funds");
      return;
    }
    funds = funds - totalExtract;
    ATMFunds -= amount;
    console.info("comision aplicat:" + comision);
    console.info("Sold curent: " + funds);
    console.info("==== ==== ==== ==== ====");
  }
  
  // extractFromATM(1005); // nu w multiplu de 10
  // extractFromATM(100000); // solduri insuficiente
  // extractFromATM(3000);
  // extractFromATM(3000);
  // extractFromATM(100);
  // extractFromATM(0); // fix it