<script>
export let rows;

import TableRow from 'components/elements/views/dashboard/file_templates/custom/TableRow.svelte';


const columns = [];


</script>


<style>

</style>


<!-- -- -->


<table class="table is-fullwidth">

	<thead>
		<tr>
			{#each columns as column}

			{/each}
		</tr>
	</thead>

	<tbody>
		{#each rows as row}

		{/each}
	</tbody>
</table>


{#each rows as row}
	
{/each}


