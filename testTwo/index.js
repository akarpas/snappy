const Input = require("prompt-input")

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
  return {
    index: results.length > 0 ? results[0] : -1,
    searchValue
  }
}

const stringInput = new Input({
  name: "stringInput",
  message: "Please enter any string: "
})

const searchValue = new Input({
  name: "searchValue",
  message: "Please enter one character as a search value: "
})

const startIndex = new Input({
  name: "startIndex",
  message: "Please enter a starting index: "
})

stringInput.run().then(string => {
  searchValue.run().then(search => {
    startIndex.run().then(index => {
      const result = string.getIndex(search, index)
      const status = result.index === -1 ?
      `does not contain the letter ${result.searchValue}` :
      `contains the letter ${result.searchValue} at index ${result.index}`
      
      console.log(`* ${string} * ${status}`)
    })
  })
})
