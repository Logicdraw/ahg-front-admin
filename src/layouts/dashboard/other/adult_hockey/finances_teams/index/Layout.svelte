<script>
export let currentRoute;

import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';


import { Route } from 'svelte-router-spa';


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;



let loading = false;

let error = false;


let params = {};



async function getLeagueInstances() {

	let url_params = {
		season_instance_id: '2',
		limit: 100000,
		order_by_label: 'season_instance_id',
	}

	let params_string = new URLSearchParams(url_params).toString();

	const url = `${admin_api_url}/_resources/_programs/_team_instance/league-instances?${params_string}`;

	const resp = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const result = await resp.json();

	if (!resp.ok) {
		throw new Error(result.detail);
	}

	params['league_instances'] = result;

	console.log(result);

	return result;

}



async function getConferenceInstances() {

	let url_params = {
		season_instance_id: '2',
		order_by_label: 'id',
		order_by_dir: 'desc',
		limit: 100000,
	}

	let params_string = new URLSearchParams(url_params).toString();

	const url = `${admin_api_url}/_resources/_programs/_team_instance/conference-instances?${params_string}`;

	const resp = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const result = await resp.json();

	if (!resp.ok) {
		throw new Error(result.detail);
	}

	params['conference_instances'] = result;

	console.log(result);

	return result;

}



async function getDivisionInstances() {

	let url_params = {
		season_instance_id: '2',
		order_by_label: 'id',
		order_by_dir: 'desc',
		limit: 10000,
	}

	let params_string = new URLSearchParams(url_params).toString();

	const url = `${admin_api_url}/_resources/_programs/_team_instance/division-instances?${params_string}`;

	const resp = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const result = await resp.json();

	if (!resp.ok) {
		throw new Error(result.detail);
	}

	params['division_instances'] = result;

	return result;

}




let promise = Promise.all([
	getLeagueInstances(),
	// getConferenceInstances(),
	getDivisionInstances(),
]);



</script>



<style>


</style>



{#await promise}

<Loading />

{:then data}

<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Adult Hockey Teams Finances</span>
			</p>

		</div>

	</div>
	
</section>

<MsgCard msg_show={true} msg_text={'...'} msg_type={'error'} msg_forever={true} />


<Route {currentRoute} {params} />

{:catch error}

<section class="section skinny-section">

	<div class="container">

		<MsgCard msg_show={true} msg_text={'Error viewing data!'} msg_type={'error'} msg_forever={true} />

	</div>

</section>

{/await}



