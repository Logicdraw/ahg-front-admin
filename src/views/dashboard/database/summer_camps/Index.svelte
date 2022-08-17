<script>
export let currentRoute;

// import { logins_info } from 'utils/logins.js';


import { Navigate } from 'svelte-router-spa';


import MsgCard from 'components/elements/MsgCard.svelte';


const resources = [
	{
		name: 'Coaches',
		to: '/my/camps/coaches',
	},
];


</script>



<style>

</style>


<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Camps Helpers</span>
			</p>

		</div>

	</div>

</section>


<section class="section skinny-section" style="padding-bottom: 1.5rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'Views:'} />

		<div class="columns is-variable is-mobile is-multiline is-centered">

			{#each resources as resource}

				<div class="column is-4-desktop is-4-tablet is-6-mobile">

					<Navigate styles='button is-medium is-fullwidth' to='{resource.to}'>
						<span>{resource.name}</span>
					</Navigate>

				</div>

			{/each}

		</div>

	</div>

</section>



