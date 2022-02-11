<script>
export let currentRoute;
// export let params;


import Navbar from 'layouts/dashboard/Navbar.svelte';

import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';


import { auth } from 'store/index.js';


import { Route, navigateTo } from 'svelte-router-spa';
import { onMount } from 'svelte';
import { get } from 'svelte/store';


const auth_api_url = app_.env.AUTH_API_URL;
const token = get(auth).token;


const params = {};



let loading = true;



const retries_503 = 1;

async function testAccessToken(token) {

	const test_token_url = `${auth_api_url}/_login/test-token/admin`;

	let resp = await fetch(test_token_url, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	// Retry.
	if (resp.status === 503) {
		for (let i = 0; i < retries_503; i++) {
			// sleep to give server more time...
			await new Promise(r => setTimeout(r, 5000));
			resp = await fetch(test_token_url, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
		}
	}

	return resp;
}



// $: currentRoute ... (on page change)

testAccessToken(token).then(data => {
	if (!data.ok) throw new Error('Could not login!');
	return data.json();
}).then(result => {
	auth.update(state => {
		state.email = result.email;
		state.full_name = result.full_name;
		return state;
	});
	return;
}).catch(err => {
	auth.set({token: null});
	navigateTo('/login');
}).finally(() => {
	loading = false;
});


</script>



<style>

#dashboard-layout {
	margin-top: var(--navbar-height);
}

</style>


<!-- Loading... -->
{#if loading}
<Loading is_fullheight={true} />
{:else}
<Navbar />
<div id="dashboard-layout" class="layout">
	<Route {currentRoute} {params} />
</div>
{/if}



