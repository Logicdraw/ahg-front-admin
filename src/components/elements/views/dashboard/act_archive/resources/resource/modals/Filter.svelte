<script>
export let filter_modal_is_active;


</script>


<style>


</style>


<div class="modal" class:is-active={filter_modal_is_active}>

	<div class="modal-background"></div>

	<div class="modal-card">

		<div class="modal-card-head">

		</div>

		<div class="modal-card-body">

			<!-- ... -->

		</div>

	</div>

	<div class="modal-close is-large" on:click={() => filter_modal_is_active = false}></div>

</div>

