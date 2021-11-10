<script>
export let rows;
export let url_params;
export let team_instances;


import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';

import TableRow from 'components/elements/views/dashboard/other/adult_hockey/finances/TableRow.svelte';

import DeleteAdultPaymentModal from 'components/elements/views/dashboard/other/adult_hockey/finances/modals/DeleteAdultPayment.svelte';


let active_delete_adult_payment_id = null;


let delete_modal_is_active = false;

$: {
	if (!!active_delete_adult_payment_id) {
		delete_modal_is_active = true;
	}
}


</script>


<style>

.table {
	border: 1px solid var(--border);
}

@media screen and (max-width: 768px) {
	.table {
		border: 0 !important;
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



<DeleteAdultPaymentModal bind:delete_modal_is_active bind:adult_payment_id={active_delete_adult_payment_id} />


<!-- MsgCard: last updated -->



<table class="table is-hoverable- is-fullwidth">
	<!-- <thead>
		<tr>
			<td>
				First
			</td>
			<td>
				Last
			</td>
			<td>
				Team
			</td>
			
			<td>
				
			</td>
		</tr>
	</thead>
 -->
	<tbody>
		{#each rows as row}
			<TableRow {row} {team_instances} bind:active_delete_adult_payment_id />
		{/each}
	</tbody>
</table>



