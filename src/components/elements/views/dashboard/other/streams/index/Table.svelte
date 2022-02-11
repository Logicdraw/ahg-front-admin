<script>
export let rows;


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
			<span>
				Name
			</span>
		</tr>
		<tr>
			<span>
				League
			</span>
		</tr>
		<tr>
			<span>
				Season
			</span>
		</tr>
	</thead>

	<tbody>
		{#each rows as row}
			<TableRow {row} />
		{/each}
	</tbody>
</table>




