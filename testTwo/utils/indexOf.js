String.prototype.getIndex = function (searchValue, fromIndex) {
  const input = this.valueOf()
  const startIndex = fromIndex ? fromIndex : 0

  const inputArray = input.split('')

  let results = []
  inputArray.forEach((char, index) => {
    if (index < startIndex) {
      return
    }
    if (char === searchValue) {
      results.push(index)
    }
  })
  return results.length > 0 ? results[0] : -1
}

module.exports = String.prototype.getIndex