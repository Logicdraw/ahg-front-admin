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



const season_instances_url = `${admin_api_url}/_database/_spring_hockey/_jersey_sponsors/_finances_teams/season-instances`;
const season_instances_url_params = {};


const league_instances_url = `${admin_api_url}/_database/_spring_hockey/_jersey_sponsors/_finances_teams/league-instances`;
const league_instances_url_params = {};


const conference_instances_url = `${admin_api_url}/_database/_spring_hockey/_jersey_sponsors/_finances_teams/conference-instances`;
const conference_instances_url_params = {};


const division_instances_url = `${admin_api_url}/_database/_spring_hockey/_jersey_sponsors/_finances_teams/division-instances`;
const division_instances_url_params = {};


const team_instances_url = `${admin_api_url}/_database/_spring_hockey/_jersey_sponsors/_finances_teams/team-instances`;
const team_instances_url_params = {};



let promise = Promise.all([
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
]);


</script>


<style>

</style>


{#await promise}

<Loading />

{:then data}

<Hero title={'Spring Hockey Jersey Sponsors Team Finances'} />

<Route {currentRoute} params={{
	...params,
	...{'season_instances': data[0]},
	...{'league_instances': data[1]},
	...{'conference_instances': data[2]},
	...{'division_instances': data[3]},
	...{'team_instances': data[4]},
}} />

{:catch error}

<ErrorSection {error} />

{/await}





