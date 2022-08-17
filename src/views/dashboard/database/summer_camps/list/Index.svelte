<script>
export let currentRoute;
export let params;

import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';

import Tabs from 'components/elements/views/dashboard/other/adult_hockey/reps/Tabs.svelte';
import Filter from 'components/elements/views/dashboard/other/adult_hockey/reps/Filter.svelte';

import Table from 'components/elements/views/dashboard/other/adult_hockey/reps/Table.svelte';


// import SvelteSeo from 'svelte-seo';


import { token } from 'utils/token/index.js';

import { fetchHelper } from 'utils/api/index.js';




const admin_api_url = app_.env.ADMIN_API_URL;



let abort_controller = new AbortController();


let url_params = {
	q: '',
	league_instance_id: null,
	division_instance_id: null,
	team_instance_id: null,
	// --
	order_by_dir: 'desc',
	order_by_label: 'id',
	// --
	offset: 0,
	limit: 50,
}


let url = `${admin_api_url}/_other/_adult_hockey/reps`;


let headers = {
	method: 'GET',
	headers: {
		Authorization: `Bearer ${token}`,
	},
}


$: promise = fetchHelper(abort_controller, url_params, url, headers);




import { setContext } from 'svelte';

setContext('refresh_table', {
	refreshTable: () => url_params = url_params
});


</script>


<style>

</style>


<section class="section skinny-section" style="padding-bottom: 0 !important;">

	<div class="container is-fullwidth">

		<Tabs {url_params} />
		<!-- Export to file! -->

	</div>

</section>


<section class="section skinny-section" style="padding-bottom: 0.5rem !important;">

	<div class="container is-fullwidth">

		<Filter bind:url_params />
		<!--  team_instances={params['team_instances']} -->
		<!-- {at_last_page}  -->

	</div>

</section>


{#await promise}

<Loading />

{:then rows}

<section class="section skinny-section">

	<div class="container is-fullwidth">

		{#if rows.length === 0}

			<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No camps found!'} />

		{:else}

			<Table {rows} />

		{/if}

	</div>

</section>

{:catch error}

<section class="section skinny-section" style="padding-top: 0.5rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={error.detail} />

	</div>

</section>

{/await}



