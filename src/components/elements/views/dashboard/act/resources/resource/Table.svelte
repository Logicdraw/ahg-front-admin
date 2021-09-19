<script>
export let act_resource_id;
export let rows;
export let columns;
export let params;


import TableRow from 'components/elements/views/dashboard/act/resources/resource/TableRow.svelte';
import TableRowMobile from 'components/elements/views/dashboard/act/resources/resource/TableRowMobile.svelte';

import TableHeader from 'components/elements/TableHeader.svelte';



// look for saved columns where ? - in store?

// ---

</script>


<style>

.table {
	border: 1px solid var(--border);
}

@media screen and (max-width: 768px) {
	.table {
		display: none !important;
	}
}

thead {
	background: var(--bg-light) !important;
}

td .arrow-divider {
	margin-left: 0.325rem !important;
	margin-right: 0.325rem !important;
}

td .arrow-divider:last-child {
	display: none !important;
}

</style>


<table class="table is-hoverable is-fullwidth">
	<thead>
		<tr>
			{#each columns as column}
				<TableHeader {column} {params} />
			{/each}
		</tr>
	</thead>

	<tbody>
		{#each rows as row}
			<TableRow {row} {columns} {act_resource_id} />
		{/each}
	</tbody>
</table>

{#each rows as row}
	<TableRowMobile {row} {columns} {act_resource_id} />
{/each}


