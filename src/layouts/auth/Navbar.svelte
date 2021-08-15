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

			<Navigate to='/login' styles='navbar-item'>
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


				<!-- resources dropdown! -->

			</div>

			<div class="navbar-end">

				<Navigate styles="navbar-item" to="/login" on:click={closeActive}>
					<span on:click={closeActive}>Login</span>
				</Navigate>

			</div>

		</div>

	</div>

</nav>


