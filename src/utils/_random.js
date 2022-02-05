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




function randomString(length) {
	let opts = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	var result  = '';
	for (var i = 0; i < length; ++i) {
		result += opts[Math.floor(Math.random() * opts.length)];
	}

	return result;
}



export {
	removeEmptyStringAndNull,
	cleanParams,
	randomString,
};
