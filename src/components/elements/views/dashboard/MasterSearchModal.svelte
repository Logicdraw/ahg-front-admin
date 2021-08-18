<script>
export let is_active;


import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';

import MasterSearchResult from 'components/elements/views/dashboard/MasterSearchResult.svelte'



import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


let loading = false;

let search_results = [];


let abort_controller = new AbortController();

async function search(q) {

	abort_controller.abort();

	abort_controller = new AbortController();

	q = q.trim();

	if (q === '') {
		search_results = [];
		return;
	}


	const url = `${admin_api_url}/resources/master-search?q=${q}`;

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

	// clean q ?

}



let q = '';

$: search(q);

</script>


<style>
	
</style>


<div class="modal" class:is-active={is_active}>

	<div class="modal-background"></div>

	<div class="modal-card">

		<div class="modal-card-body">

			<div class="field is-grouped">

				<div class="control is-expanded has-icons-right">

					<input class="input" placeholder="Search" bind:value={q}>

					<span class="icon is-right">
						<i class="fas fa-search"></i>
					</span>

				</div>

			</div>

			<MsgCard msg_text={'This does not search the ACT database!'} />

			{#if q.trim() === ''}

			<MsgCard msg_text={'Make a search!'} />

			{:else}

				{#if !search_results}
				<MsgCard msg_text={'No results found!'} />
				{/if}

				{#each search_results as search_result}
					<MasterSearchResult {search_result} />
				{/each}

			{/if}


		</div>

	</div>

</div>

