import { auth } from 'store/index.js';

import { get } from 'svelte/store';


let token = get(auth).token;


export {
	token,
}



