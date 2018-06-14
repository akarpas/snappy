const users = require("./data/users.json")["users"]
const usersSearch = require("./utils/users.js")
const Input = require("prompt-input")
const _ = require("lodash")

const query = new Input({
  name: "query",
  message: "Please enter user ID(s), separate by spaces: "
})

const usersFiltered = _(users).map(item => {
  return {
    id: item.Id,
    name: item.firstName + " " + item.lastName,
  }
}).value()

console.log("Available users: \n", usersFiltered)

query.ask(async (input) => {
  const userIds = input.split(" ")
  const result = await usersSearch.filter(users, userIds)
  console.log("----------------------------")
  result.forEach((item, index) => {
    console.log(
      `(x) - An email has been sent to ${item.firstName} ${item.lastName} with email: ${item.Email}...`
    )
  })
  console.log("----------------------------")
})