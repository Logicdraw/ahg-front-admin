<script>
export let currentRoute;


import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';

import Table from 'components/elements/views/dashboard/resources/Table.svelte';
import Filter from 'components/elements/views/dashboard/resources/team_instance_registrations/Filter.svelte';



const default_columns = [
	['players_sc', 'full_name'],
	['team_instances_sc', 'teams_sc', 'name'],
	['team_instances_sc', 'teams_sc', 'divisions_sc', 'name',],
	['team_instances_sc', 'year_start'],
	['team_instances_sc', 'year_end'],
]



const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


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

	let params_string = new URLSearchParams(cleaned_params).toString();


	const url = `${admin_api_url}/resources/team-instance-registrations?${params_string}`;

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
}

$: promise = getRows(params);


</script>


<style>

</style>



<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				Team Registrations
			</p>

		</div>

	</div>

</section>



<section class="section">

	<div class="container is-fullwidth">

		<Filter bind:params={params} />

	</div>

</section>


{#await promise}

<Loading />

{:then rows}

<section class="section">

	<div class="container is-fullwidth">

		{#if rows.length === 0}

			<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No rows found!'} />

		{:else}

			<Table {rows} {columns} />

		{/if}

	</div>

</section>

{:catch error}

<section class="section">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={error.detail} />

	</div>

</section>

{/await}




