const _ = require("lodash")

const filter = async (users, userIds) => {
  const filtered = _.filter(
    users, (item) => _.indexOf(userIds, item.Id) !== -1
  )
  return filtered
}

module.exports = { filter }