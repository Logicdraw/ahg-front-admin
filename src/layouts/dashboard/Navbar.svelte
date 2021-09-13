<script>

import { Navigate } from 'svelte-router-spa';


let active = false;


function changeActive() {
	active = !active;
}

function closeActive() {
	active = false;
}

function openActive() {
	active = true;
}


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


const act_resources = [
	{
		id: 'camp_registrations',
		name: 'Camp Registrations',
	},
	{
		id: 'coach_registrations',
		name: 'Coach Registrations',
	},
	{
		id: 'team_registrations',
		name: 'Team Registrations',
	},
]


</script>


<style>

#navbar {

}

</style>


<nav class="navbar is-fixed-top" id="navbar">

	<div class="container">

		<div class="navbar-brand">

			<Navigate to='/my/resources' styles='navbar-item'>
				<img src="/img/logo.png" style="width: 37px !important;">
				<span>AHG Database</span>
			</Navigate>

			<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-items" on:click={changeActive} class:is-active={active}>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>

		</div>

		<div class="navbar-menu" id="navbar-items" class:is-active={active}>

			<div class="navbar-start">



				<div class="navbar-item has-dropdown is-hoverable" style="z-index: 100;">


					<a class="navbar-link">
						<span>View</span>
					</a>

					<div class="navbar-dropdown is-right--" style="z-index: 10001;">

						{#each resources as resource}

							<Navigate to='/my/resources/resource/{resource.id}' styles='navbar-item' on:click={closeActive}>
								<span>{resource.name}</span>
							</Navigate>

						{/each}

					</div>


				</div>



				<div class="navbar-item has-dropdown is-hoverable" style="z-index: 100;">


					<a class="navbar-link">
						<span>Create</span>
					</a>

					<div class="navbar-dropdown is-right--" style="z-index: 10001;">

						{#each resources as resource}

							<Navigate to='/my/resource/create/{resource.id}' styles='navbar-item' on:click={closeActive}>
								<span>{resource.name}</span>
							</Navigate>

						{/each}

					</div>


				</div>


				<div class="navbar-item has-dropdown is-hoverable" style="z-index: 100;">


					<a class="navbar-link">
						<span>ACT Archive</span>
					</a>

					<div class="navbar-dropdown is-right--" style="z-index: 10001;">

						{#each act_resources as resource}

							<Navigate to='/my/act/resources/resource/{resource.id}' styles='navbar-item' on:click={closeActive}>
								<span>{resource.name}</span>
							</Navigate>

						{/each}

					</div>


				</div>




				<div class="navbar-item has-dropdown is-hoverable" style="z-index: 100;">


					<a class="navbar-link">
						<span>File Templates</span>
					</a>

					<div class="navbar-dropdown is-right--" style="z-index: 10001;">

						<Navigate to='/my/file_templates' styles='navbar-item' on:click={closeActive}>
							<span>View</span>
						</Navigate>

						<Navigate to='/my/file_template/create' styles='navbar-item' on:click={closeActive}>
							<span>Create</span>
						</Navigate>

					</div>


				</div>


				<div class="navbar-item has-dropdown is-hoverable" style="z-index: 100;">


					<a class="navbar-link">
						<span>Other</span>
					</a>

					<div class="navbar-dropdown is-right--" style="z-index: 10001;">

						<Navigate to='/my/spng' styles='navbar-item' on:click={closeActive}>
							<span>SportsEngine Helpers</span>
						</Navigate>

						<Navigate to='/my/gs' styles='navbar-item' on:click={closeActive}>
							<span>GameSheet Helpers</span>
						</Navigate>

					</div>


				</div>


				<!--  -->


				<Navigate styles="navbar-item" to="/my/resources/master-search" on:click={closeActive}>
					<span on:click={closeActive}>Master Search</span>
				</Navigate>


				<!-- resources dropdown! -->

			</div>

			<div class="navbar-end">

				<!-- <Navigate styles="navbar-item" to="/my/settings" on:click={closeActive}>
					<span on:click={closeActive}>Settings</span>
				</Navigate> -->

				<Navigate styles="navbar-item" to="/logout" on:click={closeActive}>
					<span on:click={closeActive}>Logout</span>
				</Navigate>

			</div>

		</div>

	</div>

</nav>


