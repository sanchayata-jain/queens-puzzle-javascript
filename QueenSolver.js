import Board from "./Board";
import Queen from "./Queen";

numberOfSolutions(i, board) {
    if (i < board.size()) {
        var queen = Queen();
        var count = 0;

        for (let j = 0; j < board.size(); j++) {
            if (board.admissiblePlacementFor(queen)) {
                count += numberOfSolutions(i + 1, board);
            }
            queen.removeFromBoard();
        }
        return count;
    }
    else {
        return 1;
    }
}

parser = argparse.ArgumentParser(description = "Solve the Queen\'s puzzle of the specified size");
parser.add_argument('size', metavar='N', type = int,
                    help='an integer for the size of the board and number of queens');
args = parser.parser_args();

var size = args.size;
var board = Board(size);