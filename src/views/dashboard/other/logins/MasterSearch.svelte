<script>
export let currentRoute;
export let params;

import MsgCard from 'components/elements/MsgCard.svelte';
import Loading from 'components/elements/Loading.svelte';

// import MasterSearchFilter from 'components/elements/views/dashboard/logins/master_search/Filter.svelte';

// import Table from 'components/elements/views/dashboard/logins/login/Table.svelte';


import { Navigate } from 'svelte-router-spa';


import { logins_info } from 'utils/logins.js';


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


let abort_controller = new AbortController();


let in_search = false;

async function getLoginRows(login_info, q) {

	let login_parent_url = login_info['parent_url'];

	let login_url = login_info['search_url'];

	const url = `${admin_api_url}/_other/_logins/${login_url}?q=${q}&limit=5`;

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

		return [login_info, result];

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


		let login_funcs = [];

		logins_info.forEach((login_info) => {
			login_funcs.push(getLoginRows(login_info, q));
		});


		in_search = true;


		promise = Promise.all(login_funcs);

	} else {

		in_search = false;

	}
}




let search_items_str = '';

logins_info.forEach((login_info) => {
	search_items_str += login_info['name'] + ', '
});


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

		<!-- <MasterSearchFilter bind:q={q} /> -->

	</div>

</section>


<section class="section skinny-section" style="visibility: hidden;">

	<div class="container is-fullwidth">

		<!-- <MasterSearchFilter /> -->

	</div>

</section>


{#if !in_search}

<section class="section skinny-section" style="padding-top: 0.25rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={`Search for logins for: ${search_items_str}`} />

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

		<Table rows={result[1]} columns={result[0].default_columns} login_id={result[0].id} id_key={result[1].id_key} />

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


