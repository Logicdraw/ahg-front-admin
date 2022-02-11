<script>
export let currentRoute;
export let params;

import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';



async function getSpngSurvey() {

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


let promise = getSpngSurvey();


</script>


<style>

</style>


<!-- MsgCard with integrations -->


{#await promise}

<Loading />

{:then spng_survey}

<section class="section skinny-section">

	<div class="container is-fullwidth">

		<!-- ... -->
		<!-- form -->
		<Form />

	</div>

</section>

{:catch error}

<section class="section skinny-section">

	<div class="container">

		<MsgCard msg_show={true} msg_text={'Error viewing data!'} msg_type={'error'} msg_forever={true} />

	</div>

</section>

{/await}


<!-- msg card -->





