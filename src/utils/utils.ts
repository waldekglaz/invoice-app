export const dateGenerator = (date: string) => {
  const formattedDate = new Date(date)
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }
  return formattedDate.toLocaleString('en-US', options)
}
