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



async function getSeasonInstances() {

	const url = ``;

}


async function getLeagueInstances() {

	const url = ``;

}


async function getDivisionInstances() {

	const url = ``;
	
}


async function getTeamInstances() {

	const url = ``;

}


async function getProgramInstances() {

	const url = ``;

}


async function getCampInstances() {

	const url = ``;

}




let promise = Promise.all([
	getSeasonInstances(),
	getLeagueInstances(),
	getDivisionInstances(),
	getTeamInstances(),
	getProgramInstances(),
	getCampInstances(),
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
				<span>Registrations: Group Alerts</span>
			</p>

		</div>

	</div>
	
</section>

<MsgCard msg_type={'error'} msg_forever={true} msg_show={true} msg_text={'...'} />

<Route {currentRoute} {params} />

{:catch error}

<section class="section skinny-section">

	<div class="container">

		<MsgCard msg_show={true} msg_text={'Error viewing data!'} msg_type={'error'} msg_forever={true} />

	</div>

</section>

{/await}





