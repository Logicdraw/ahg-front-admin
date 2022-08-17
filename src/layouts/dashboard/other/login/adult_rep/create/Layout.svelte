<script>
export let currentRoute;
export let params;


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



const adult_reps_logins_url = `${admin_api_url}/_other/_logins/adult-reps`;
const adult_reps_logins_url_params = {
	order_by_label: '',
	order_dir: 'asc',
};


const season_instances_url = `${admin_api_url}/_other/_adult_rep/season-instances`;
const season_instances_url_params = {
	order_by_label: 'seasons_sc.name',
	order_by_dir: 'asc',
};


const league_instances_url = `${admin_api_url}/_other/_adult_rep/league-instances`;
const league_instances_url_params = {
	order_by_label: 'season_instance_id, leagues_sc.name',
	order_by_dir: 'asc',
};


const conference_instances_url = `${admin_api_url}/_other/_adult_rep/conference-instances`;
const conference_instances_url_params = {
	order_by_label: 'league_instance_id, leagues_sc.name',
	order_by_dir: 'asc',
};


const division_instances_url = `${admin_api_url}/_other/_adult_rep/division-instances`;
const division_instances_url_params = {
	order_by_label: 'conference_instance_id, league_instance_id, divisions_sc.name',
	order_by_dir: 'asc',
};


const team_instances_url = `${admin_api_url}/_other/_adult_rep/team-instances`;
const team_instances_url_params = {
	order_by_label: 'division_instance_id, teams_sc.name',
	order_by_dir: 'asc',
};



let promise = Promise.all([
	fetchHelper(
		adult_reps_logins_url,
		adult_reps_logins_url_params,
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
				<span>Create Adult Rep Login</span>
			</p>

		</div>

	</div>

</section>


<Route {currentRoute} {params} />

{:catch error}

<section class="section skinny-section">

	<div class="container">

		<MsgCard msg_show={true} msg_text={'Error viewing data!'} msg_type={'error'} msg_forever={true} />

	</div>

</section>

{/await}




