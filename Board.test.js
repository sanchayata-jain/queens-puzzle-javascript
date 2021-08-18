const BoardFile = require("./Board");
const PieceFile = require("./Piece");


test('board_ctor', () => {
    var board = new BoardFile.Board(8);
    expect(board.n).toBe(8);
    expect(board.pieces).toEqual(new Set());
});

test('board_ctor_neg_num', () => {
    var board = new BoardFile.Board(-1000);
    expect(board.n).toBe(-1000);
});

test('board_ctor_infinity', () => {
    var board = new BoardFile.Board(Infinity);
    expect(board.n).toBe(Infinity);
});

test('board_size_8', () => {
    var board = new BoardFile.Board(8);
    expect(board.size()).toBe(8);
});

test('board_size_1000', () => {
    var board = new BoardFile.Board(1000);
    expect(board.size()).toBe(1000);
});

test('admissiblePlacementForTrue', () => {
    var board = new BoardFile.Board(3);
    var piece1 = new PieceFile.Piece();
    piece1.attacks = jest.fn(() => false);
    board.add(piece1);

    var piece2 = new PieceFile.Piece();
    piece2.attacks = jest.fn(() => false);
    expect(board.admissiblePlacementFor(piece2)).toBe(true);
});

test('admissiblePlacementForFalse1', () => {
    var board = new BoardFile.Board(3);
    var piece1 = new PieceFile.Piece();
    piece1.attacks = jest.fn(() => false);
    board.add(piece1);

    var piece2 = new PieceFile.Piece();
    piece2.attacks = jest.fn(() => true);
    expect(board.admissiblePlacementFor(piece2)).toBe(false);
});

test('admissiblePlacementForFalse2', () => {
    var board = new BoardFile.Board(3);
    var piece1 = new PieceFile.Piece();
    piece1.attacks = jest.fn(() => true);
    board.add(piece1);

    var piece2 = new PieceFile.Piece();
    piece2.attacks = jest.fn(() => false);
    expect(board.admissiblePlacementFor(piece2)).toBe(false);
});

test('admissiblePlacementForFalse3', () => {
    var board = new BoardFile.Board(3);
    var piece1 = new PieceFile.Piece();
    piece1.attacks = jest.fn(() => true);
    board.add(piece1);

    var piece2 = new PieceFile.Piece();
    piece2.attacks = jest.fn(() => true);
    expect(board.admissiblePlacementFor(piece2)).toBe(false);
});

test('adding_pieces', () => {
    var board = new BoardFile.Board(3);
    var piece = new PieceFile.Piece();
    board.add(piece);
    expect((board.pieces).size).toBe(1);
});

test('removing_pieces', () => {
    var board = new BoardFile.Board(3);
    var piece = new PieceFile.Piece();
    board.add(piece);
    board.remove(piece);
    expect((board.pieces).size).toBe(0);
});