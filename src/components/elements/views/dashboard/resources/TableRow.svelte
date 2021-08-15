<script>
export let row;
export let columns;



let row_values = [];

for (var i = 0; i < columns.length; i++) {
	let column = columns[i];
	let row_value = row;
	let column_full_str = '';
	for (var j = 0; j < column.length; j++) {
		let column_str = column[j];
		column_full_str += column_str;
		try {
			console.log(row_value);
			console.log(column_str);
			row_value = row_value[column_str];
		} catch(err) {
			row_value = '';
			break;
		}
		column_str += ' > ';
	}
	row_values.push([column_full_str, row_value]);
}

// console.log(row_values);


</script>


<style>

span.id {
	/*text-decoration: underline;*/
	color: var(--text-grey);
	/*font-weight: 500;*/
}

.card .columns {
	/*display: block;*/
	/* may not be true! */
	margin-bottom: 1rem;
}

@media screen and (max-width: 768px) {
	.columns {
		margin-bottom: 0.75rem !important;
		padding-bottom: 0.25rem !important;
		border-bottom: 1px solid var(--border-light);
	}
}

</style>




<tr>
	{#each row_values as row_value}
		<td>
			{row_value[1] || 'N/A'}
		</td>
	{/each}
</tr>






