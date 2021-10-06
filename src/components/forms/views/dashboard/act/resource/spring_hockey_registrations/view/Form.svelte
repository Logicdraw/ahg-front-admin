<script>
export let spring_hockey_registration;

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

			<input type="text" name="" readonly value="{spring_hockey_registration.f_name}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Last Name</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.l_name}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Team</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.team}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Team Division</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.team_division}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Program</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.program}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Position</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.position}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Gender</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.gender}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Comment</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.comment}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>D.O.B.</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.d_o_b}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Medicare</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.medicare}" class="input">

		</div>

	</div>


	<br>


	<div class="field">

		<div class="control">

			<label>Home Phone</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.home}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Work Phone</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.work}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Address</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.address}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>City</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.city}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Province</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.province}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Postal Code</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.postcode}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Email Address</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.e_mail}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Mother</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.mother}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Father</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.father}" class="input">

		</div>

	</div>


	<br>


	<div class="field">

		<div class="control">

			<label>Date Received</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.date_received}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Postdated</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.postdated}" class="input">

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Balance</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.balance}" class="input">

		</div>

	</div>


	<br>

	<MsgCard msg_type={'error'} msg_text={'Jersey Sponsors:'} msg_forever={true} />


	<div class="field">

		<div class="control">

			<label>Jersey Sponsor 01</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.jersey_sponsor_01}" class="input" style="margin-bottom: 0.75rem !important;">

			<input type="text" name="" readonly value="{spring_hockey_registration.j_sponsor_01}" class="input">

		</div>
		
	</div>


	<div class="field">

		<div class="control">

			<label>Jersey Sponsor 02</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.jersey_sponsor_02}" class="input" style="margin-bottom: 0.75rem !important;">

			<input type="text" name="" readonly value="{spring_hockey_registration.j_sponsor_02}" class="input">

		</div>
		
	</div>


	<div class="field">

		<div class="control">

			<label>Jersey Sponsor 03</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.jersey_sponsor_03}" class="input" style="margin-bottom: 0.75rem !important;">

			<input type="text" name="" readonly value="{spring_hockey_registration.j_sponsor_03}" class="input">

		</div>
		
	</div>


	<div class="field">

		<div class="control">

			<label>Jersey Sponsor 04</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.jersey_sponsor_04}" class="input" style="margin-bottom: 0.75rem !important;">

			<input type="text" name="" readonly value="{spring_hockey_registration.j_sponsor_04}" class="input">

		</div>
		
	</div>


	<div class="field">

		<div class="control">

			<label>Jersey Sponsor 05</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.jersey_sponsor_05}" class="input" style="margin-bottom: 0.75rem !important;">

			<input type="text" name="" readonly value="{spring_hockey_registration.j_sponsor_05}" class="input">

		</div>
		
	</div>


	<div class="field">

		<div class="control">

			<label>Jersey Sponsor 06</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.jersey_sponsor_06}" class="input" style="margin-bottom: 0.75rem !important;">

			<input type="text" name="" readonly value="{spring_hockey_registration.j_sponsor_06}" class="input">

		</div>
		
	</div>


	<div class="field">

		<div class="control">

			<label>Jersey Sponsor 07</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.jersey_sponsor_07}" class="input" style="margin-bottom: 0.75rem !important;">

			<input type="text" name="" readonly value="{spring_hockey_registration.j_sponsor_07}" class="input">

		</div>
		
	</div>


	<div class="field">

		<div class="control">

			<label>Jersey Sponsor 08</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.jersey_sponsor_08}" class="input" style="margin-bottom: 0.75rem !important;">

			<input type="text" name="" readonly value="{spring_hockey_registration.j_sponsor_08}" class="input">

		</div>
		
	</div>


	<div class="field">

		<div class="control">

			<label>Jersey Sponsor 09</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.jersey_sponsor_09}" class="input" style="margin-bottom: 0.75rem !important;">

			<input type="text" name="" readonly value="{spring_hockey_registration.j_sponsor_09}" class="input">

		</div>
		
	</div>


	<div class="field">

		<div class="control">

			<label>Jersey Sponsor 10</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.jersey_sponsor_10}" class="input" style="margin-bottom: 0.75rem !important;">

			<input type="text" name="" readonly value="{spring_hockey_registration.j_sponsor_10}" class="input">

		</div>
		
	</div>


	<!-- <div class="field">

		<div class="control">

			<label>Jersey Sponsor 11</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.j_sponsor_11}" class="input">

		</div>
		
	</div> -->


	<!-- <div class="field">

		<div class="control">

			<label>Credit Card</label>

			<input type="text" name="" readonly value="{spring_hockey_registration.credit_card}" class="input">

		</div>

	</div> -->




	<br>

</form>



