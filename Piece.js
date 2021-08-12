class Piece {
    constructor(){
        this.board = null;
        this.i = null;
        this.j = null;
    }

    isOnBoard(){
        /*this function returns true if this.board
        isn't null and false if this.board is null*/
        return this.board != null;
    }

    placeOn(board, i , j){
        if (!this.isOnBoard()
        && (0 <= i)
        && (i < board.size())
        && (0 <= j)
        && (j < board.size()) ) {

            this.board = board;
            this.i = i;
            this.j = j;
            board.add(this);
        }
    }

    removeFromBoard() {
        if (this.isOnBoard()) {
            this.board.remove(this);
            this.board = null;
        }
    }

    attacks(piece) {
        throw new Error(["An abstract method has been invoked"]);
    }

    isMindfulOf(piece) {
        return ((piece != null)
                && this.isOnBoard()
                && piece.isOnBoard()
                && this.board == piece.board
                && this != piece);
    }

    rowIndex() {
        if (this.isOnBoard()) {
            return this.i;
        }
        else {
            return this.UNKNOWN;
        }
    }

    colIndex() {
        if (this.isOnBoard()) {
            return this.j;
        }
        else {
            return this.UNKNOWN;
        }
    }

    static UNKNOWN = -1;
}

module.exports = {Piece};