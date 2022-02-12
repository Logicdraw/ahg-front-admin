<script>
export let currentRoute;
export let params;

import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';

import Tabs from 'components/elements/views/dashboard/other/spring_hockey/finances/Tabs.svelte';
import Filter from 'components/elements/views/dashboard/other/spring_hockey/finances/Filter.svelte';

import { Navigate } from 'svelte-router-spa';


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


import { cleanParams } from 'utils/_random.js';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


let abort_controller = new AbortController();

async function getRows(params) {

	abort_controller.abort();

	abort_controller = new AbortController();

	let cleaned_params = cleanParams(params);

	let params_string = new URLSearchParams(cleaned_params).toString();

	const url = `${admin_api_url}/_other/_spring_hockey/finances?${params_string}`;

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
	// --
	offset: 0,
	limit: 25,
	// spring.
}

$: promise = getRows(url_params);


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

			<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No info found!'} />

		{:else}

			<!-- cols: teams, divisions, registered, paid_in_full, paid_somewhat, total_owing -->
			<Table {rows} />

		{/if}

	</div>

</section>

{:catch error}

<section class="section skinny-section">

	<div class="container">

		<MsgCard msg_show={true} msg_text={'Error viewing data!'} msg_type={'error'} msg_forever={true} />

	</div>

</section>

{/await}




