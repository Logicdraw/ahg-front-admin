<script>
export let url_params;


async function exportRows() {

	const url = `${admin_api_url}/${resource_info.url}/export-xlsx`;

	const resp = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const result = await resp.blob();

	// download
	return result;

}

</script>


<style>

</style>


<span class="button" on:click={}>

	<!-- -- -->

</span>


