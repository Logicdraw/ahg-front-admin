<script>
export let is_active;
export let params;


let export_params = {};

import download from 'downloadjs';


// gender


async function downloadFile() {

	const url = `${admin_api_url}/files/resources/players/download-csv?${export_params}`;

	const resp = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const result = await resp.blob();

	if (!resp.ok) {
		throw new Error(result);
	}

	download(result, 'players.csv', 'text/csv');

	return result;

}

</script>



<style>

</style>


<div class="modal" class:is-active={is_active}>

	<div class="modal-background"></div>

	<div class="modal-card">

		<div class="modal-card-body">

			<!-- . -->
			<!-- export ... -->


			<span class="button is-blue is-fullwidth" on:click={downloadFile}>
				Download File
			</span>

		</div>

	</div>

	<div class="modal-close is-large" on:click={() => is_active = false}></div>

</div>
