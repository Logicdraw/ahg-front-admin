<script>
export let currentRoute;
export let params;


import MsgCard from 'components/elements/MsgCard.svelte';

import { Navigate } from 'svelte-router-spa';



const resources = [
	{
		name: 'ACT Archive: Coaches',
		to: '/my/act_archive/coaches',
	},
	{
		name: 'ACT Archive: Hockey School Registrations',
		to: '/my/act_archive/hockey_school_registrations',
	},
	{
		name: 'ACT Archive: Spring Hockey Registrations',
		to: '/my/act_archive/spring_hockey_registrations',
	},
];



</script>


<style>

</style>



<section class="section skinny-section" style="padding-bottom: 1.5rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'Helpers:'} />

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




