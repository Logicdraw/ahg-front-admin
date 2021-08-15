<script>
export let row;
export let columns;


// get data points...

let row_values = [];

for (var i = 0; i < columns.length; i++) {
	let column = columns[i];
	let row_value = row;
	let column_full_str = '';
	for (var i = 0; i < column.length; i++) {
		let column_str = column[i];
		column_full_str += column_str;
		column_str += ' > ';
		try {
			row_value = row_value[column_str];
		} catch(err) {
			row_value = '';
			break;
		}
	}
	row_values.push([column_full_str, row_value]);
}


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



<!-- Desktop -->

<div class="panel-block is-hidden-mobile">

	<div class="columns is-variable is-mobile is-2 is-vcentered">

		<!-- each -->
		{#each row_values as row_value}
			<div class="column is-narrow">
				{row_value[1]}
			</div>
		{/each}

	</div>

</div>


<!-- Mobile -->

<div class="card is-hidden-desktop is-hidden-tablet">

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
						{row_value[1]}
					</span>
				</div>

			</div>

		{/each}

	</div>

</div>




