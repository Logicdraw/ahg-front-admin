<script>
export let row;
export let team_instances = [];
export let active_delete_adult_payment_id;


import dayjs from 'dayjs';



let changes_to_commit = false;


let first_name = row.first_name;

let last_name = row.last_name;

let team_instance_id = row.team_instance_id;

let placed_at_datetime = '';
if (!!row.placed_at_datetime) {
	placed_at_datetime = dayjs(row.placed_at_datetime).format('YYYY-MM-DDTHH:mm');
}

let amount = row.amount;

let notes = row.notes || '';

let is_cancel = row.is_cancel;
if (is_cancel === null) {
	is_cancel = '0';
} else if (is_cancel === false) {
	is_cancel = '0';
} else if (is_cancel === true) {
	is_cancel = '1';
}




let last_saved_first_name;
let last_saved_last_name;
let last_saved_team_instance_id;
let last_saved_placed_at_datetime;
let last_saved_amount;
let last_saved_notes;
let last_saved_is_cancel;


function updateLastSavedValues() {
	// --

	last_saved_first_name = first_name;
	last_saved_last_name = last_name;
	last_saved_team_instance_id = team_instance_id;
	last_saved_placed_at_datetime = placed_at_datetime;
	last_saved_amount = amount;
	last_saved_notes = notes;
	last_saved_is_cancel = is_cancel;

}


updateLastSavedValues();



$: {
	changes_to_commit = (
		(first_name !== last_saved_first_name) || 
		(last_name !== last_saved_last_name) ||
		(team_instance_id !== last_saved_team_instance_id) ||
		(placed_at_datetime !== last_saved_placed_at_datetime) ||
		(amount !== last_saved_amount) ||
		(notes !== last_saved_notes) ||
		(is_cancel !== last_saved_is_cancel)
	)
}

// checkIfChangesToCommit() {

// }



import { auth } from 'store/index.js';

import { get } from 'svelte/store';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


let loading = false;



async function saveChanges() {

	if (!changes_to_commit) {
		return;
	}

	loading = true;


	let body_data = JSON.stringify({
		first_name: first_name,
		last_name: last_name,
		team_instance_id: team_instance_id,
		placed_at_datetime: placed_at_datetime + '+00:00',
		amount: amount,
		notes: notes,
		is_cancel: is_cancel,
	});


	const url = `${admin_api_url}/_other/_adult_hockey_finances/adult-payments/${row.id}`;

	const resp = await fetch(url, {
		method: 'PUT',
		body: body_data,
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	});

	const result = await resp.json();

	if (!resp.ok) {
		throw new Error(result.detail);
	}

	loading = false;

	updateLastSavedValues();

	alert('Saved!');

	return result;

}


</script>


<style>

.card:not(:last-child) {
	margin-bottom: 3rem;
}

tr:hover {
	/*cursor: pointer;*/
}

tr .input, select, .select {
	height: 2rem !important;
	line-height: 2rem !important;
}

select {
	padding-top: 0;
	padding-bottom: 0;
}

td {
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
}


tr.first-row td {
	border-bottom: 0 !important;
}

tr.second-row td {
	border-top: 0 !important;
	padding-top: 0 !important;
	padding-bottom: 1.25rem !important;
}


/*2rem line-height, height!*/

</style>



<div class="card is-hidden-desktop is-hidden-tablet">

	<div class="card-content">

		<div class="field">

			<div class="control">

				<label>First name</label>

				<input type="text" name="first_name" class="input" bind:value={first_name}>

			</div>

		</div>

		<div class="field">

			<div class="control">

				<label>Last name</label>

				<input type="text" name="last_name" class="input" bind:value={last_name}>

			</div>

		</div>

		<!-- dropdown -->

		<div class="field">

			<div class="control">

				<label>Team</label>

				<div class="select">
					<select bind:value={team_instance_id}>
						<option value="">Team</option>
						{#each team_instances as team_instance}
							<option value="{team_instance.id}">{team_instance.teams_sc.name} ({team_instance.teams_sc.divisions_sc.name})</option>
						{/each}
					</select>
				</div>

			</div>

		</div>

		<div class="field">

			<div class="control">

				<label>Placed At</label>

				<input type="datetime-local" name="placed_at_datetime" class="input" bind:value={placed_at_datetime}>

			</div>

		</div>


		<div class="field">

			<div class="control">

				<label>$ Amount</label>

				<input type="number" step='.01' name="amount" class="input" bind:value={amount}>

			</div>

		</div>


		<div class="field">

			<div class="control">

				<label>Notes</label>

				<input type="text" name="notes" class="input" bind:value={notes}>

			</div>

		</div>


		<div class="field">

			<div class="control">

				<label>Is cancelled?</label>

				<div class="select">
					<select bind:value={is_cancel}>
						<option value="0">No</option>
						<option value="1">Yes</option>
					</select>
				</div>

			</div>

		</div>

		<br>

		<div class="field">

			<div class="control">

				<button class="button is-blue is-fullwidth" disabled={(!changes_to_commit) || (loading)}>
					Save Changes
					<i class="fas fa-circle-notch fa-spin" class:is-hidden={!loading}></i>
				</button>

			</div>

		</div>

		<div class="field">

			<div class="control">

				<button class="button is-fullwidth" on:click={() => active_delete_adult_payment_id = row.id}>
					Delete
				</button>

			</div>

		</div>

		<!-- button -->

	</div>

</div>



<tr class="first-row is-hidden-mobile">
	<td>
		<span style="display: block; margin-bottom: 0.25rem;">First Name</span>
		<span><input type="text" name="first_name" class="input" bind:value={first_name}></span>
	</td>
	<td>
		<span style="display: block; margin-bottom: 0.25rem;">Last Name</span>
		<span><input type="text" name="last_name" class="input" bind:value={last_name}></span>
	</td>
	<td>
		<span style="display: block; margin-bottom: 0.25rem;">Team</span>
		<div class="select is-fullwidth">
			<select bind:value={team_instance_id}>
				<option value="">Team</option>
				{#each team_instances as team_instance}
					<option value="{team_instance.id}">{team_instance.teams_sc.name} ({team_instance.teams_sc.divisions_sc.name})</option>
				{/each}
			</select>
		</div>
	</td>
	<td>
		<span style="display: block; margin-bottom: 0.25rem;">Amount</span>
		<input type="number" step='.01' name="amount" class="input" bind:value={amount}>
	</td>
</tr>
<tr class="second-row is-hidden-mobile">
	<td>
		<span style="display: block; margin-bottom: 0.25rem;">Notes</span>
		<input type="text" name="notes" class="input" bind:value={notes}>
	</td>
	<td>
		<span style="display: block; margin-bottom: 0.25rem;">Is Cancelled?</span>
		<div class="select is-fullwidth">
			<select bind:value={is_cancel}>
				<option value="0">No</option>
				<option value="1">Yes</option>
			</select>
		</div>
	</td>
	<td>
		<span style="display: block; margin-bottom: 0.25rem;">Placed At:</span>
		<input type="datetime-local" name="placed_at_datetime" class="input" bind:value={placed_at_datetime}>
	</td>
	<td>
		<span style="display: block; margin-bottom: 0.25rem; visibility: hidden;">Is Cancelled?</span>
		<div class="buttons is-pulled-right">
			<button class="button is-blue is-small" on:click={saveChanges} disabled={(!changes_to_commit) || (loading)}>
				Save Changes
				<i class="fas fa-circle-notch fa-spin" class:is-hidden={!loading}></i>
			</button>
			<button class="button is-small" on:click={() => active_delete_adult_payment_id = row.id}>
				Delete
			</button>
		</div>
	</td>
</tr>




