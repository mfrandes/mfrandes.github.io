// function counter(a, b) {
//     var sum = a + b;

//     for (var i = 0; i < sum; i++) {
//         var stringOfOne = ''; //se reseteaza la fiecare iteratie
//         if (b - i <= 0) {
//             console.log(`Jorge has ${sum} apples + Ethan has ${0} apples = now Jorge has all ${sum} apples, `);
//         }
//         if (b - i > 0) {
//             console.log(`Jorge has ${a + i} apples + Ethan has ${b - i} apples = ${sum} apples, if we take from Ethan one apple and we give it to Jorge, than...`); //aici am folosit 'template strings'

//             for (var j = 0; j < b - i; j++) {
//                 stringOfOne += ' + 1 apple'
//             }
//             console.log(`${(a + i) + " apples"}${stringOfOne} = ${sum} apples, `);
           
// 			//in caz ca vrem sa evitam ultima consola, pt ca e
// 			//acelasi lucru cu cea de mai sus, atunci:
// 			//if (b - i >= 2) {
// 			//  console.log(`${a + i}${stringOfOne} = ${sum}`);
//             //}
         
        
//         }
//     }
// }

// counter(7, 10);

function counter(a, b) {
    var sum = a + b;

    for (var i = 0; i < sum; i++) {
        var stringOfOne = ''; //se reseteaza la fiecare iteratie
        if (b - i <= 0) {
            console.log(`Jorge has ${sum} apples + Ethan has ${0} apples = now Jorge has all ${sum} apples, `);
        }
        if (b - i > 0) {
            console.log(`Jorge has ${a + i} apples + Ethan has ${b - i} apples = ${sum} apples, if we take from Ethan one apple and we give it to Jorge, than...`); //aici am folosit 'template strings'

            for (var j = 0; j < b - i; j++) {
                stringOfOne += ' + 1 apple'
            }
            console.log(`${(a + i) + " apples"}${ "+ 1 apple"} = ${a +i + 1} apples, `);
           
			//in caz ca vrem sa evitam ultima consola, pt ca e
			//acelasi lucru cu cea de mai sus, atunci:
			//if (b - i >= 2) {
			//  console.log(`${a + i}${stringOfOne} = ${sum}`);
            //}
         
        
        }
    }
}

counter(7, 10);