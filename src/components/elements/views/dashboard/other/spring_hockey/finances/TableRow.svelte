<script>
export let row;


import { navigateTo } from 'svelte-router-spa';


// let rostered = row.;

// let fully_paid = row.;

// let total_owing = row.;


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
					Team
				</span>
			</div>

			<div class="column is-narrow">
				<span>
					{row.team.name}
				</span>
			</div>

		</div>


		<div class="columns is-variable is-mobile is-1">

			<div class="column">
				<span class="id">
					Division
				</span>
			</div>

			<div class="column is-narrow">
				<span>
					{row.team.division.name}
				</span>
			</div>

		</div>


		<div class="columns is-variable is-mobile is-1">

			<div class="column">
				<span class="id">
					Rostered
				</span>
			</div>

			<div class="column is-narrow">
				<span>
					<!-- {row.team.seasons[0].name} -->
				</span>
			</div>

		</div>


		<div class="columns is-variable is-mobile is-1">

			<div class="column">
				<span class="id">
					Fully Paid
				</span>
			</div>

			<div class="column is-narrow">
				<span>
					<!-- {row.team.seasons[0].name} -->
				</span>
			</div>

		</div>


		<div class="columns is-variable is-mobile is-1">

			<div class="column">
				<span class="id">
					Total Owing
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
		{row.team.name}
	</td>

	<td>
		{row.team.division.name}
	</td>

	<td>
		<!-- ... -->
	</td>

	<td>
		<!-- ... -->
	</td>

	<td>
		<!-- ... -->
	</td>

</tr>




