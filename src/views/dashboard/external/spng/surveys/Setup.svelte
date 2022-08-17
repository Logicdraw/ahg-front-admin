<script>
export let currentRoute;
export let params;

import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';

// modals

import Form from 'components/forms/views/dashboard/other/spng/surveys/setup/create/Form.svelte';


async function getSpngSurveyQuestionElements() {

	const url = `${admin_api_url}/_other/_spng/_surveys/surveys`;

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



let promise = getSpngSurveyQuestionElements();


</script>


<style>

</style>



<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Setup SportsEngine Form Integration</span>
			</p>

		</div>

	</div>
	
</section>


{#await promise}

<Loading />

{:then spng_survey_question_elements}

<section class="section skinny-section">

	<div class="container is-fullwidth">

		<div class="columns is-centered is-variable">

			<div class="column is-6-desktop is-9-tablet is-12-mobile">

				<!-- form with card! -->
				<div class="card form-card">

					<div class="card-content">

						<Form {spng_survey_question_elements} />

					</div>

				</div>

			</div>

		</div>

	</div>

</section>

{:catch error}

<section class="section skinny-section">

	<div class="container">

		<MsgCard msg_show={true} msg_text={'Error viewing data!'} msg_type={'error'} msg_forever={true} />

	</div>

</section>

{/await}




