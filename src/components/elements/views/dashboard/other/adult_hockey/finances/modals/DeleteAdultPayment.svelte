<script>
export let delete_modal_is_active;
export let adult_payment_id;


import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';

import Form from 'components/forms/views/dashboard/other/adult_hockey/finances/adult_payments/delete/Form.svelte';


$: console.log(adult_payment_id);


function closeModal() {
	adult_payment_id = null;
	delete_modal_is_active = false;
}



</script>


<style>

.modal-card-body {
	border-top-left-radius: 0 !important;
	border-top-right-radius: 0 !important;
}

</style>



<div class="modal" class:is-active={delete_modal_is_active}>

	<div class="modal-background"></div>

	<div class="modal-card">

		<header class="modal-card-head">
			<div class="modal-card-title">
				Delete Adult Payment
			</div>

			<button class="delete" aria-label="close" on:click={closeModal}></button>
		</header>

		<div class="modal-card-body">

			<Form {adult_payment_id} bind:delete_modal_is_active />

		</div>

	</div>

</div>

