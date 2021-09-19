<script>
export let act_resource_id;
export let row;
export let columns;

export let id_key = '_id';

import { navigateTo } from 'svelte-router-spa';


// console.log(row);


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
	// column_full_str = column[column.length - 1];
	row_values.push([column['name'], row_value]);
}


function navigateToRow() {
	navigateTo(`/my/act/resource/${act_resource_id}/${row[id_key]}`);
}


</script>


<style>

tr:hover {
	cursor: pointer;
}

</style>




<tr on:click={navigateToRow}>
	{#each row_values as row_value}
		<td>
			{row_value[1] || 'N/A'}
		</td>
	{/each}
</tr>






