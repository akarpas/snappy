const _ = require("lodash")

const getUserById = async (users, userIds) => {
  const filtered = _.filter(
    users, (item) => _.indexOf(userIds, item.Id) !== -1
  )
  return filtered
}

module.exports = { getUserById }