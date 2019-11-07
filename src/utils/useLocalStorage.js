import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		// get local stoarage by key
		const item = window.localStorage.getItem(key);

		return item ? JSON.parse(item) : initialValue;
	});

	const setValue = value => {
		//store value
		setStoredValue(value);

		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [storedValue, setValue];
};
