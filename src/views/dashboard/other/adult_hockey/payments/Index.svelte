<script>
export let currentRoute;
export let params;

import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';

import Tabs from 'components/elements/views/dashboard/other/adult_hockey/payments/Tabs.svelte';
import Filter from 'components/elements/views/dashboard/other/adult_hockey/payments/Filter.svelte';

import Table from 'components/elements/views/dashboard/other/adult_hockey/payments/Table.svelte';


import { Navigate } from 'svelte-router-spa';


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


import { cleanParams } from 'utils/_random.js';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


let abort_controller = new AbortController();

let at_last_page = false;

async function getRows(url_params) {

	abort_controller.abort();

	abort_controller = new AbortController();

	let cleaned_params = cleanParams(url_params);

	let params_string = new URLSearchParams(cleaned_params).toString();


	const url = `${admin_api_url}/_other/_adult_hockey/payments?${params_string}`;

	try {

		const resp = await fetch(url, {
			method: 'GET',
			signal: abort_controller.signal,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const result = await resp.json();

		if (!resp.ok) {
			throw new Error(result);
		}

		at_last_page = (!result.length);

		return result;

	} catch(err) {

		if (err.name === 'AbortError') {
			return;
		}

		throw err;

	} finally {

	}

}



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

$: promise = getRows(url_params);



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

	</div>

</section>


<section class="section skinny-section" style="padding-bottom: 0.5rem !important;">

	<div class="container is-fullwidth">

		<Filter bind:url_params {at_last_page} team_instances={params['team_instances']} />
		<!-- division_instances={params['division_instances']} league_instances={params['league_instances']}  -->

	</div>

</section>


{#await promise}

<Loading />

{:then rows}

<section class="section skinny-section">

	<div class="container is-fullwidth">

		{#if rows.length === 0}

			<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No payments found!'} />

		{:else}

			<Table {rows} team_instances={params['team_instances']} />

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



<!-- -- -->




