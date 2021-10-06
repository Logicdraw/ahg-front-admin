<script>
export let currentRoute;

import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';

import Tabs from 'components/elements/views/dashboard/other/jersey_sponsors/Tabs.svelte';
import Filter from 'components/elements/views/dashboard/other/jersey_sponsors/Filter.svelte';

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

	const url = `${admin_api_url}/_orders/_jersey_sponsors/jersey-sponsors?${params_string}`;

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
	// --
	offset: 0,
	limit: 25,
	// spring.
}

$: promise = getRows(params);


</script>


<style>

</style>



<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Jersey Sponsors</span>
			</p>

		</div>

	</div>

</section>

<section class="section skinny-section" style="padding-top: 0rem !important">

	<div class="container is-fullwidth">

		<Tabs {params} />

	</div>

</section>


<section class="section skinny-section">

	<div class="container is-fullwidth">

		<Filter bind:params={params} />

	</div>

</section>


{#await promise}

<Loading />

{:then jersey_sponsors}

<section class="section skinny-section">

	<div class="container is-fullwidth">


	</div>

</section>

{:catch error}


{/await}




