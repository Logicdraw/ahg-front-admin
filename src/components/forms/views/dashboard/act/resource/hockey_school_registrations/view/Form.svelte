<script>
export let hockey_school_registration;

export let msg_show;
export let msg_text;
export let msg_type;


import { auth } from 'store/index.js';


import { get } from 'svelte/store';

import { onMount } from 'svelte';


import MsgCard from 'components/elements/MsgCard.svelte';




</script>



<style>

form {
	
}

</style>


<!-- search columns... -->


<form on:submit={() => false}>

	<div class="field">

		<div class="control">

			<label>First Name</label>

			<input type="text" name="" readonly value="{hockey_school_registration.f_name}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Last Name</label>

			<input type="text" name="" readonly value="{hockey_school_registration.l_name}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Camp</label>

			<input type="text" name="" readonly value="{hockey_school_registration.camp}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Position</label>

			<input type="text" name="" readonly value="{hockey_school_registration.position}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Gender</label>

			<input type="text" name="" readonly value="{hockey_school_registration.gender}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Comment</label>

			<input type="text" name="" readonly value="{hockey_school_registration.comment}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>D.O.B.</label>

			<input type="text" name="" readonly value="{hockey_school_registration.d_o_b}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Medicare</label>

			<input type="text" name="" readonly value="{hockey_school_registration.medicare}" class="input">

		</div>

	</div>


	<br>


	<div class="field">

		<div class="control">

			<label>Home Phone</label>

			<input type="text" name="" readonly value="{hockey_school_registration.home}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Work Phone</label>

			<input type="text" name="" readonly value="{hockey_school_registration.work}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Address</label>

			<input type="text" name="" readonly value="{hockey_school_registration.address}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>City</label>

			<input type="text" name="" readonly value="{hockey_school_registration.city}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Province</label>

			<input type="text" name="" readonly value="{hockey_school_registration.province}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Postal Code</label>

			<input type="text" name="" readonly value="{hockey_school_registration.postcode}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Email Address</label>

			<input type="text" name="" readonly value="{hockey_school_registration.e_mail}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Mother</label>

			<input type="text" name="" readonly value="{hockey_school_registration.mother}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Father</label>

			<input type="text" name="" readonly value="{hockey_school_registration.father}" class="input">

		</div>

	</div>


	<br>


	<div class="field">

		<div class="control">

			<label>Date Received</label>

			<input type="text" name="" readonly value="{hockey_school_registration.date_received}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Postdated</label>

			<input type="text" name="" readonly value="{hockey_school_registration.postdated}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Balance</label>

			<input type="text" name="" readonly value="{hockey_school_registration.balance}" class="input">

		</div>

	</div>

	<br>

</form>



