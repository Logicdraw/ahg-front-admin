<script>
export let currentRoute;


import { resources_info } from 'utils/resources.js';

const resource_info = resources_info[currentRoute.namedParams.resource_id];


import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';

const Form = import(`components/forms/views/dashboard/resource/${resource_info.id}/edit/Form.svelte`);

const Tabs = import(`components/forms/views/dashboard/resource/${resource_info.id}/edit/Tabs.svelte`);


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


let abort_controller = new AbortController();


async function getRow() {

	const url = `${admin_api_url}/resources/${resource_info.id}/${currentRoute.namedParams.resource_row_id}`;

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




let promise_funcs = [
	getRow(),
];


const promise = Promise.all(promise_funcs);




let msg_show = false;
let msg_type;
let msg_text;

</script>


<style>

</style>



<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Edit {resource_info.name_singular}</span>
			</p>

		</div>

	</div>

</section>


<section class="section skinny-section">

	<div class="container is-fullwidth">

		<Tabs resource_id={currentRoute.namedParams.resource_id} />

	</div>

</section>


{#await promise}

<Loading />

{:then results}

<section class="section skinny-section">

	<div class="container">

		<div class="columns is-centered">

			<div class="column is-9-desktop is-12-tablet is-12-mobile">

				<MsgCard bind:msg_show={msg_show} bind:msg_type={msg_type} bind:msg_text={msg_text} />

				<div class="card form-card">

					<div class="card-content">

						<Form bind:msg_show={msg_show} bind:msg_type={msg_type} bind:msg_text={msg_text} resource={results[0]} resource_id={resource_info.id} />

					</div>

				</div>

			</div>

		</div>

	</div>

</section>

{:catch error}

<section class="section skinny-section" style="padding-top: 0.25rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={error.detail} />

	</div>

</section>

{/await}



