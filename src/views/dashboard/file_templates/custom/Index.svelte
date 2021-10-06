<script>
export let currentRoute;


import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';
// import Form from 'components/forms/views/dashboard/settings/Form.svelte';

import Filter from 'components/elements/views/dashboard/file_templates/created/Filter.svelte';

import SvelteSeo from 'svelte-seo';


import { cleanParams } from 'utils/_random.js';



let msg_show = false;
let msg_type;
let msg_text;


import { auth } from 'store/index.js';


import { get } from 'svelte/store';



const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


let abort_controller = new AbortController();

async function getCreatedFileTemplates(params) {

	abort_controller.abort();

	abort_controller = new AbortController();

	let cleaned_params = cleanParams(params);

	let params_string = new URLSearchParams(cleaned_params).toString();

	const url = `${admin_api_url}/files/templates?${params_string}`;

	try {

		const resp = await fetch(url, {
			method: 'GET',
			signal: abort_controller.signal,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const result = await resp.json();

		if (!resp.ok) {
			throw new Error(result);
		}

		return result;

	} catch(err) {

		if (err.name === 'AbortError') {
			return;
		}

		throw err;

	} finally {

	}

}




let params = {
	q: '',
	offset: 0,
}

$: promise = getCreatedFileTemplates(params);

</script>


<style>

</style>



<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Created File Templates</span>
			</p>

		</div>

	</div>

</section>


<section class="section skinny-section">

	<div class="container is-fullwidth">

		<Filter bind:params={params} />

	</div>

</section>


{#await promise}

<Loading />

{:then file_templates}

<section class="section skinny-section">
	
	<div class="container is-fullwidth">

		<!-- ... -->

	</div>

</section>

{:catch error}

<section class="section skinny-section" style="padding-top: 0.25rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={error.detail} />

	</div>

</section>

{/await}



