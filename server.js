
const express = require('express')
const app = express()
const port = 3000


// const arrs = [1,2,3,4,5,6,8,9,10,12,13]
// var index = 1;

// arrs.forEach((arr ,i) => {
//     if(arr != index){
//         arrs.splice(index-1, 0, index);
//         console.log(index)
//     }
//     index++
// })
// console.log(arrs);

// var arr = [];
// var input = 20;

// for(var a = 0;  a< 4; a++){
//     var col = [];
//     var random = Math.floor(Math.random() * input);
//     var rels = getRel(random, input);
//     col.push(random,rels);
//     arr.push(col);
// }

// function getRel (rand,inp){
//     var res = inp - rand;
//     return res;
// }

// console.log(arr)

// const findSumMatchPairs = (arr, value) => {
//     let sumsLookup = {};
//     let output = [];
    
//     for(let i = 0; i < arr.length; i++) {
//       let targetVal = value - arr[i];
      
//       if(sumsLookup[targetVal]) {
//         output.push([arr[i], targetVal]);
//       }
      
//       sumsLookup[arr[i]] = true;
//     }
//     return output;
//   };
//   let input2 = [1,5,6,1,0,1];
//   let inputFindMatch2 = 6;
//   // Output
//   console.log('Soal No. 2:', findSumMatchPairs(input2, inputFindMatch2));

    var colMap = [5,5];
    var RowTotal = 6;
    
    var totalBangku = (colMap[0] + colMap[1]) * RowTotal;

    const head = []; const arr = [];
    var c = colMap[0]+1; var e = 1; var cv = []; var bangku2 = []; var row2 = [];
    for(var a=1; a < totalBangku; a++){
        if(e==c){
          arr.push(cv)  
          cv = [];
          e=1;
            backup = a;
                a = a + colMap[1];
                var oo = colMap[1];
                var ii = 1;
                for(var cc=backup; cc < a; cc++){
                    bangku2.push(cc)
                    if(ii == oo){
                        row2.push(bangku2);
                        bangku2 = [];
                        ii = 1;
                    }
                    ii++;
                }
        }
        cv.push(a);
        e++;
    }

    head.push(arr,row2);

    console.log(head)







app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})