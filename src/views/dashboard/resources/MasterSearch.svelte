<script>
export let currentRoute;


import MsgCard from 'components/elements/MsgCard.svelte';
import MasterSearchFilter from 'components/elements/views/dashboard/resources/master_search/Filter.svelte';

import Table from 'components/elements/views/dashboard/resources/resource/Table.svelte';

import Loading from 'components/elements/Loading.svelte';

import { Navigate } from 'svelte-router-spa';


import resources_info from 'utils/resources.js';


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


let abort_controller = new AbortController();



async function getResourceRows(resource_url, q) {

	const url = `${admin_api_url}/resources/${resource_url}?q=${q}&limit=5`;

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



let q = '';
let promise;


$: {
	if (q) {

		abort_controller.abort();

		abort_controller = new AbortController();

		let resource_funcs = [];
		for (var i = 0; i < resources_info.length; i++) {
			resource_funcs.push(getResourceRows(resources_info['url'], q));
		}

		promise = Promise.all(resource_funcs);

	}
}



</script>


<style>

</style>


<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Master Search</span>
			</p>

		</div>

	</div>

</section>


<section class="section skinny-section">

	<div class="container is-fullwidth">

		<MasterSearchFilter bind:q={q} />

	</div>

</section>


{#if q === ''}

<section class="section skinny-section" style="padding-top: 0.25rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'Search for: adult reps, coaches, guardians, players, programs, teams, camps, program registrations, camp registrations, team registrations.'} />

	</div>

</section>

{:else}


{#await promise}

<Loading />

{:then results}

<section class="section skinny-section" style="padding-top: 0.25rem !important;">

	<div class="container is-fullwidth">

		{#if results[0].length === 0}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No adult_reps rows found!'} />

		{:else}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'adult_reps:'} />

		<Table rows={results[0]} columns={adult_reps_columns} resource_id={'adult_reps'} />

		{/if}
		
		<br>

		{#if results[1].length === 0}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No coaches rows found!'} />

		{:else}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'coaches:'} />

		<Table rows={results[1]} columns={coaches_columns} resource_id={'coaches'} />

		{/if}

		<br>

		{#if results[2].length === 0}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No guardians rows found!'} />

		{:else}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'guardians'} />

		<Table rows={results[2]} columns={guardians_columns} resource_id={'guardians'} />

		{/if}
		
		<br>

		{#if results[3].length === 0}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No players rows found!'} />

		{:else}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'players'} />

		<Table rows={results[3]} columns={players_columns} resource_id={'players'} />

		{/if}

		<br>

		{#if results[4].length === 0}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No camps rows found!'} />

		{:else}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'camps'} />

		<Table rows={results[4]} columns={camp_instances_columns} resource_id={'camp_instances'} />

		{/if}
	
		<br>

		{#if results[5].length === 0}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No programs rows found!'} />

		{:else}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'programs'} />

		<Table rows={results[5]} columns={program_instances_columns} resource_id={'program_instances'} />

		{/if}

		<br>

		{#if results[6].length === 0}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No teams rows found!'} />

		{:else}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'teams'} />

		<Table rows={results[6]} columns={team_instances_columns} resource_id={'team_instances'} />

		{/if}

		<br>

		{#if results[7].length === 0}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No camp registrations rows found!'} />

		{:else}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'camp registrations'} />

		<Table rows={results[7]} columns={camp_instances_camp_instance_registrations_columns} resource_id={'camp_instance_registrations'} id_key={'camp_instance_registration_id'} />

		{/if}

		<br>

		{#if results[8].length === 0}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No program registrations rows found!'} />

		{:else}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'program registrations'} />

		<Table rows={results[8]} columns={program_instances_program_instance_registrations_columns} resource_id={'program_instance_registrations'} id_key={'program_instance_registration_id'}  />

		{/if}

		<br>

		{#if results[9].length === 0}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No team registrations rows found!'} />

		{:else}

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'team registrations'} />

		<Table rows={results[9]} columns={team_instances_team_instance_registrations_columns} resource_id={'team_instance_registrations'} id_key={'team_instance_registration_id'}  />

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


{/if}


