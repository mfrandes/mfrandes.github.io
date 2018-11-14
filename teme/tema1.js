function counter(a, b) {
    var sum = a + b;

    for (var i = 0; i < sum; i++) {
        var stringOfOne = ''; //se reseteaza la fiecare iteratie
        if (b - i > 0) {
            console.log(`${a + i} + ${b - i} = ${sum}`); //aici am folosit 'template strings'

            for (var j = 0; j < b - i; j++) {
                stringOfOne += ' + 1'
            }
            console.log(`${a + i}${stringOfOne} = ${sum}`);
			
			//in caz ca vrem sa evitam ultima consola, pt ca e
			//acelasi lucru cu cea de mai sus, atunci:
			//if (b - i >= 2) {
			//  console.log(`${a + i}${stringOfOne} = ${sum}`);
			//}
        }
    }
}

counter(5, 10);