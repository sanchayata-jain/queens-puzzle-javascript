const BoardFile = require("./Board");
const QueenFile = require("./Queen.js");

//const prompt = require('prompt-sync')();

/*const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});*/

function numberOfSolutions(i, board){
    if (i < board.size()) {
        var queen =  new QueenFile.Queen();
        var count = 0;

        for (let j = 0; j < board.size(); j++) {
            queen.placeOn(board, i, j);
            if (board.admissiblePlacementFor(queen)) {
                count = count + numberOfSolutions(i + 1, board);
            }
            
            queen.removeFromBoard();
        }
        return count;
    }
    else {
        return 1;
    }
}


/*const size= prompt('Enter the size of the board, which is the same as the number of Queens');
console.log("Hi2");*/
var size = 8;
/*readline.question("enter num queens: ", size => {
    console.log("size is ${size}");
    readline.close();
});*/
var board = new BoardFile.Board(size);
console.log(numberOfSolutions(0, board));
