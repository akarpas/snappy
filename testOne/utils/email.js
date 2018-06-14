const sendEmail = async (user) => {
  const isFake = user.Email.includes('fake')
  const isInvalid = !user.Email.includes('.com')
  const status = isFake || isInvalid ? '500' : '200'

  return status
}

module.exports = { sendEmail }