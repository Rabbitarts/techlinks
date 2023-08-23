export const getString = (initialText: string, start: string, end: string) => {
	const from = initialText.indexOf(start)
	const to = initialText.indexOf(end)

	return initialText.substring(from, to).replace(start, '')
}
