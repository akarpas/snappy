String.prototype.getIndex = function (searchValue, fromIndex) {
  const input = String(this.valueOf())

  if (searchValue.length > input.length) {
    return -1
  }

  const startIndex = fromIndex < 0 || !fromIndex ? 0 : fromIndex
  const length = searchValue.length

  const characters = String(searchValue).split('')

  for (let x = startIndex; x < input.length; x++) {
    if (characters[0] === input[x]) {
      let parts = ''
      for (let y = 0; y < length; y++) {
        parts += input[x + y]
      }
      if (parts === searchValue) {
        return x
      }
      return -1
    }
  }
} 

module.exports = String.prototype.getIndex