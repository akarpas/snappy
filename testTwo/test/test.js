const chai = require("chai")
const should = chai.should()
const getIndex = require("../utils/indexOf.js")

it('should return correct index (1) for b in string "abcdef"', function(){
  const testString = 'abcdef'
  const index = testString.getIndex('b', 0).index
  index.should.equal(1)
})

it('should start from correct index (3), ignore previous positions for b in string "bbbbbb" and return 3', function(){
  const testString = 'bbbbbb'
  const index = testString.getIndex('b', 3).index
  const indexZero = testString.getIndex('b', 0).index
  index.should.equal(3)
  indexZero.should.equal(0)  
})

it('should start from 0 if no starting index is provided', function(){
  const testString = 'abcabc'
  const index = testString.getIndex('a').index
  index.should.equal(0)
  index.should.not.equal(3) 
})