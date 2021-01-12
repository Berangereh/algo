const fs = require('fs');

const fileName = process.argv[2];

//Tri bulles
fs.readFile(fileName, 'utf8', (error, data) => {

    var digits = data.toString().split(' ');
    var lines = digits.map(Number)
   

    let bubble = (lines) => {
        let swapped = false;
        let count = 0;
        do {
            swapped = false;
            for (let i = 0; i < lines.length; i++) {
                if (lines[i] > lines[i + 1]) {
                    let tmp = lines[i];
                    lines[i] = lines[i + 1];
                    lines[i + 1] = tmp;
                    swapped = true;
                    count += 1;

                }
            }
        } while (swapped);
        return [lines, count];
        
    };


    function insertion(lines) {
        var tmp, i, j; 
        let count2 = 0;                 
        
        for(i = 1; i < lines.length; i++) {
            //stocker la valeur actuelle 
            tmp = lines[i]
            j = i - 1
        
        while (j >= 0 && lines[j] > tmp) {
            // déplacer le nombre
            lines[j+1] = lines[j]
            j--
        }
        //Insère la valeur temporaire à la position 
        //correcte dans la partie triée.
        lines[j+1] = tmp
        count2++

        }
        return [lines, count2];
    };
    
    function selection(lines){
        let count3 = 0;

        for(var i = 0; i < lines.length; i++){
          //stocker l'index de l'élément minimum
          var min = i; 
          count3 ++;

          for(var j = i+1; j < lines.length; j++){
            if(lines[j] < lines[min]){
             min = j;              
            }
          }
          var tmp = lines[i];
          lines[i] = lines[min];
          lines[min] = tmp;
        }
        return [lines, count3];
      };
      
      function partition(lines, start, end){
        // Taking the last element as the pivot
        const pivotValue = lines[end];
        let pivotIndex = start; 
        for (let i = start; i < end; i++) {
            if (lines[i] < pivotValue) {
            // Swapping elements
            [lines[i], lines[pivotIndex]] = [lines[pivotIndex], lines[i]];
            // Moving to next element
            pivotIndex++;
            }
        }
        
        // Putting the pivot value in the middle
        [lines[pivotIndex], lines[end]] = [lines[end], lines[pivotIndex]] 
        return pivotIndex;
    };
    //console.log(partition(lines, 48, -4));

    console.log('Tri à bulles : ' + bubble(lines)[1] + ' comparaisons / ' + bubble(lines)[0] );
    console.log('Tri à insertion : ' + insertion(lines)[1] + ' comparaisons / ' + insertion(lines)[0] );
    console.log('Tri par sélection : ' + selection(lines)[1] + ' comparaisons / ' + selection(lines)[0] );


 });

 