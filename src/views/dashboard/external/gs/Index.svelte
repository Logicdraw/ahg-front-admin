<script>
export let currentRoute;
export let params;

import MsgCard from 'components/elements/MsgCard.svelte';

import { Navigate } from 'svelte-router-spa';


// import { resources_info } from 'utils/resources.js';

// const buttons = [];

const resources = [
	// {
	// 	name: 'Adult Hockey Teams Finances',
	// 	to: '/my/adult_hockey/finances_teams',
	// },
	// {
	// 	name: 'Adult Hockey Free Agents',
	// 	to: '/my/adult_hockey/free_agents',
	// },
	// {
	// 	name: 'Adult Hockey Payments',
	// 	to: '/my/adult_hockey/payments',
	// },
	// {
	// 	name: 'Adult Hockey Reps',
	// 	to: '/my/adult_hockey/reps',
	// },
];


</script>


<style>

</style>



<section class="section" style="padding-bottom: 1.5rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'...'} />

		<div class="columns is-variable is-mobile is-multiline is-centered">

			<!-- {#each resources_info as resource}

				<div class="column is-4-desktop is-4-tablet is-6-mobile">

					<Navigate styles='button is-medium is-fullwidth' to='/my/resources/resource/{resource.id}'>
						<span>{resource.name}</span>
					</Navigate>

				</div>

			{/each} -->

		</div>

	</div>

</section>





