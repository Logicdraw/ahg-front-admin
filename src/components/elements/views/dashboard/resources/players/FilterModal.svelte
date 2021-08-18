<script>
export let params;
export let is_active;



// columns --

// $: {

// };

</script>


<style>

</style>



<div class="modal" class:is-active={is_active}>

	<div class="modal-background"></div>

	<div class="modal-card">

		<div class="modal-card-body">

			

			<!-- date_of_birth_range -->

			<!-- date_of_birth -->

			<!-- filters -->

			<!-- filters -->

			<!-- filter -->


			<!-- apply filters button -->

		</div>

	</div>

	<div class="modal-close is-large" on:click={() => is_active = false}></div>

</div>
