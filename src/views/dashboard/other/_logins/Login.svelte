<script>
export let currentRoute;

import { logins_info } from 'utils/logins.js';


import { cleanParams } from 'utils/_random.js';


let login_info = logins_info.find(lo => lo.id === currentRoute.namedParams.login_id);

$: if (currentRoute) login_info = logins_info.find(lo => lo.id === currentRoute.namedParams.login_id);



$: columns = login_info.default_columns;

$: id_key = login_info.id_key;



import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';
import Tabs from 'components/elements/views/dashboard/other/logins/login/Tabs.svelte';

import Table from 'components/elements/views/dashboard/other/logins/login/Tabs.svelte';
import Filter from 'components/elements/views/dashboard/other/logins/login/Filter.svelte';


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


let at_last_page = false;


let abort_controller = new AbortController();

async function getRows(url_params) {

	abort_controller.abort();

	abort_controller = new AbortController();

	let cleaned_params = cleanParams(url_params);

	let params_string = new URLSearchParams(cleaned_params).toString();


	const url = `${admin_api_url}/_other/_logins/${login_info.url}?${params_string}`;

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

		at_last_page = (!result.length);

		return result;

	} catch(err) {

		if (err.name === 'AbortError') {
			return;
		}

		throw err;

	} finally {

	}

}


const default_url_params = {
	q: '',
	offset: 0,
	limit: 50,
}

let url_params = default_url_params;


function resetParams(login_id) {
	url_params = default_url_params;
}



$: resetParams(currentRoute.namedParams.login_id);

$: promise = getRows(url_params);


</script>



<style>

</style>


<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>{login_info.name}</span>
			</p>

		</div>

	</div>

</section>


<section class="section skinny-section" style="padding-bottom: 0 !important;">

	<div class="container is-fullwidth">

		<Tabs {url_params} login_id={login_info['id']} login_has_create_form={login_info['has_create_form']} />

	</div>

</section>


<section class="section skinny-section">

	<div class="container is-fullwidth">

		<Filter bind:url_params {at_last_page} />

	</div>

</section>



{#await promise}

<Loading />

{:then rows}

<section class="section skinny-section" style="padding-top: 0.25rem !important;">

	<div class="container is-fullwidth">

		{#if rows.length === 0}

			<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No rows found!'} />

		{:else}

			<Table {rows} {columns} login_id={currentRoute.namedParams.login_id} id_key={id_key} />

		{/if}

	</div>

</section>

{:catch error}

<section class="section skinny-section" style="padding-top: 0.25rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={error.detail} />

	</div>

</section>

{/await}





