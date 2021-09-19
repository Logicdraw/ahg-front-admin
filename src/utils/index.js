function removeEmptyStringAndNull(key, value) {

	if (value === '' || value === null) {
		return undefined;
	}

	return value;

}



function cleanParams(params) {
	let cleaned_params = {};
	for (let [key, value] of Object.entries(params)) {
		if (!((value === null) || (value === undefined) || (value === ''))) {
			cleaned_params[key] = value;
		}
	}
	return cleaned_params;
}



export {
	removeEmptyStringAndNull,
	cleanParams,
};
