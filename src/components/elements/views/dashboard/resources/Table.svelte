<script>
export let rows;
export let columns;


import TableRow from 'components/elements/views/dashboard/resources/TableRow.svelte';



// look for saved columns where ? - in store?

// ---

</script>


<style>

.panel {

}

@media screen and (max-width: 768px) {
	.panel {
		border: none !important;
	}
}

</style>


<div class="panel">

	<div class="panel-heading is-hidden-mobile">

		<div class="columns is-variable is-mobile is-2 is-vcentered">

			{#each columns as column}
				<div class="column is-narrow">
					<span>
						{#each column as column_str}
							{column_str}<span class="arrow-divider">></span>
						{/each}
					</span>
				</div>
			{/each}

		</div>

	</div>

	{#each rows as row}

		<TableRow {row} {columns} />

	{/each}

</div>


