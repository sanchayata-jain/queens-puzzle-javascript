const BoardFile = require("./Board");
const QueenFile = require("./Queen.js");

const test = require('ava');

// test('foo', t => {
// 	t.pass();
// });

// test('bar', async t => {
// 	const bar = Promise.resolve('bar');
// 	t.is(await bar, 'bar');
// });

test('test_board_ctor', ctor_t => {
	var board = new BoardFile.Board(8);
	ctor_t.assert(board.n == 8);
});

test('test_board_ctor_neg_num', ctor_neg_num_t => {
	var board = new BoardFile.Board(-1000);
	ctor_neg_num_t.assert(board.n == -1000);
});

test('test_board_ctor_infinity', ctor_inf_t => {
	var board = new BoardFile.Board(Infinity);
	ctor_inf_t.assert(board.n === Infinity);
})


