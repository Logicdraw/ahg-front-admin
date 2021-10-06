<script>
export let row;
export let team_instances;


let first_name = row.first_name;

let last_name = row.last_name;

let team_instance_id = row.team_instance_id;

let placed_at_datetime = row.placed_at_datetime;

let amount = row.amount;

let notes = row.notes;



import { auth } from 'store/index.js';

import { get } from 'svelte/store';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


let loading = false;


async function saveChanges() {

	loading = true;

	let body_data = JSON.stringify({
		first_name: first_name,
		last_name: last_name,
		team_instance_id: team_instance_id,
		placed_at_datetime: placed_at_datetime,
		amount: amount,
		notes: notes,
	});


	const url = `${admin_api_url}/_other/_adult_hockey_finances/adult-payments/${row.id}`;

	const resp = await fetch(url, {
		method: 'PUT',
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

	return result;

}


</script>


<style>

tr:hover {
	cursor: pointer;
}

/*2rem line-height, height!*/

</style>



<div class="card is-hidden-desktop is-hidden-tablet">

	<div class="card-content">

		<div class="field">

			<div class="control">

				<input type="text" name="first_name" class="input" bind:value={first_name}>

			</div>

		</div>

		<div class="field">

			<div class="control">

				<input type="text" name="last_name" class="input" bind:value={last_name}>

			</div>

		</div>

		<!-- dropdown -->

		<div class="field">

			<div class="control">

				<div class="select">
					<select bind:value={team_instance_id}>
						<option value="">Team</option>
						{#each team_instances as team_instance}
							<option value="{team_instance.id}">{team_instance.teams_sc.name} (Division: {team_instance.teams_sc.divisions_sc.name})</option>
						{/each}
					</select>
				</div>

			</div>

		</div>

		<div class="field">

			<div class="control">

				<input type="datetime-local" name="placed_at_datetime" class="input" bind:value={placed_at_datetime}>

			</div>

		</div>


		<div class="field">

			<div class="control">

				<input type="number" step='.01' name="amount" class="input" bind:value={amount}>

			</div>

		</div>


		<div class="field">

			<div class="control">

				<input type="text" name="notes" class="input" bind:value={notes}>

			</div>

		</div>


		<div class="field">

			<div class="control">

				<span class="button is-medium is-blue">
					Save Changes
					<i class="fas fa-circle-notch fa-spin" class:is-hidden={!loading}></i>
				</span>

			</div>

		</div>

		<!-- button -->

	</div>

</div>



<tr>
	<td>
		<input type="text" name="first_name" class="input" bind:value={first_name}>
	</td>
	<td>
		<input type="text" name="first_name" class="input" bind:value={last_name}>
	</td>
	<td>
		<div class="select">
			<select bind:value={team_instance_id}>
				<option value="">Team</option>
				{#each team_instances as team_instance}
					<option value="{team_instance.id}">{team_instance.teams_sc.name} (Division: {team_instance.teams_sc.divisions_sc.name})</option>
				{/each}
			</select>
		</div>
	</td>
	<td>
		<input type="datetime-local" name="placed_at_datetime" class="input" bind:value={placed_at_datetime}>
	</td>
	<td>
		<input type="number" step='.01' name="amount" class="input" bind:value={amount}>
	</td>
	<td>
		<input type="text" name="notes" class="input" bind:value={notes}>
	</td>
	<td>
		<span>
			<div class="buttons">
				<span class="button is-blue is-small" on:click={saveChanges}>
					Save
					<i class="fas fa-circle-notch fa-spin" class:is-hidden={!loading}></i>
				</span>
			</div>
		</span>
	</td>
</tr>






