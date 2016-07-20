var test = require('tape')
var games = require('../games') 

test('scores a gutterball frame', function(t) {
  var frame = [0, 0]  // arrange

  var score = games.scoreFrame(frame)  // act

  t.equals(score, 0, "correctly scores gutterball frame")  // assert
  t.end()
})


test('scores a normal (non-strike etc) frame', function(t) {
  var frame = [2, 3]   // arrange

  var score = games.scoreFrame(frame)  // act

  t.equals(score, 5)
  t.end()
})
