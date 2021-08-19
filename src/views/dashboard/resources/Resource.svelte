<script>
export let currentRoute;

import { resources_info } from 'utils/resources.js';


// const resource_info = resources_info.find(re => re.id === currentRoute.namedParams.resource_id);

// let resource_info;

let resource_info = resources_info.find(re => re.id === currentRoute.namedParams.resource_id);

$: if (currentRoute) resource_info = resources_info.find(re => re.id === currentRoute.namedParams.resource_id);



$: columns = resource_info.default_columns;


import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';
import Tabs from 'components/elements/views/dashboard/resources/resource/Tabs.svelte';

import Table from 'components/elements/views/dashboard/resources/resource/Table.svelte';
import Filter from 'components/elements/views/dashboard/resources/resource/Filter.svelte';



import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


let at_last_page = false;


let abort_controller = new AbortController();

async function getRows(resource_info, params) {

	abort_controller.abort();

	abort_controller = new AbortController();

	let cleaned_params = {};
	for (let [key, value] of Object.entries(params)) {
		if (!((value === null) || (value === undefined) || (value === ''))) {
			cleaned_params[key] = value;
		}
	}

	if (cleaned_params['q']) {
		cleaned_params['offset'] = 0;
	}

	let params_string = new URLSearchParams(cleaned_params).toString();


	const url = `${admin_api_url}/resources/${resource_info.url}?${params_string}`;

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


let params = {
	q: '',
	offset: 0,
	limit: 25,
}

$: promise = getRows(resource_info, params);


</script>


<style>

</style>



<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>{resource_info.name}</span>
			</p>

		</div>

	</div>

</section>

<section class="section skinny-section" style="padding-bottom: 0 !important;">

	<div class="container is-fullwidth">

		<Tabs {params} resource_id={resource_info['id']} />

	</div>

</section>


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

			<Table {rows} {columns} resource_id={currentRoute.namedParams.resource_id} id_key={resource_info['id_key']} />

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




