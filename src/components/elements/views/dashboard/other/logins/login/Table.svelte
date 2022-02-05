<script>
export let login_id;
export let rows;
export let columns;
export let url_params;

export let id_key;


import TableRow from 'components/elements/views/dashboard/logins/login/TableRow.svelte';

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
		border: none !important;
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
	<thead class="is-hidden-mobile">
		<tr>
			{#each columns as column}
				<TableHeader {column} {url_params} />
			{/each}
		</tr>
	</thead>

	<tbody>
		{#each rows as row}
			<TableRow {row} {columns} {login_id} {id_key} />
		{/each}
	</tbody>
</table>


