<script>
export let coach;

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

			<input type="text" name="" readonly value="{coach.f_name}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Last Name</label>

			<input type="text" name="" readonly value="{coach.l_name}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Address</label>

			<input type="text" name="" readonly value="{coach.address}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>City</label>

			<input type="text" name="" readonly value="{coach.city}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Province</label>

			<input type="text" name="" readonly value="{coach.province}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Postal Code</label>

			<input type="text" name="" readonly value="{coach.postcode}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Program</label>

			<input type="text" name="" readonly value="{coach.team}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Team</label>

			<input type="text" name="" readonly value="{coach.program}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Division Coaching</label>

			<input type="text" name="" readonly value="{coach.div_coaching}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Position</label>

			<input type="text" name="" readonly value="{coach.position}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Salary</label>

			<input type="text" name="" readonly value="{coach.salary}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Comment</label>

			<input type="text" name="" readonly value="{coach.comment}" class="input">

		</div>

	</div>


	<br>

</form>



