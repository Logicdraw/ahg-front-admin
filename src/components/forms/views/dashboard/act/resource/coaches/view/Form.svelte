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


	<!-- <div class="field">

		<div class="control">

			<label>Last Name</label>

			<input type="text" name="" readonly value="{coach.l_name}" class="input">

		</div>

	</div> -->


	<br>

</form>



