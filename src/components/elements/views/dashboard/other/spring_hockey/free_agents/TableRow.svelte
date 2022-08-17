<script>
export let row;


import { navigateTo } from 'svelte-router-spa';


// Navigate to form
function navigateToRow() {
	navigateTo(`https://ahgcentral.sportngin.com/survey/show/${row.id}`)
}

</script>


<style>

</style>



<div class="table-card card is-hidden-desktop is-hidden-tablet" on:click={navigateToRow}>

	<div class="card-content">

		<div class="columns is-variable is-mobile is-1">

			<div class="column">
				<span class="id">
					Name
				</span>
			</div>

			<div class="column is-narrow">
				<span>
					<!-- {row.name || row.team.name} -->
				</span>
			</div>

		</div>


		<div class="columns is-variable is-mobile is-1">

			<div class="column">
				<span class="id">
					League
				</span>
			</div>

			<div class="column is-narrow">
				<span>
					<!-- {row.team.leagues[0].name} -->
				</span>
			</div>

		</div>


		<div class="columns is-variable is-mobile is-1">

			<div class="column">
				<span class="id">
					Season
				</span>
			</div>

			<div class="column is-narrow">
				<span>
					<!-- {row.team.seasons[0].name} -->
				</span>
			</div>

		</div>


	</div>

</div>



<tr on:click={navigateToRow} class="is-hidden-mobile">
	<td>
		{row.name || row.team.name}
	</td>

	<td>
		{row.team.leagues[0].name}
	</td>

	<td>
		{row.team.seasons[0].name}
	</td>

</tr>




