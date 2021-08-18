<script>
export let currentRoute;


import MsgCard from 'components/elements/MsgCard.svelte';
import Loading from 'components/elements/Loading.svelte';

import Form from 'components/forms/views/dashboard/resource/program_instance_registrations/create/Form.svelte'

import SvelteSeo from 'svelte-seo';


let msg_show = false;
let msg_type;
let msg_text;


import { auth } from 'store/index.js';


import { get } from 'svelte/store';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


const promise = Promise.all([
	getProgramInstances(),
	getPlayers(),
]);


async function getProgramInstances() {

	const url = `${admin_api_url}/resources/program-instances?limit=1000000`;

	const resp = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const result = await resp.json();

	if (!resp.ok) {
		throw new Error(result);
	}

	return result;

}

async function getPlayers() {

	const url = `${admin_api_url}/resources/players?limit=1000000`;

	const resp = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const result = await resp.json();

	if (!resp.ok) {
		throw new Error(result);
	}

	return result;

}



</script>


<style>

</style>



<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Create new Program Registration</span>
			</p>

		</div>

	</div>

</section>


{#await promise}

<Loading />

{:then results}

<section class="section">

	<div class="container">

		<div class="columns is-centered">

			<div class="column is-9-desktop is-12-tablet is-12-mobile">

				<MsgCard bind:msg_show={msg_show} bind:msg_type={msg_type} bind:msg_text={msg_text} />

				<div class="card form-card">

					<div class="card-content">

						<Form bind:msg_show={msg_show} bind:msg_type={msg_type} bind:msg_text={msg_text} program_instances={results[0]} players={results[1]} />

					</div>

				</div>

			</div>

		</div>

	</div>

</section>

{:catch error}

<section class="section skinny-section" style="padding-top: 0.25rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={error.detail} />

	</div>

</section>

{/await}



