<script>
export let url_params;
export let column;
// tippy d

// flip

function setOrderBy() {
	// ---
	if (url_params['order_by_col'] === column.id) {

		if (url_params['order_by_dir'] === 'asc') {
			delete url_params['order_by_col'];
			delete url_params['order_by_dir'];
		} else {
			url_params['order_by_dir'] = 'asc';
		}

	} else {

		url_params['order_by_col'] = column.id;
		url_params['order_by_dir'] = 'desc';

	}
}


</script>


<style>

td {

}

td span {
	display: inline-block;
	padding: 0.125rem 0.25rem;
	margin-left: -0.25rem;
	border-radius: 3px;
	transition: all ease 0.15s;
}

td span.ordering-option:hover {
	background: var(--bg-light-hover);
	cursor: pointer;
}

</style>


<td>
	{#if column.ordering_option}
	<span>
		{column.name}
	</span>
	{:else}
	<span on:click={setOrderBy} class="ordering-option">
		{column.name}
	</span>
	{/if}
</td>




