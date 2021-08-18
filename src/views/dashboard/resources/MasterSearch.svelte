<script>
export let currentRoute;


import MsgCard from 'components/elements/MsgCard.svelte';
import MasterSearchFilter from 'components/elements/views/dashboard/resources/master_search/Filter.svelte';

import Table from 'components/elements/views/dashboard/resources/Table.svelte';

import Loading from 'components/elements/Loading.svelte';

import { Navigate } from 'svelte-router-spa';


const resources = [
	{
		id: 'adult_reps',
		name: 'Adult Reps',
	},
	{
		id: 'coaches',
		name: 'Coaches',
	},
	{
		id: 'guardians',
		name: 'Guardians',
	},
	{
		id: 'players',
		name: 'Players',
	},
	// --
	{
		id: 'camp_instances',
		name: 'Camps',
	},
	{
		id: 'program_instances',
		name: 'Programs',
	},
	{
		id: 'team_instances',
		name: 'Teams',
	},
	// --
	{
		id: 'camp_instance_registrations',
		name: 'Camp Registrations',
	},
	{
		id: 'program_instance_registrations',
		name: 'Program Registrations',
	},
	{
		id: 'team_instance_registrations',
		name: 'Team Registrations',
	},
	// 
]



import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


let abort_controller_1 = new AbortController();
let abort_controller_2 = new AbortController();
let abort_controller_3 = new AbortController();
let abort_controller_4 = new AbortController();
let abort_controller_5 = new AbortController();
let abort_controller_6 = new AbortController();
let abort_controller_7 = new AbortController();
let abort_controller_8 = new AbortController();
let abort_controller_9 = new AbortController();
let abort_controller_10 = new AbortController();

async function getAdultReps(q) {

	abort_controller_1.abort();

	abort_controller_1 = new AbortController();

	const url = `${admin_api_url}/resources/adult-reps?q=${q}&limit=5`;

	try {

		const resp = await fetch(url, {
			method: 'GET',
			signal: abort_controller_1.signal,
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


async function getCoaches(q) {

	abort_controller_2.abort();

	abort_controller_2 = new AbortController();

	const url = `${admin_api_url}/resources/coaches?q=${q}&limit=5`;

	try {

		const resp = await fetch(url, {
			method: 'GET',
			signal: abort_controller_2.signal,
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


async function getGuardians(q) {

	abort_controller_3.abort();

	abort_controller_3 = new AbortController();

	const url = `${admin_api_url}/resources/guardians?q=${q}&limit=5`;

	try {

		const resp = await fetch(url, {
			method: 'GET',
			signal: abort_controller_3.signal,
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


async function getPlayers(q) {

	abort_controller_4.abort();

	abort_controller_4 = new AbortController();

	const url = `${admin_api_url}/resources/players?q=${q}&limit=5`;

	try {

		const resp = await fetch(url, {
			method: 'GET',
			signal: abort_controller_4.signal,
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


async function getCampInstances(q) {

	abort_controller_5.abort();

	abort_controller_5 = new AbortController();

	const url = `${admin_api_url}/resources/camp-instances?q=${q}&limit=5`;

	try {

		const resp = await fetch(url, {
			method: 'GET',
			signal: abort_controller_5.signal,
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


async function getProgramInstances(q) {

	abort_controller_6.abort();

	abort_controller_6 = new AbortController();

	const url = `${admin_api_url}/resources/program-instances?q=${q}&limit=5`;

	try {

		const resp = await fetch(url, {
			method: 'GET',
			signal: abort_controller_6.signal,
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


async function getTeamInstances(q) {

	abort_controller_7.abort();

	abort_controller_7 = new AbortController();

	const url = `${admin_api_url}/resources/team-instances?q=${q}&limit=5`;

	try {

		const resp = await fetch(url, {
			method: 'GET',
			signal: abort_controller_7.signal,
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


async function getCampInstancesCampInstanceRegistrations(q) {

	abort_controller_8.abort();

	abort_controller_8 = new AbortController();

	const url = `${admin_api_url}/resources/camp-instances-camp-instance-registrations?q=${q}&limit=5`;

	try {

		const resp = await fetch(url, {
			method: 'GET',
			signal: abort_controller_8.signal,
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


async function getProgramInstancesProgramInstanceRegistrations(q) {

	abort_controller_9.abort();

	abort_controller_9 = new AbortController();

	const url = `${admin_api_url}/resources/program-instances-program-instance-registrations?q=${q}&limit=5`;

	try {

		const resp = await fetch(url, {
			method: 'GET',
			signal: abort_controller_9.signal,
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

async function getTeamInstancesTeamInstanceRegistrations(q) {

	abort_controller_10.abort();

	abort_controller_10 = new AbortController();

	const url = `${admin_api_url}/resources/team-instances-team-instance-registrations?q=${q}&limit=5`;

	try {

		const resp = await fetch(url, {
			method: 'GET',
			signal: abort_controller_10.signal,
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



const adult_reps_columns = [
	['full_name'],
	['email'],
	['mobile_phone'],
]

const coaches_columns = [
	['full_name'],
	['email'],
	['mobile_phone'],
]

const guardians_columns = [
	['full_name'],
	['email'],
	['mobile_phone'],
]

const players_columns = [
	['first_name'],
	['last_name'],
	['date_of_birth'],
	['gender'],
]


const camp_instances_columns = [
	['camps_sc', 'name'],
	['year_start'],
	['year_end'],
]

const program_instances_columns = [
	['programs_sc', 'name'],
	['year_start'],
	['year_end'],
]

const team_instances_columns = [
	['teams_sc', 'name'],
	['year_start'],
	['year_end'],
]


const camp_instances_camp_instance_registrations_columns = [
	['camp_instance_registrations_sc', 'players_sc', 'first_name'],
	['camp_instance_registrations_sc', 'players_sc', 'last_name'],
	['camp_instances_sc', 'camps_sc', 'name'],
	['camp_instances_sc', 'year_start'],
	['camp_instances_sc', 'year_end'],
]

const program_instances_program_instance_registrations_columns = [
	['program_instance_registrations_sc', 'players_sc', 'first_name'],
	['program_instance_registrations_sc', 'players_sc', 'last_name'],
	['program_instances_sc', 'programs_sc', 'name'],
	['program_instances_sc', 'year_start'],
	['program_instances_sc', 'year_end'],
]

const team_instances_team_instance_registrations_columns = [
	['team_instance_registrations_sc', 'players_sc', 'first_name'],
	['team_instance_registrations_sc', 'players_sc', 'last_name'],
	['team_instances_sc', 'teams_sc', 'name'],
	['team_instances_sc', 'divisions_sc', 'name'],
	['team_instances_sc', 'year_start'],
	['team_instances_sc', 'year_end'],
]




let q = '';
let promise;


$: {
	if (q) {

		promise = Promise.all([
			getAdultReps(q),
			getCoaches(q),
			getGuardians(q),
			getPlayers(q),
			getCampInstances(q),
			getProgramInstances(q),
			getTeamInstances(q),
			getCampInstancesCampInstanceRegistrations(q),
			getProgramInstancesProgramInstanceRegistrations(q),
			getTeamInstancesTeamInstanceRegistrations(q),
		]);

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


