class Board {
    constructor(size){
       this.n = size;
       this.pieces = new Set(); 
    }

    size(){
        return this.n;
    }

    admissiblePlacementFor(piece) {
        for (let other of this.pieces) {
            if ((other != piece) 
                && other.attacks(piece) 
                || piece.attacks(other)) {

                return false;
            }
        }

        return true;
    }

    add(piece) {
        this.pieces.add(piece);
    }

    remove(piece) {
        this.pieces.delete(piece);
    }
}

module.exports = {Board};