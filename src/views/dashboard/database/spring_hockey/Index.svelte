<script>
export let currentRoute;
export let params;


import MsgCard from 'components/elements/MsgCard.svelte';

import { Navigate } from 'svelte-router-spa';


// import { resources_info } from 'utils/resources.js';

const resources = [
	{
		name: 'Spring Hockey Coaches',
		to: '/my/spring_hockey/coaches',
	},
	{
		name: 'Spring Hockey Finances',
		to: '/my/spring_hockey/finances',
	},
	{
		name: 'Spring Hockey Free Agents',
		to: '/my/spring_hockey/free_agents',
	},
	{
		name: 'Spring Hockey IRPs',
		to: '/my/spring_hockey/irps',
	},
	{
		name: 'Spring Hockey Jersey Sponsors',
		to: '/my/spring_hockey/jersey_sponsors',
	},
	{
		name: 'Spring Hockey Teams',
		to: '/my/spring_hockey/teams',
	},
];



</script>


<style>

</style>


<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Spring Hockey Helpers</span>
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




