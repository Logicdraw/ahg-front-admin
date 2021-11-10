<script>
export let url_params;

export let leagues;
export let divisions;


// import CreateAdultPaymentTab from 'components/elements/views/dashboard/other/adult_hockey/finances/tabs/CreateAdultPayment.svelte';

import ExportAdultPaymentsTab from 'components/elements/views/dashboard/other/adult_hockey/finances/tabs/ExportAdultPayments.svelte';


import CreateAdultPaymentModal from 'components/elements/views/dashboard/other/adult_hockey/finances/modals/CreateAdultPayment.svelte';

// import ExportAdultPaymentsModal from 'components/elements/views/dashboard/other/adult_hockey/finances/modals/ExportAdultPayments.svelte';


// let export_modal_is_active = false;

let create_modal_is_active = false;


</script>



<style>

</style>



<!-- <ExportAdultPaymentsModal bind:export_modal_is_active {url_params} /> -->

<CreateAdultPaymentModal bind:create_modal_is_active />


<div>

	<div class="field is-grouped">

		<!-- <div class="control">

			<ExportAdultPaymentsTab {url_params} />

		</div> -->

		<div class="control">

			<span class="button is-normal" on:click={() => create_modal_is_active = true}>
				Create Payment
				<i class="fal fa-plus"></i>
			</span>

		</div>

	</div>

</div>

