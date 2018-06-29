const chai = require("chai")
const should = chai.should()
const getIndex = require("../utils/indexOf.js")

describe('The indexOf function', function() {
  it(`should return correct index (1) for b in string "abcdef"`, function(){
    const testString = 'abcdef'
    const index = testString.getIndex('b', 0)
    index.should.equal(1)
  })

  it(`should start from correct index (3), ignore previous positions for b
      in string "bbbbbb" and return 3`,
      function() {
        const testString = 'bbbbbb'
        const index = testString.getIndex('b', 3)
        const indexZero = testString.getIndex('b', 0)
        index.should.equal(3)
        index.should.not.equal(0)
        indexZero.should.equal(0)  
      }
  )

  it(`should start from 0 if no starting index is provided`, function() {
    const testString = 'abcabc'
    const index = testString.getIndex('a')
    index.should.equal(0)
    index.should.not.equal(3) 
  })

  it(`should handle strings longer than length 1`, function() {
    const testString = 'abcabca'
    const index = testString.getIndex('ca')
    index.should.equal(2)
  })

  it(`should be case sensitive`, function() {
    const testString = 'aBcabca'
    const index = testString.getIndex('b')
    index.should.equal(4)
  })
})