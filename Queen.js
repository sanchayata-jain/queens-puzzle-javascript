const PieceFile =  require("./Piece");

class Queen extends PieceFile.Piece {
    constructor(){
        super();
    }


attacks(piece) {
    var i = this.rowIndex();
    var j = this.colIndex();

    var u = piece.rowIndex();
    var v = piece.colIndex();

    return (
        this.isMindfulOf(piece)
        && ((i == u) 
        || (j == v)
        || (i-j == u-v)
        || (i+j == u+v)) 
    );
    }
}

module.exports = {Queen};
