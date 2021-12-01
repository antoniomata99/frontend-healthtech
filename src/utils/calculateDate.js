// Calculate if the day is before or after the day
export const isDateBeforeToday = (date) => {
  const today = new Date()
  const dateToCompare = new Date(date)
  return dateToCompare < today
}
