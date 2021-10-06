<!-- Should just be a modal! -->

<script>
export let currentRoute;
export let params;


import { Route } from 'svelte-router-spa';


import MsgCard from 'components/elements/MsgCard.svelte';
import Loading from 'components/elements/Loading.svelte';

// ---

import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


let promise = getCreatedDownloadHistory();


async function getCreatedDownloadHistory() {

	const url = `${admin_api_url}/`;

	const resp = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});


	const result = await resp.json();

	if (!resp.ok) {
		throw new Error(result);
	}

	return result;

}



</script>


<style>

</style>



<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>File Template Download History</span>
			</p>

		</div>

	</div>

</section>


{#await promise}

<Loading />

{:then download_history_items}

<section class="section skinny-section">

	<div class="container is-fullwidth">

		<div class="columns is-centered">

			<div class="column is-9-desktop is-12-tablet is-12-mobile">

				{#each download_history_items as download_history_item}
					<!-- {download_history_item} -->
					<!-- ... -->
				{/each}

			</div>

		</div>

	</div>

</section>

{:catch error}

<section class="section skinny-section">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={error.detail} />

	</div>

</section>

{/await}



