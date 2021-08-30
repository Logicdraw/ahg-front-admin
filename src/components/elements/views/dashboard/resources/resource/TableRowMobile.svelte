<script>
export let resource_id;
export let row;
export let columns;

export let id_key = 'id';


import { navigateTo } from 'svelte-router-spa';


let row_values = [];

for (var i = 0; i < columns.length; i++) {
	let column = columns[i];
	let row_value = row;
	let column_full_str = '';
	for (var j = 0; j < column['path'].length; j++) {
		let column_str = column['path'][j];
		column_full_str += column_str;
		try {
			row_value = row_value[column_str];
		} catch(err) {
			row_value = '';
			break;
		}
		column_str += ' > ';
	}
	// column_full_str = column_full_str.split('> ')[column_full_str.split('> ').length - 1];
	// column_full_str = column[column.length - 1];
	row_values.push([column['name'], row_value]);
}



function navigateToRow() {
	navigateTo(`/my/resource/edit/${resource_id}/${row[id_key]}`);
}

</script>


<style>
	
span.id {
	/*text-decoration: underline;*/
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

		{#each row_values as row_value}

			<div class="columns is-variable is-mobile is-1">

				<div class="column">
					<span class="id">
						{row_value[0]}
					</span>
				</div>

				<div class="column is-narrow">
					<span>
						{row_value[1] || 'N/A'}
					</span>
				</div>

			</div>

		{/each}

	</div>

</div>


