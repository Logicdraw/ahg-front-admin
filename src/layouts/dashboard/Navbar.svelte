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


</script>


<style>

#navbar {

}

</style>


<nav class="navbar is-fixed-top" id="navbar">

	<div class="container">

		<div class="navbar-brand">

			<Navigate to='/resources' styles='navbar-item'>
				<img src="/img/logo.png" style="width: 37px !important;">
				<span>AHG Admin</span>
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

					<div class="navbar-dropdown is-right" style="z-index: 10001;">

						<!-- <Navigate to='/resources/users' styles='navbar-item' on:click={closeActive}>
							<span>Users</span>
						</Navigate> -->

					</div>


				</div>



				<div class="navbar-item has-dropdown is-hoverable" style="z-index: 100;">


					<a class="navbar-link">
						<span>Create</span>
					</a>

					<div class="navbar-dropdown is-right" style="z-index: 10001;">

						<!-- <Navigate to='/resources/users/create' styles='navbar-item' on:click={closeActive}>
							<span>User</span>
						</Navigate> -->

					</div>


				</div>


				<Navigate styles="navbar-item" to="/logout" on:click={closeActive}>
					<span on:click={closeActive}>ACT Archive</span>
				</Navigate>


				<!-- resources dropdown! -->

			</div>

			<div class="navbar-end">

				<Navigate styles="navbar-item" to="/logout" on:click={closeActive}>
					<span on:click={closeActive}>Logout</span>
				</Navigate>

			</div>

		</div>

	</div>

</nav>


