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



// const programs_url = `${admin_api_url}/_database/_programs/_coaches/programs`;
// const programs_url_params = {};


// const program_instances_url = `${admin_api_url}/_database/_programs/_coaches/program-instances`;
// const program_instances_url_params = {};



// let promise = Promise.all([
// 	fetchHelper(
// 		programs_url,
// 		programs_url_params,
// 		init,
// 	),
// 	fetchHelper(
// 		program_instances_url,
// 		program_instances_url_params,
// 		init,
// 	),
// ]);


</script>


<style>

</style>


<!-- {#await promise}

<Loading />

{:then data} -->

<Hero title={'Guardians List'} />

<Route {currentRoute} params={{
	...params,
}} />

<!-- {:catch error}

<ErrorSection {error} />

{/await} -->





