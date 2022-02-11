<script>
export let currentRoute;
export let params;

import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';


// modals - with 
// tabs ...


import { Navigate } from 'svelte-router-spa';


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


import { cleanParams } from 'utils/_random.js';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


async function getAdultRepLogin() {

	const url = `${admin_api_url}/_other/_login/coach/${currentRoute.namedParams.login_id}`;

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


let promise = getAdultCommishLogin();


</script>


<style>

</style>



{#await promise}

<Loading />

{:then coach_login}

<section class="section skinny-section">

	<div class="container">

		<div class="columns is-centered">

			<div class="column is-9-desktop is-12-tablet is-12-mobile">

				<!-- MSGCArd... -->

				<div class="card form-card">

					<div class="card-content">

						<Form {coach_login} />

					</div>

				</div>

			</div>

		</div>

		<!-- ... -->
		<!-- Form (with Card) -->

	</div>

</section>

{:catch error}

<section class="section skinny-section">

	<div class="container">

		<MsgCard msg_show={true} msg_text={'Error viewing data!'} msg_type={'error'} msg_forever={true} />

	</div>

</section>

{/await}

