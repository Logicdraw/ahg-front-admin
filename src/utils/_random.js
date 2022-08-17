
function randomString(length) {
	let opts = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	var result  = '';
	for (var i = 0; i < length; ++i) {
		result += opts[Math.floor(Math.random() * opts.length)];
	}

	return result;
}



export {
	randomString,
};
