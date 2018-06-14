const users = require("./data/users.json")["users"]
const usersSearch = require("./utils/users.js")
const email = require("./utils/email.js")
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
  const selectedUsers = await usersSearch.getUserById(users, input.split(" "))

  selectedUsers.forEach(async user => {
    const emailResponse = await email.sendEmail(user)
    const emailStatus = emailResponse === "200" ? "SUCCESS" : "FAILURE"
    console.log(
      `
      -------------------------------------------------------
      - STATUS of Email to ${user.firstName} ${user.lastName} 
      with email ${user.Email}: ${emailStatus}
      -------------------------------------------------------
      `
    )
  })
})