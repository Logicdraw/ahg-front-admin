<script>
export let currentRoute;


import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';

import Table from 'components/elements/views/dashboard/resources/Table.svelte';
import Filter from 'components/elements/views/dashboard/resources/program_instance_registrations/Filter.svelte';



const columns = [
	['program_instance_registrations_sc', 'players_sc', 'first_name'],
	['program_instance_registrations_sc', 'players_sc', 'last_name'],
	['program_instances_sc', 'programs_sc', 'name'],
	['program_instances_sc', 'year_start'],
	['program_instances_sc', 'year_end'],
]


const id_key = 'program_instance_registration_id';
const resource_id = 'program_instance_registrations';



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


	const url = `${admin_api_url}/resources/program-instances-program-instance-registrations?${params_string}`;

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

$: promise = getRows(params);


</script>


<style>

</style>



<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Program Registrations</span>
			</p>

		</div>

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

			<Table {rows} {columns} {resource_id} {id_key} />

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




