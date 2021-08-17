const BoardFile = require("./Board");
const QueenFile = require("./Queen.js");
const PieceFile = require("./Piece.js");
const sinon = require("sinon");
const test = require('ava');
const { assert } = require("sinon");


test('test_board_ctor', ctor_t => {
	var board = new BoardFile.Board(8);
	ctor_t.assert(board.n == 8);
	ctor_t.deepEqual(board.pieces, new Set());
});

test('test_board_ctor_neg_num', ctor_neg_num_t => {
	var board = new BoardFile.Board(-1000);
	ctor_neg_num_t.assert(board.n == -1000);
});

test('test_board_ctor_infinity', ctor_inf_t => {
	var board = new BoardFile.Board(Infinity);
	ctor_inf_t.assert(board.n === Infinity);
})

test('test_8_size', size_8_t => {
	var board = new BoardFile.Board(8);
	size_8_t.assert(board.size() == 8);
});

test('test_1000_size', size_1000_t => {
	var board = new BoardFile.Board(1000);
	size_1000_t.assert(board.size() == 1000);
});

test('test_add', add_t => {
	var board = new BoardFile.Board(3);
	var piece = new PieceFile.Piece();
	board.add(piece); //passing piece object to add method in Board class
	
	add_t.assert((board.pieces).size == 1);
	add_t.assert(board.pieces.has(piece));  
});

test('test_remove', remove_t => {
	var board = new BoardFile.Board(3);
	var piece = new PieceFile.Piece();
	board.add(piece);
	board.remove(piece); //passing piece object to be removed from Board 
	
	remove_t.assert((board.pieces).size == 0);
})


//  test('test_adminissiblePlacementFor_true', adminissiblePlacement_t => {
// 	var board = new BoardFile.Board(3);
// 	var piece1 = new PieceFile.Piece();
// 	var mock = sinon.mock(piece1.attacks);
// 	var expectation = mock.expects(false);
// 	mock.verify();
	
// });


// const myFunction = sinon.spy();

// test('my function is running!', t => {
//   myFunction();

//   t.true(myFunction.called);
// })


