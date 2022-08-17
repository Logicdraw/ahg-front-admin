<script>
export let rows;


import TableRow from 'components/elements/views/dashboard/other/spring_hockey/free_agents/TableRow.svelte';

</script>


<style>

</style>



<table class="table is-hoverable is-fullwidth">
	<thead>
		<tr>
			<span>
				Name
			</span>
		</tr>
		<tr>
			<span>
				Email
			</span>
		</tr>
		<tr>
			<span>
				Team(s)
			</span>
		</tr>
	</thead>

	<tbody>
		{#each rows as row}
			<TableRow {row} />
		{/each}
	</tbody>
</table>



