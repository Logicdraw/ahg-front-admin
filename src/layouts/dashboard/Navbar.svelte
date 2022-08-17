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


import { resources_info } from 'utils/resources.js';

import { act_resources_info } from 'utils/act_resources.js';



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

						{#each resources_info as resource}

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

						{#each resources_info as resource}

							{#if resource.has_create_form}
							<Navigate to='/my/resource/create/{resource.id}' styles='navbar-item' on:click={closeActive}>
								<span>{resource.name_singular}</span>
							</Navigate>
							{/if}

						{/each}

					</div>


				</div>


				<div class="navbar-item has-dropdown is-hoverable" style="z-index: 100;">


					<a class="navbar-link">
						<span>ACT Archive</span>
					</a>

					<div class="navbar-dropdown is-right--" style="z-index: 10001;">

						{#each act_resources_info as resource}

							<Navigate to='/my/act/resources/resource/{resource.id}' styles='navbar-item' on:click={closeActive}>
								<span>{resource.name}</span>
							</Navigate>

						{/each}

						<Navigate to='/my/act/resources/master-search' styles='navbar-item' on:click={closeActive}>
							<span>Master Search</span>
						</Navigate>

					</div>


				</div>




				<!-- <div class="navbar-item has-dropdown is-hoverable" style="z-index: 100;">


					<a class="navbar-link">
						<span>Files</span>
					</a>

					<div class="navbar-dropdown is-right--" style="z-index: 10001;">

						<Navigate to='/my/file_templates' styles='navbar-item' on:click={closeActive}>
							<span>View</span>
						</Navigate>

						<Navigate to='/my/file_template/create' styles='navbar-item' on:click={closeActive}>
							<span>Create</span>
						</Navigate>

					</div>


				</div> -->


				<Navigate styles="navbar-item" to="/my/forms" on:click={closeActive}>
					<span on:click={closeActive}>Forms</span>
				</Navigate>


				<div class="navbar-item has-dropdown is-hoverable" style="z-index: 100;">


					<a class="navbar-link">
						<span>Other</span>
					</a>

					<div class="navbar-dropdown is-right--" style="z-index: 10001;">

						<Navigate styles="navbar-item" to="/my/resources/master-search" on:click={closeActive}>
							<span>Master Search</span>
						</Navigate>

						<Navigate styles="navbar-item" to="/my/logins" on:click={closeActive}>
							<span>Logins Helpers</span>
						</Navigate>

						<Navigate to='/my/spring_hockey' styles='navbar-item' on:click={closeActive}>
							<span>Spring Hockey Helpers</span>
						</Navigate>

						<Navigate to='/my/adult_hockey' styles='navbar-item' on:click={closeActive}>
							<span>Adult Hockey Helpers</span>
						</Navigate>

						<Navigate to='/my/spng' styles='navbar-item' on:click={closeActive}>
							<span>SportsEngine Helpers</span>
						</Navigate>

						<Navigate to='/my/gs' styles='navbar-item' on:click={closeActive}>
							<span>GameSheet Helpers</span>
						</Navigate>

						<Navigate to='/my/alerts' styles='navbar-item' on:click={closeActive}>
							<span>Alerts Helpers</span>
						</Navigate>

						<Navigate to='/my/meeting_sheets' styles='navbar-item' on:click={closeActive}>
							<span>Meeting Sheets</span>
						</Navigate>

						<Navigate to='/my/loyalty' styles='navbar-item' on:click={closeActive}>
							<span>Loyalty Helpers</span>
						</Navigate>

						<Navigate to='/my/streams' styles='navbar-item' on:click={closeActive}>
							<span>Streams</span>
						</Navigate>

					</div>


				</div>


				<div class="navbar-item has-dropdown is-hoverable" style="z-index: 100;">


					<a class="navbar-link">
						<span>Portals</span>
					</a>

					<div class="navbar-dropdown is-right--" style="z-index: 10001;">

						<a href="https://coach.ahg.software" target="_blank" rel="noopener" class="navbar-item">
							<span>Coach Portal</span>
						</a>

						<a href="https://adult-rep.ahg.software" target="_blank" rel="noopener" class="navbar-item">
							<span>Adult Rep Portal</span>
						</a>

						<a href="https://orders.ahg.software" target="_blank" rel="noopener" class="navbar-item">
							<span>Orders Portal</span>
						</a>

						<a href="https://forms.ahg.software" target="_blank" rel="noopener" class="navbar-item">
							<span>Forms Portal</span>
						</a>

						<a href="https://accounting.ahg.software" target="_blank" rel="noopener" class="navbar-item">
							<span>Accounting Portal</span>
						</a>

						<a href="https://schedules.ahg.software" target="_blank" rel="noopener" class="navbar-item">
							<span>Schedules Portal</span>
						</a>


					</div>


				</div>




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


