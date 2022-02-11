<script>
export let row;


import { navigateTo } from 'svelte-router-spa';


// Navigate to form
function navigateToRow() {
	navigateTo(`https://ahgcentral.sportngin.com/survey/show/${row.id}`)
}

</script>


<style>

tr:hover {
	cursor: pointer;
}

span.id {
	text-decoration: underline;
	color: var(--text-grey);
	/*font-weight: 500;*/
}

.card {
	margin-bottom: 1.5rem;
}

.card .columns {
	margin-bottom: 0.75rem !important;
	padding-bottom: 0.25rem !important;
	border-bottom: 1px solid var(--border-light);
	margin-bottom: 1rem;
}

.card .columns:last-child {
	margin-bottom: 0 !important;
	padding-bottom: 0 !important;
	border-bottom: 0 !important;
}

</style>



<div class="card is-hidden-desktop is-hidden-tablet" on:click={navigateToRow}>

	<div class="card-content">

		<div class="columns is-variable is-mobile is-1">

			<div class="column">
				<span class="id">
					Name
				</span>
			</div>

			<div class="column is-narrow">
				<span>
					{row.name || row.team.name}
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
					{row.team.leagues[0].name}
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
					{row.team.seasons[0].name}
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




