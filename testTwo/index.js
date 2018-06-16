const input = require("prompt-input")
const getIndex = require("./utils/indexOf.js")

const stringInput = new input({
  name: "stringInput",
  message: "Please enter any string: "
})

const searchValue = new input({
  name: "searchValue",
  message: "Please enter one character as a search value: "
})

const startIndex = new input({
  name: "startIndex",
  message: "Please enter a starting index: "
})

stringInput.run().then(string => {
  searchValue.run().then(search => {
    startIndex.run().then(index => {
      const result = string.getIndex(search, index)
      const status = result === -1 ?
      `does not contain the letter ${search}` :
      `contains the letter ${search} at index ${result}`
      
      console.log(`* ${string} * ${status}`)
    })
  })
})