<script>
export let currentRoute;
export let params;


import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';


import { Route } from 'svelte-router-spa';


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';





async function getSeasonInstances() {

	const url = ``;

}


async function getLeagueInstances() {

	const url = ``;

}


async function getConferenceInstances() {

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
	getConferenceInstances(),
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
				<span>Create Group Receipt</span>
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

