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




// let promise = Promise.all([

// ]);


</script>


<style>

</style>


<!-- {#await promise}

<Loading />

{:then data} -->

<Hero title={'Registrations List'} />

<Route {currentRoute} params={{
	...params,
}} />

<!-- {:catch error}

<ErrorSection {error} />

{/await} -->





