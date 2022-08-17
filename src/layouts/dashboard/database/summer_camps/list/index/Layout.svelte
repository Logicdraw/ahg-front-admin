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



const camps_url = `${admin_api_url}/_database/_camps/_list/camps`;
const camps_url_params = {};



let promise = Promise.all([
	fetchHelper(
		camps_url,
		camps_url_params,
		init,
	),
]);


</script>


<style>

</style>


{#await promise}

<Loading />

{:then data}

<Hero title={'Summer Camps List'} />

<Route {currentRoute} params={{
	...params,
	...{'camps': data[0]},
}} />

{:catch error}

<ErrorSection {error} />

{/await}





