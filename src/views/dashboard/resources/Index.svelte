<script>
export let currentRoute;


import MsgCard from 'components/elements/MsgCard.svelte';

import { Navigate } from 'svelte-router-spa';


const resources = [
	{
		id: 'adult_reps',
		name: 'Adult Reps',
	},
	{
		id: 'coaches',
		name: 'Coaches',
	},
	{
		id: 'guardians',
		name: 'Guardians',
	},
	{
		id: 'players',
		name: 'Players',
	},
	// --
	{
		id: 'camp_instances',
		name: 'Camps',
	},
	{
		id: 'program_instances',
		name: 'Programs',
	},
	{
		id: 'team_instances',
		name: 'Teams',
	},
	// --
	{
		id: 'camp_instance_registrations',
		name: 'Camp Registrations',
	},
	{
		id: 'program_instance_registrations',
		name: 'Program Registrations',
	},
	{
		id: 'team_instance_registrations',
		name: 'Team Registrations',
	},
	// 
]

</script>


<style>

</style>


<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Resources</span>
			</p>

		</div>

	</div>

</section>


<section class="section" style="padding-bottom: 1.5rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'View'} />

		<div class="columns is-variable is-mobile is-multiline is-centered">

			{#each resources as resource}

				<div class="column is-3-desktop is-4-tablet is-6-mobile">

					<Navigate styles='button is-medium is-fullwidth' to='/my/resources/{resource.id}'>
						<span>{resource.name}</span>
					</Navigate>

				</div>

			{/each}

		</div>

	</div>

</section>


<section class="section" style="padding-top: 1.5rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'Create'} />

		<div class="columns is-variable is-mobile is-multiline is-centered">

			{#each resources as resource}

				<div class="column is-3-desktop is-4-tablet is-6-mobile">

					<Navigate styles='button is-medium is-fullwidth' to='/my/resource/{resource.id}/create'>
						<span>{resource.name}</span>
					</Navigate>

				</div>

			{/each}

		</div>

	</div>

</section>
<br>




