<script>
export let export_modal_is_active;
export let params;
export let resource_info;


import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';


let loading = false;

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

}

</script>


<style>


</style>


<div class="modal" class:is-active={export_modal_is_active}>

	<div class="modal-background"></div>

	<div class="modal-card">

		<div class="modal-card-body">

			<MsgCard msg_type={'error'} msg_forever={true} msg_text={'Export rows!'} />

			{#if loading}

			<Loading />

			{:else}

			<div class="buttons is-centered">

				<div class="button is-blue is-fullwidth" on:click={exportRows}>
					Export Rows
				</div>

			</div>

			{/if}

		</div>

	</div>

	<div class="modal-close is-large" on:click={() => export_modal_is_active = false}></div>

</div>

