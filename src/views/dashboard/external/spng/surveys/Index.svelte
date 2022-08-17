<script>
export let currentRoute;
export let params;

import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';


import Table from 'components/elements/views/dashboard/other/spng/surveys/index/Table.svelte';

import Filter from 'components/elements/views/dashboard/other/spng/surveys/index/Filter.svelte';
import Tabs from 'components/elements/views/dashboard/other/spng/surveys/index/Tabs.svelte';


import { auth } from 'store/index.js';

import { cleanParams } from 'utils/_random.js';



import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


let at_last_page = false;


let abort_controller = new AbortController();

async function getSurveys(params) {

	abort_controller.abort();

	abort_controller = new AbortController();

	let cleaned_params = cleanParams(params);


	if (cleaned_params['q']) {
		cleaned_params['offset'] = 0;
	}

	let params_string = new URLSearchParams(cleaned_params).toString();


	const url = `${admin_api_url}/spng_surveys?${params_string}`;

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
	offset: 0,
	limit: 25,
}


function resetParams(resource_id) {
	url_params = {
		q: '',
		offset: 0,
		limit: 25,
	}
}



$: resetParams(currentRoute.namedParams.resource_id);

$: promise = getSurveys(url_params);


</script>


<style>

</style>



<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>SportsEngine Form Integrations</span>
			</p>

		</div>

	</div>

</section>


<section class="section skinny-section" style="padding-bottom: 0 !important; display: none;">

	<div class="container is-fullwidth">

		<!-- <Tabs {params} resource_id={resource_info['id']} /> -->

	</div>

</section>


<section class="section skinny-section" style="padding-top: 0.5rem !important; padding-bottom: 0.5rem !important;">

	<div class="container is-fullwidth">

		<!-- <Filter bind:params={params} {at_last_page} /> -->

	</div>

</section>



<section class="section skinny-section" style="">
		
	<div class="container is-fullwidth">

		<MsgCard msg_type={'error'} msg_text={'Here are the SportsEngine forms being tracked in our database.'} msg_show={true} />

	</div>

</section>


{#await promise}

<Loading />

{:then surveys}

<section class="section skinny-section" style="padding-top: 0.25rem !important;">

	<div class="container is-fullwidth">

		{#if surveys.length === 0}

			<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No forms found!'} />

		{:else}

			<Table {surveys} />
			<!-- -- -- -->

		{/if}

	</div>

</section>

{:catch error}

<section class="section skinny-section" style="padding-top: 0.25rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={error.detail} />

	</div>

</section>

{/await}




