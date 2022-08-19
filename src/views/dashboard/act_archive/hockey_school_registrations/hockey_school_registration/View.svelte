<script>
export let currentRoute;
export let params;

import MsgCard from 'components/elements/MsgCard.svelte';
import Loading from 'components/elements/Loading.svelte';


import ViewForm from 'components/forms/views/dashboard/act/resource/hockey_school_registrations/view/Form.svelte';

import CreatedUpdated from 'components/elements/views/dashboard/act/resource/CreatedUpdated.svelte';

// Form

import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';

const act_api_url = app_.env.ACT_API_URL;

const token = get(auth).token;



let promise = getACTResourceRow();


async function getACTResourceRow() {

	const url = `${act_api_url}/resources/hockey-school-registrations/${currentRoute.namedParams.act_resource_row_id}`;

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
				<span>ACT Archive: View Hockey School Registration</span>
			</p>

		</div>

	</div>

</section>


{#await promise}

<Loading />

{:then act_resource_row}

<section class="section">

	<div class="container">

		<div class="columns is-centered">

			<div class="column is-9-desktop is-12-tablet is-12-mobile">

				<CreatedUpdated row={act_resource_row} />

				<MsgCard msg_forever={true} msg_show={true} msg_type={'error'} msg_text={'This is readonly!'} />

				<div class="card form-card">

					<div class="card-content">

						<ViewForm hockey_school_registration={act_resource_row} />

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






