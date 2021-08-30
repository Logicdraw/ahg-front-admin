<script>
export let currentRoute;
export let params;


import { Route } from 'svelte-router-spa';


import MsgCard from 'components/elements/MsgCard.svelte';
import Loading from 'components/elements/Loading.svelte';


import Form from 'components/forms/views/dashboard/resource/guardians/edit/Form.svelte';



import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;



let promise = getResourceRow();


async function getResourceRow() {

	const url = `${admin_api_url}/guardians/${currentRoute.namedParams.resource_row_id}`;

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
				<span>Edit Guardian</span>
			</p>

		</div>

	</div>

</section>

{#await promise}

<Loading />

{:then resource_row}

<section class="section">

	<div class="container">

		<div class="columns is-centered">

			<div class="column is-9-desktop is-12-tablet is-12-mobile">

				<div class="card form-card">

					<div class="card-content">

						<Form guardian={resource_row} />

					</div>

				</div>

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

