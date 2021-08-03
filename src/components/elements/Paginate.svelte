<script>
export let params;
export let items;


import { Navigate } from 'svelte-router-spa';


let prev_page = params.page - 1;
let next_page = params.page + 1;

let has_prev_page = params.page > 0;
let has_next_page = ((params.page + 1) * params.size) < params.total;


function goToPrevPage() {
	active_page = prev_page;
}


function goToNextPage() {
	active_page = next_page;
}


</script>


<style>

.paginate {
	/*display: block;*/
	/*margin-top: 2rem;*/
}

.buttons {

}

:global(.paginate-button) {

}

:global(.paginate-button) i {
	margin-left: 0;
	font-size: 1.25rem;
}

</style>


<div class="columns is-variable paginate">

	<div class="column">

	</div>

	<div class="column is-narrow">


		<div class="buttons">

			{#if has_prev_page}

			<a class="button paginate-button" on:click={goToPrevPage}>
				<i class="far fa-angle-left"></i>
			</a>

			{:else}

			<a class="button paginate-button" disabled>
				<i class="far fa-angle-left"></i>
			</a>

			{/if}



			{#if has_next_page}

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




