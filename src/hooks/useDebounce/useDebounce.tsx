import {useState} from 'react';

/**
 * @param callbackFunction function to be called after delay
 * @param ms a number of milliseconds between callback calls
 */
function useDebounce<T, R>(callbackFunction: (props: R) => T, ms = 100) {
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

	const debounceFunction = (props: R) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		const currentTimeoutId = setTimeout(() => callbackFunction(props), ms);
		setTimeoutId(currentTimeoutId);
	};

	return debounceFunction;
}

export default useDebounce;
