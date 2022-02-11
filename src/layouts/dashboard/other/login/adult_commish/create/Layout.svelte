<script>
export let currentRoute;
export let params;


import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';


import { Route } from 'svelte-router-spa';


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';



if (!params) {
	params = {};
}


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;





async function getAdultCommishes() {

	const url = ``;

}


async function getSeasonInstances() {

	const url = ``;

}


async function getLeagueInstances() {

	const url = ``;

}




let promise = Promise.all([
	getAdultCommishes(),
	getSeasonInstances(),
	getLeagueInstances(),
]);



</script>


<style>

</style>



{#await promise}

<Loading />

{:then loading}

<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Create Adult Commish Login</span>
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




