<script>
export let currentRoute;
export let params;

import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';

import Tabs from 'components/elements/views/dashboard/other/spring_hockey/jersey_sponsors/Tabs.svelte';
import Filter from 'components/elements/views/dashboard/other/spring_hockey/jersey_sponsors/Filter.svelte';

import Table from 'components/elements/views/dashboard/other/spring_hockey/jersey_sponsors/Table.svelte';



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


let url = `${admin_api_url}/_other/_spring_hockey/jersey-sponsors`;


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


<section class="section skinny-section" style="padding-top: 0rem !important">

	<div class="container is-fullwidth">

		<Tabs {url_params} />

	</div>

</section>


<section class="section skinny-section">

	<div class="container is-fullwidth">

		<Filter bind:url_params season_instances={params['season_instances']} league_instances={params['league_instances']} conference_instances={params['conference_instances']} division_instances={params['division_instances']} team_instances={params['team_instances']} />

	</div>

</section>


{#await promise}

<Loading />

{:then rows}

<section class="section skinny-section">

	<div class="container is-fullwidth">

		{#if rows.length === 0}

			<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No jersey sponsors found!'} />

		{:else}

			<Table {rows} />

		{/if}

	</div>

</section>

{:catch error}

<section class="section skinny-section">

	<div class="container">

		<MsgCard msg_show={true} msg_text={'Error!'} msg_type={'error'} msg_forever={true} />

	</div>

</section>

{/await}




