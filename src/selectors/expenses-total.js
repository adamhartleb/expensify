import numeral from 'numeral'

export default expenses => {
	const amount = expenses
		.map(exp => exp.amount)
		.reduce((prevExpense, nextExpense) => {
			return prevExpense + nextExpense
		}, 0)

	return numeral(amount).format('$0,0.00')
}
