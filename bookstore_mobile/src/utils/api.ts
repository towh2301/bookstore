import {isEmpty} from './validators';

/**
 * Convert an object of parameters into a query string.
 * Supports arrays, and allows excluding specific keys.
 *
 * @param params - Object of query parameters.
 * @param excludeKey - Array of keys to always include, even if empty.
 * @returns A URL-encoded query string (without the leading '?').
 */
export const stringify = (
	params: { [key: string]: number | number[] | string | string[] | boolean },
	excludeKey: string[] = [],
): string => {
	let result = '';

	if (!params) return '';

	Object.keys(params).forEach((key) => {
		const value = params[key];

		// Skip if values are empty and not in exclude lists
		if (!isEmpty(value) || excludeKey.includes(key)) {
			if (Array.isArray(value)) {
				// Append each item in the array as separate query params
				value.forEach((item) => {
					result += `&${key}=${encodeURIComponent(item)}`;
				});
			} else {
				// Append single value
				result += `&${key}=${encodeURIComponent(value.toString())}`;
			}
		}
	});

	// Remove the first '&' if present
	return result.replace(/^&/, '');
};
