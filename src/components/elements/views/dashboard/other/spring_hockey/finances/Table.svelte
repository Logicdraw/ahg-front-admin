<script>
export let rows;


import TableRow from 'components/elements/views/dashboard/other/spring_hockey/finances/TableRow.svelte';

</script>


<style>

</style>


<!-- canceled teams are not there -->

<table class="table is-hoverable is-fullwidth">
	<thead>
		<tr>
			<span>
				Team
			</span>
		</tr>
		<tr>
			<span>
				Division
			</span>
		</tr>
		<tr>
			<span>
				Rostered
			</span>
		</tr>
		<tr>
			<span>
				Fully Paid
			</span>
		</tr>
		<tr>
			<span>
				Total Owing
			</span>
		</tr>
	</thead>

	<tbody>
		{#each rows as row}
			<TableRow {row} />
		{/each}
	</tbody>
</table>




