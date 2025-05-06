export const isEmpty = (value: any): boolean => {
	if (value == null) return true; // null or undefined
	if (typeof value === 'string' && value.trim() === '') return true;
	if (Array.isArray(value) && value.length === 0) return true;
	return typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0;
};