const BoardFile = require("./Board");
const QueenFile = require("./Queen.js");
const PieceFile = require("./Piece.js");
const test = require('ava');

test('test_queen_ctor', ctor_t => {
    var queen = new QueenFile.Queen();
    var piece = new PieceFile.Piece();
    queen.attacks(piece);
    ctor_t.assert(queen.attacks.has(piece));
});