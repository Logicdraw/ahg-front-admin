<script>
export let rows;
export let url_params;


import TableRow from 'components/elements/views/dashboard/other/adult_hockey_finances/TableRow.svelte';


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
			<td>
				First Name
			</td>
			<td>
				Last Name
			</td>
			<td>
				Team
			</td>
			<td>
				Placed At
			</td>
			<td>
				Amount
			</td>
			<td>
				Notes
			</td>
			<td>
				<!-- button - save changes -->
			</td>
		</tr>
	</thead>

	<tbody>
		{#each rows as row}
			<TableRow {row} />
		{/each}
	</tbody>
</table>


