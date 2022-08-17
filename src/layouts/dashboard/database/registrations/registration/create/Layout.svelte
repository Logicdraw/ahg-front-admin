<script>
export let currentRoute;
export let params;


import { Route } from 'svelte-router-spa';


import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';


import ErrorSection from 'components/elements/ErrorSection.svelte';
import Hero from 'components/elements/Hero.svelte';


import { token } from 'utils/token/index.js';

import { fetchHelper } from 'utils/api/index.js';


const admin_api_url = app_.env.ADMIN_API_URL;



if (!params) {
	params = {};
}



const init = {
	method: 'GET',
	headers: {
		Authorization: `Bearer ${token}`,
	},
}


const players_url = `${admin_api_url}/_database/_registration/_create/players`;
const players_url_params = {};


const season_instances_url = `${admin_api_url}/_database/_registration/_create/season-instances`;
const season_instances_url_params = {};


const league_instances_url = `${admin_api_url}/_database/_registration/_create/league-instances`;
const league_instances_url_params = {};


const conference_instances_url = `${admin_api_url}/_database/_registration/_create/conference-instances`;
const conference_instances_url_params = {};


const division_instances_url = `${admin_api_url}/_database/_registration/_create/division-instances`;
const division_instances_url_params = {};


const team_instances_url = `${admin_api_url}/_database/_registration/_create/team-instances`;
const team_instances_url_params = {};


const program_instances_url = `${admin_api_url}/_database/_registration/_create/program-instances`;
const program_instances_url_params = {};


const camp_instances_url = `${admin_api_url}/_database/_registration/_create/camp-instances`;
const camp_instances_url_params = {};




let promise = Promise.all([
	fetchHelper(
		players_url,
		players_url_params,
		init,
	),
	fetchHelper(
		season_instances_url,
		season_instances_url_params,
		init,
	),
	fetchHelper(
		league_instances_url,
		league_instances_url_params,
		init,
	),
	fetchHelper(
		conference_instances_url,
		conference_instances_url_params,
		init,
	),
	fetchHelper(
		division_instances_url,
		division_instances_url_params,
		init,
	),
	fetchHelper(
		team_instances_url,
		team_instances_url_params,
		init,
	),
	fetchHelper(
		program_instances_url,
		program_instances_url_params,
		init,
	),
	fetchHelper(
		camp_instances_url,
		camp_instances_url_params,
		init,
	),
]);


</script>


<style>

</style>


{#await promise}

<Loading />

{:then data}

<Hero title={'Create Registration'} />

<Route {currentRoute} params={{
	...params,
	...{'players': data[0]},
	...{'season_instances': data[1]},
	...{'league_instances': data[2]},
	...{'conference_instances': data[3]},
	...{'division_instances': data[4]},
	...{'team_instances': data[5]},
	...{'program_instances': data[6]},
	...{'camp_instances': data[7]},
}} />

{:catch error}

<ErrorSection {error} />

{/await}





