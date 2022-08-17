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



const adult_commishes_logins_url = `${admin_api_url}/_other/_logins/adult-commishes`;
const adult_commishes_logins_url_params = {
	order_by_label: 'email',
	order_by_dir: 'asc',
};


const season_instances_url = `${admin_api_url}/_other/_login/_adult_commish/season-instances`;
const season_instances_url_params = {
	order_by_label: 'seasons_sc.name',
	order_by_dir: 'asc',
};


const league_instances_url = `${admin_api_url}/_other/_login/_adult_commish/league-instances`;
const league_instances_url_params = {
	order_by_label: 'leagues_sc.name',
	order_by_dir: 'asc',
};





let promise = Promise.all([
	fetchHelper(
		adult_commishes_logins_url,
		adult_commishes_logins_url_params,
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


<Route {currentRoute} params={{
	...params,
	...{'adult_commishes_logins': data[0]},
	...{'season_instances': data[1]},
	...{'league_instances': data[2]},
}} />

{:catch error}

<ErrorSection {error} />

{/await}




