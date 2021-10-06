<script>
export let currentRoute;

import { resources_info } from 'utils/resources.js';


import { cleanParams } from 'utils/_random.js';

// const resource_info = resources_info.find(re => re.id === currentRoute.namedParams.resource_id);

// let resource_info;

let resource_info = resources_info.find(re => re.id === currentRoute.namedParams.resource_id);

$: if (currentRoute) resource_info = resources_info.find(re => re.id === currentRoute.namedParams.resource_id);



$: columns = resource_info.default_columns;

$: id_key = resource_info.id_key;


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

async function getRows(params) {

	abort_controller.abort();

	abort_controller = new AbortController();

	let cleaned_params = cleanParams(params);

	let params_string = new URLSearchParams(cleaned_params).toString();


	const url = `${admin_api_url}/_resources/${resource_info.url}?${params_string}`;

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
				<span>{resource_info.name}</span>
			</p>

		</div>

	</div>

</section>

<section class="section skinny-section" style="padding-bottom: 0 !important;">

	<div class="container is-fullwidth">

		<Tabs {params} resource_id={resource_info['id']} resource_has_create_form={resource_info['has_create_form']} />

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

			<Table {rows} {columns} resource_id={currentRoute.namedParams.resource_id} id_key={id_key} />

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




