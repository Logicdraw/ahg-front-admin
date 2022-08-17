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




async function fetchHelper(
	url,
	url_params = {},
	init,
	abort_controller = null,
) {

	if (!!abort_controller) {
		abort_controller.abort();
		abort_controller = new AbortController();
		init['signal'] = abort_controller.signal;
	}

	let cleaned_params = cleanParams(url_params);

	let params_string = new URLSearchParams(cleaned_params).toString();


	const url = `${url}?${params_string}`;

	try {

		const resp = await fetch(url, init);

		const result = await resp.json();

		if (!resp.ok) {
			throw new Error(result);
		}

		// at_last_page = (!result.length);
		// what to do instead?

		return result;

	} catch(err) {

		if (err.name === 'AbortError') {
			return;
		}

		throw err;

	} finally {
		// ...
	}

}


export {
	cleanParams,
	getRows,
	fetchHelper,
};


