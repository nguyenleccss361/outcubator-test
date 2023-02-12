import { useCallback, useEffect, useState } from 'react'

// Debounce input for better UX
function debounce(cb, time) {
	let timeout
	return (...args) => {
		clearTimeout(timeout)
		timeout = setTimeout(cb, time, ...args)
	}
}
export function useDebouncedState(initialState) {
	const [state, setState] = useState(initialState)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedSetState = useCallback(debounce(setState, 200), [])
	return [state, debouncedSetState]
}

export const useMediaQuery = query => {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const media = window.matchMedia(query)
		if (media.matches !== matches) {
			setMatches(media.matches)
		}
		const listener = () => setMatches(media.matches)
		window.addEventListener('resize', listener)
		return () => window.removeEventListener('resize', listener)
	}, [matches, query])

	return matches
}
