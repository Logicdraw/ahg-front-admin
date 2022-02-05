<script>
export let url_params;

import download from 'downloadjs';


import { auth } from 'store/index.js';
import { get } from 'svelte/store';


const admin_api_url = app_.env.ADMIN_API_URL;

let token = get(auth).token;



let loading = false;


let abort_controller = new AbortController();


async function exportRows() {

	abort_controller.abort();

	abort_controller = new AbortController();

	loading = true;

	const url = `${admin_api_url}/_other/_adult_hockey_finances/adult-payments-xlsx`;

	try {

		const resp = await fetch(url, {
			method: 'GET',
			signal: abort_controller.signal,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (!resp.ok) {
			alert('Error downloading file! Try again later!');
			throw new Error('Error!');
		}

		const result = await resp.blob();

		download(result, `adult-payments.xlsx`, `xlsx`);

	} catch(err) {
		
		if (err.name === 'AbortError') {
			return;
		}

		throw err;

	} finally {

		loading = false;

	}


}

</script>


<style>


</style>


<span class="button is-normal" on:click={exportRows}>
	Export Payments
	<i class="far fa-file-export" class:is-hidden={loading}></i>
	<i class="fas fa-circle-notch fa-spin" class:is-hidden={!loading}></i>
</span>



