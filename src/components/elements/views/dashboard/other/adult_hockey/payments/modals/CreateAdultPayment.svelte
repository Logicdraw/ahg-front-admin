<script>
export let create_modal_is_active;


import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';

import Form from 'components/forms/views/dashboard/other/adult_hockey/payments/adult_payments/create/Form.svelte';



</script>


<style>

.modal-card-body {
	border-top-left-radius: 0 !important;
	border-top-right-radius: 0 !important;
}

</style>



<div class="modal" class:is-active={create_modal_is_active}>

	<div class="modal-background"></div>

	<div class="modal-card">

		<header class="modal-card-head">
			<div class="modal-card-title">
				Create Adult Payment
			</div>

			<button class="delete" aria-label="close" on:click={() => create_modal_is_active = false}></button>
		</header>

		<div class="modal-card-body">

			<!-- <MsgCard  /> -->

			<Form />

		</div>

	</div>

</div>

