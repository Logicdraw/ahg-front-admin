<script>
export let row;
export let columns;


import { Navigate } from 'svelte-router-spa';


let row_values = [];

for (var i = 0; i < columns.length; i++) {
	// --
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



</script>


<style>

</style>


<tr on:click={() => false}>
	{#each row_values as row_value}
		<td>
			{row_value[1] || 'N/A'}
		</td>
	{/each}
	<td>
		<div class="buttons">
			<Navigate to='/my/file_templates/{row.id}' styles='button is-small is-blue'>
				<span>Edit</span>
			</Navigate>
			<Navigate to='/my/file_templates/{row.id}' styles='button is-small is-blue'>
				<span>Download</span>
			</Navigate>
		</div>
	</td>
</tr>


