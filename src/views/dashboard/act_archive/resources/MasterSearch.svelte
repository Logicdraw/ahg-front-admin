<script>
export let currentRoute;


import MsgCard from 'components/elements/MsgCard.svelte';
import MasterSearchFilter from 'components/elements/views/dashboard/act/resources/master_search/Filter.svelte';

import Table from 'components/elements/views/dashboard/act/resources/resource/Table.svelte';

import Loading from 'components/elements/Loading.svelte';

import { Navigate } from 'svelte-router-spa';


import { act_resources_info } from 'utils/act_resources.js';


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const act_api_url = app_.env.ACT_API_URL;

const token = get(auth).token;


let abort_controller = new AbortController();


let in_search = false;

async function getACTResourceRows(act_resource_info, q) {

	let act_resource_url = act_resource_info['search_url'];

	const url = `${act_api_url}/resources/${act_resource_url}?q=${q}&limit=5`;

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

		return [act_resource_info, result];

	} catch(err) {


		if (err.name === 'AbortError') {
			return;
		}

		throw err;

	} finally {

	}

}



let q = '';
let promise;


$: {
	if (q.length >= 3) {

		abort_controller.abort();

		abort_controller = new AbortController();


		let act_resource_funcs = [];

		act_resources_info.forEach((act_resource_info) => {
			act_resource_funcs.push(getACTResourceRows(act_resource_info, q));
		});


		in_search = true;


		promise = Promise.all(act_resource_funcs);

	} else {

		in_search = false;

	}
}



</script>


<style>

</style>


<!-- <section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Master Search</span>
			</p>

		</div>

	</div>

</section> -->


<section class="section skinny-section" style="position: fixed; top: calc(var(--navbar-height)); width: 100%; border-bottom: 0px solid var(--border); z-index: 1;">

	<div class="container is-fullwidth">

		<MasterSearchFilter bind:q={q} />

	</div>

</section>


<section class="section skinny-section" style="visibility: hidden;">

	<div class="container is-fullwidth">

		<MasterSearchFilter />

	</div>

</section>


{#if !in_search}

<section class="section skinny-section" style="padding-top: 0.25rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'Search for: coaches, hockey school registrations, spring hockey registrations!'} />

	</div>

</section>

{:else}


{#await promise}

<Loading />

{:then results}

<section class="section skinny-section" style="padding-top: 0.25rem !important;">

	<div class="container is-fullwidth">

		{#each results as result}

		{#if result[1].length === 0}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={`No ${result[0].name} rows found!`} />

		{:else}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={`${result[0].name}`} />

		<Table rows={result[1]} columns={result[0].default_columns} act_resource_id={result[0].id} />

		{/if}

		{/each}


	</div>

</section>

{:catch error}

<section class="section skinny-section" style="padding-top: 0.25rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={error.detail} />

	</div>

</section>

{/await}


{/if}


