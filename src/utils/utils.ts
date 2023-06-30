export const dateGenerator = (date: string) => {
  const formattedDate = new Date(date)
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }
  return formattedDate.toLocaleString('en-US', options)
}
// Todays date generator

export const todayDateGenerator = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export const invoiceNumberGenerator = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let invoiceNumber = ''

  // Generate first 2 letters

  for (let i = 0; i < 2; i++) {
    invoiceNumber += letters.charAt(Math.floor(Math.random() * letters.length))
  }

  // Generate the remaining numbers
  for (let i = 0; i < 4; i++) {
    invoiceNumber += Math.floor(Math.random() * 10)
  }
  return invoiceNumber
}
