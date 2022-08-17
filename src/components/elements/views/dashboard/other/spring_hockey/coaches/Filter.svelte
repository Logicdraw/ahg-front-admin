<script>
export let url_params = {};

// other filters...

</script>


<style>

</style>




<div class="field is-grouped">

	<div class="control is-expanded has-icons-right">

		<input class="input" placeholder="Search" bind:value={url_params['q']} on:input={() => url_params['offset'] = 0}>

		<span class="icon is-right">
			<i class="fas fa-search"></i>
		</span>

	</div>

</div>


