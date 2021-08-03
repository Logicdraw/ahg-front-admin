<script>
export let currentRoute;


import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';



const old_act_api_url = app_.env.OLD_ACT_API_URL;

const token = get(auth).token;


let params = {
	page: 1,
}


let promise = getRows(params);

async function getRows(params) {

	const url = `${}/resources/coaches`;

	const resp = await fetch(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const result = await resp.json();

	if (!resp.ok) {
		throw new Error(result);
	}

}


$: promise = getRows(params);


</script>


<style>

</style>



<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				Players
			</p>

		</div>

	</div>

</section>



<section class="section">

	<div class="container is-fullwidth">

		<Filter bind:params={params} />

	</div>

</section>


{#await promise}

<Loading />

{:then rows}

<section class="section">

	<div class="container is-fullwidth">

		{#if players.length === 0}

			<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'No rows found!'} />

		{:else}


		{/if}

	</div>

</section>

{:catch error}


{/await}




