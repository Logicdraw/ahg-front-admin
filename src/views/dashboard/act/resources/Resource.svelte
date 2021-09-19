<script>
export let currentRoute;

import { act_resources_info } from 'utils/act_resources.js';


import { cleanParams } from 'utils/index.js';

// const resource_info = resources_info.find(re => re.id === currentRoute.namedParams.resource_id);

// let resource_info;

let act_resource_info = act_resources_info.find(re => re.id === currentRoute.namedParams.act_resource_id);

$: if (currentRoute) act_resource_info = act_resources_info.find(re => re.id === currentRoute.namedParams.act_resource_id);



$: columns = act_resource_info.default_columns;



import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';
import Tabs from 'components/elements/views/dashboard/act/resources/resource/Tabs.svelte';

import Table from 'components/elements/views/dashboard/act/resources/resource/Table.svelte';
import Filter from 'components/elements/views/dashboard/act/resources/resource/Filter.svelte';



import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const act_api_url = app_.env.ACT_API_URL;

const token = get(auth).token;


let at_last_page = false;


let abort_controller = new AbortController();

async function getRows(params) {

	abort_controller.abort();

	abort_controller = new AbortController();

	let cleaned_params = cleanParams(params);


	if (cleaned_params['q']) {
		cleaned_params['offset'] = 0;
	}

	let params_string = new URLSearchParams(cleaned_params).toString();


	const url = `${act_api_url}/resources/${act_resource_info.url}?${params_string}`;

	console.log(url);

	try {

		const resp = await fetch(url, {
			method: 'GET',
			signal: abort_controller.signal,
			headers: {
				Authorization: `Bearer ${token}`,
				// 'Content-Type': 'application/json',
			},
		});

		const result = await resp.json();

		if (!resp.ok) {
			console.log(result);
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


let params = {
	q: '',
	offset: 0,
	limit: 25,
}


function resetParams(resource_id) {
	params = {
		q: '',
		offset: 0,
		limit: 25,
	}
}



$: resetParams(currentRoute.namedParams.resource_id);

$: promise = getRows(params);


</script>


<style>

</style>



<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>ACT Archive: {act_resource_info.name}</span>
			</p>

		</div>

	</div>

</section>

<!-- <section class="section skinny-section" style="padding-bottom: 0 !important;">

	<div class="container is-fullwidth">

		<Tabs {params} act_resource_id={act_resource_info['id']} />

	</div>

</section> -->


<section class="section skinny-section">

	<div class="container is-fullwidth">

		<Filter bind:params={params} {at_last_page} />

	</div>

</section>


{#await promise}

<Loading />

{:then rows}

<section class="section skinny-section" style="padding-top: 0.25rem !important;">

	<div class="container is-fullwidth">

		{#if rows.length === 0}

			<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No rows found!'} />

		{:else}

			<Table {rows} {columns} act_resource_id={currentRoute.namedParams.act_resource_id} />

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




