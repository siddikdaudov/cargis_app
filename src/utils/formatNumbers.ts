const formatNumbers = (x: number | string): number | string => {
	if (!x) return x
	return x
		.toString()
		.replace(/ /g, '')
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export default formatNumbers
