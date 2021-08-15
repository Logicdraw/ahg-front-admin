<script>
export let rows;
export let columns;


import TableRow from 'components/elements/views/dashboard/resources/TableRow.svelte';
import TableRowMobile from 'components/elements/views/dashboard/resources/TableRowMobile.svelte';




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

td .arrow-divider:last-child {
	display: none !important;
}

</style>


<table class="table  is-hoverable is-fullwidth">
	<thead>
		<tr>
			{#each columns as column}
				<td>
					<span>
						{#each column as column_str}
							{column_str}<span class="arrow-divider"> ></span>
						{/each}
					</span>
				</td>
			{/each}
		</tr>
	</thead>

	<tbody>
		{#each rows as row}
			<TableRow {row} {columns} />
		{/each}
	</tbody>
</table>


{#each rows as row}
	<TableRowMobile {row} {columns} />
{/each}

