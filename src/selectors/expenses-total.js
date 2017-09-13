import numeral from 'numeral'

export default (expenses) => {
  const { amount } = expenses.reduce((prevExpense, nextExpense) => {
    return { amount: prevExpense.amount + nextExpense.amount }
  })

  return numeral(amount).format('$0,0.00')
}