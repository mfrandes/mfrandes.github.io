/*numaratoare*/

function learnToAdd(n, m) {
    var sum = n + m;
    console.info("sa adunam pana la " + sum);
    var i = n;
    var e = m;
  
    /*for (; e >= 0; ) {
      console.info(i + "+" + e + "=" + sum);
      i++;
      e--;
    }*/

    var numaratoare = '';

    for (var n; n < sum; n++) {
        console.log(n + ' + ' + m + ' = ' + sum);
        for (var j = 0; j < m; m--) {
            numaratoare += ' + 1';
        }
        console.log(n + numaratoare  + ' = ' + sum);
        //m--;
    }
  }
  
  learnToAdd(2, 7);

  /*numaratoare initiala*/

function learnToAdd(n, m) {
    var sum = n + m;
    console.info("sa adunam pana la " + sum);
    var i = n;
    var e = m;
  
    for (; e >= 0; ) {
      console.info(i + "+" + e + "=" + sum);
      i++;
      e--;
    }
  }
  
  learnToAdd(2, 7);