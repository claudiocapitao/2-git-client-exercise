 var sudokuBoard = [
     [5, 3, 0, 0, 7, 0, 0, 0, 0],
     [6, 0, 0, 1, 9, 5, 0, 0, 0],
     [0, 9, 8, 0, 0, 0, 0, 6, 0],
     [8, 9, 0, 0, 6, 0, 0, 0, 3],
     [4, 0, 0, 8, 0, 3, 0, 0, 1],
     [7, 0, 0, 0, 2, 9, 0, 0, 6],
     [0, 6, 0, 0, 0, 0, 2, 8, 0],
     [0, 0, 0, 4, 1, 9, 0, 0, 5],
     [0, 0, 0, 0, 8, 0, 0, 7, 9]
 ];

 function checkSquaresForError() {
     var square = []; //

     for (var k = 0; k <= 6; k += 3) {
         for (var l = 0; l <= 6; l += 3) {
             for (var i = 0 + l; i < l + 3; i++) {
                 for (var j = k; j < k + 3; j++) {
                     square.push(sudokuBoard[i][j]);
                 }
             }

             square

             if (checkArrayForDuplicates(square)) {
                 console.error("Rules are broken in the " + i + "th row!");
                 return true;
             }

             square = [];

             square
             // 1st square
         }

         return false;
     }
 }

 function checkColsForErrors() {
     var column = []; //
     for (var i = 0; i < 9; i++) {
         for (var j = 0; j < 9; j++) {
             var row = sudokuBoard[j];
             column.push(row[i]);
         }

         if (checkArrayForDuplicates(column)) {
             console.error("Rules are broken in the " + i + "th row!");
             return true;
         }

         column = [];
     }

     return false;
 }

 function checkRowsForErrors() {
     for (var i = 0; i < 9; i++) {
         var row = sudokuBoard[i];
         if (checkArrayForDuplicates(row)) {
             console.error("Rules are broken in the " + i + "th row!");
             return true;
         }
     }

     return false;
 }

 function checkArrayForDuplicates(row) {
     for (var i = 0; i < 9; i++) {
         for (var j = i + 1; j < 9; j++) {
             if (row[i] != 0 && row[i] == row[j]) {
                 return true;
             }
         }
     }

     return false;
 }

 function areRowsValuesCorrect() {
     for (var i = 0; i < 9; i++) {
         var row = sudokuBoard[i];
         var sum = 0;
         for (var j = 0; j < 9; j++) {
             sum += row[j];
         }

         if (sum != 45) {
             console.error("Not the correct values in the board!");
             return false;
         }
     }

     return true;
 }

 function isBoardCompleted() {
     if (checkRowsForErrors()) {
         return false;
     }

     if (checkColsForErrors()) {
         return false;
     }

     if (checkSquaresForError()) {
         return false;
     }

     if (areRowsValuesCorrect() == false) {
         return false;
     }

     return true;
 }