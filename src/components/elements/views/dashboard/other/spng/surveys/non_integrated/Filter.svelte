<script>
export let params;
export let at_last_page;


function goToPrevPage() {
	if (params.offset > 0) {
		params.offset = params.offset - params.limit;
	}
}


function goToNextPage() {
	if (!at_last_page) {
		params.offset = params.offset + params.limit;
	}
}

</script>


<style>


</style>


<div class="is-hidden-mobile">

	<div class="field is-grouped">

		<div class="control is-expanded has-icons-right">

			<input class="input" placeholder="Search" bind:value={params['q']}>

			<span class="icon is-right">
				<i class="fas fa-search"></i>
			</span>

		</div>

		<div class="control">

			<div class="buttons">

				{#if params.offset > 0}

				<a class="button paginate-button" on:click={goToPrevPage}>
					<i class="far fa-angle-left"></i>
				</a>

				{:else}

				<a class="button paginate-button" disabled>
					<i class="far fa-angle-left"></i>
				</a>

				{/if}



				{#if !at_last_page}

				<a class="button paginate-button" on:click={goToNextPage}>
					<i class="far fa-angle-right"></i>
				</a>

				{:else}

				<a class="button paginate-button" disabled>
					<i class="far fa-angle-right"></i>
				</a>

				{/if}


			</div>

		</div>

	</div>

</div>



<div class="is-hidden-desktop is-hidden-tablet">

	<div class="field is-grouped">

		<div class="control is-expanded has-icons-right">

			<input class="input" placeholder="Search" bind:value={params['q']}>

			<span class="icon is-right">
				<i class="fas fa-search"></i>
			</span>

		</div>

	</div>

	<div class="field is-grouped">

		<div class="control">

			<div class="buttons">

				{#if params.offset > 0}

				<a class="button paginate-button" on:click={goToPrevPage}>
					<i class="far fa-angle-left"></i>
				</a>

				{:else}

				<a class="button paginate-button" disabled>
					<i class="far fa-angle-left"></i>
				</a>

				{/if}



				{#if !at_last_page}

				<a class="button paginate-button" on:click={goToNextPage}>
					<i class="far fa-angle-right"></i>
				</a>

				{:else}

				<a class="button paginate-button" disabled>
					<i class="far fa-angle-right"></i>
				</a>

				{/if}


			</div>

		</div>

	</div>

</div>



