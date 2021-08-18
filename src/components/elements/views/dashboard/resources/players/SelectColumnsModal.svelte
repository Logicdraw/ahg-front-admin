<script>
export let is_active;

</script>



<style>

</style>


<div class="modal" class:is-active={is_active}>

	<div class="modal-background"></div>

	<div class="modal-card">

		<div class="modal-card-body">

			<div class="select is-multiple is-fullwidth">
				<select multiple size="10">
					<option value="Argentina">Argentina</option>
					<option value="Bolivia">Bolivia</option>
					<option value="Brazil">Brazil</option>
					<option value="Chile">Chile</option>
					<option value="Colombia">Colombia</option>
					<option value="Ecuador">Ecuador</option>
					<option value="Guyana">Guyana</option>
					<option value="Paraguay">Paraguay</option>
					<option value="Peru">Peru</option>
					<option value="Suriname">Suriname</option>
					<option value="Uruguay">Uruguay</option>
					<option value="Venezuela">Venezuela</option>
				</select>
			</div>

		</div>

	</div>

	<div class="modal-close is-large" on:click={() => is_active = false}></div>

</div>
