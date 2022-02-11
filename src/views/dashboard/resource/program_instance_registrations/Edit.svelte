<script>
export let currentRoute;
export let params;


import { Route } from 'svelte-router-spa';


import MsgCard from 'components/elements/MsgCard.svelte';
import Loading from 'components/elements/Loading.svelte';


import Form from 'components/forms/views/dashboard/resource/program_instance_registrations/edit/Form.svelte';

import CreatedUpdated from 'components/elements/views/dashboard/resource/CreatedUpdated.svelte';


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;



let promise = getProgramInstanceRegistration();


async function getProgramInstanceRegistration() {

	const url = `${admin_api_url}/program-instance-registrations/${currentRoute.namedParams.program_instance_registration_id}`;

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


{#await promise}

<Loading />

{:then program_instance_registration}

<section class="section skinny-section">

	<div class="container">

		<div class="columns is-centered">

			<div class="column is-9-desktop is-12-tablet is-12-mobile">

				{#if program_instance_registration.spng_survey_result_id}
					<MsgCard msg_type={'error'} msg_show={true} msg_text={`<a href="https://ahgcentral.sportngin.com/survey_result/show/${program_instance_registration.spng_survey_result_id}" target="_blank" class="link" rel="noopener">View registration on SportsEngine!</a>`} msg_forever={true} />
				{/if}

				<CreatedUpdated row={program_instance_registration} />

				<div class="card form-card">

					<div class="card-content">

						<Form {program_instance_registration} />

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

