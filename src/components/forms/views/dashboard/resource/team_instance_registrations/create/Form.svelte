<script>
export let msg_show;
export let msg_text;
export let msg_type;

export let conference_instances = [];
export let division_instances = [];
export let team_instances = [];
export let players = [];



const conference_instances_values = [];

for (var i = 0; i < conference_instances.length; i++) {

	let conference_instance_label = conference_instances[i].conferences_sc.name;

	if (conference_instances[i].year_start && conference_instances[i].year_end) {
		conference_instance_label += ' (' + conference_instances[i].year_start + ' - ' + conference_instances[i].year_end + ')';
	} else if (conference_instances.year_start) {
		conference_instance_label += ' (' + conference_instances[i].year_start + ')';
	} else if (conference_instances.year_end) {
		conference_instance_label += ' (' + conference_instances[i].year_end + ')';
	}

	let conference_instance_value_obj = {
		value: conference_instances[i].id,
		label: conference_instance_label,
	};

	conference_instances_values.push(conference_instance_value_obj);

}



const division_instances_values = [];

for (var i = 0; i < division_instances.length; i++) {

	let division_instance_label = division_instances[i].divisions_sc.name;

	if (division_instances[i].year_start && division_instances[i].year_end) {
		division_instance_label += ' (' + division_instances[i].year_start + ' - ' + division_instances[i].year_end + ')';
	} else if (division_instances.year_start) {
		division_instance_label += ' (' + division_instances[i].year_start + ')';
	} else if (division_instances.year_end) {
		division_instance_label += ' (' + division_instances[i].year_end + ')';
	}

	let division_instance_value_obj = {
		value: division_instances[i].id,
		label: division_instance_label,
	};

	division_instances_values.push(division_instance_value_obj);

}

let active_division_instances_values = division_instances_values;

$: {
	if (selected_conference_instances) {
		active_division_instances_values = [];

		// for (var i = 0; i < selected_conference_instances.length; i++) {

		// 	// selected_conference_instances[i];
		// }
	} else {
		active_division_instances_values = division_instances_values;
	}
	// active_division_instances_values
}



const team_instances_values = [];

for (var i = 0; i < team_instances.length; i++) {

	let team_instance_label = team_instances[i].teams_sc.name;

	if (team_instances[i].year_start && team_instances[i].year_end) {
		team_instance_label += ' (' + team_instances[i].year_start + ' - ' + team_instances[i].year_end + ')';
	} else if (team_instances.year_start) {
		team_instance_label += ' (' + team_instances[i].year_start + ')';
	} else if (team_instances.year_end) {
		team_instance_label += ' (' + team_instances[i].year_end + ')';
	}

	if (team_instances.division_instances_sc) {
		if (team_instances.division_instances_sc.divisions_sc) {
			team_instance_label += ' - ' + team_instances.division_instances_sc.divisions_sc.name;
		}
	}

	let team_instance_value_obj = {
		value: team_instances[i].id,
		label: team_instance_label,
	};

	team_instances_values.push(team_instance_value_obj);
}

let active_team_instances_values = team_instances_values;


const players_values = [];

for (var i = 0; i < players.length; i++) {

	let player_label = players[i].first_name + ' ' + players[i].last_name;

	if (players[i].date_of_birth) {
		player_label += ' (' + players[i].date_of_birth + ')';
	}

	if (players[i].street_address_1) {
		player_label += ' - ' + players[i].street_address_1 + ',';
	}

	if (players[i].city) {
		player_label += ' ' + players[i].city + ',';
	}

	if (players[i].province) {
		player_label += ' ' + players[i].province + '';
	}

	let player_value_obj = {
		value: players[i].id,
		label: player_label,
	};

	players_values.push(player_value_obj);
}


import Select from 'svelte-select';


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import { createForm } from 'svelte-forms-lib';
import * as yup from 'yup';
import { navigateTo, Navigate } from 'svelte-router-spa';

import { onMount } from 'svelte';


import MsgCard from 'components/elements/MsgCard.svelte';
import FormFieldError from 'components/forms/FormFieldError.svelte';



const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


let loading = false;



const {
	form,
	errors,
	state,
	// handleBlur,
	handleChange,
	handleSubmit,
	setField,
} = createForm({
	initialValues: {
		team_instances_ids: [],
		player_id: '',

		placed_at_datetime: '',

		comment: '',
		coaches_comment: '',
		player_submitted_notes: '',

		registration_insurance: '',

		paid: '',
		total: '',
		owes: '',
		discounts: '',
		discount_names: '',
		refunds: '',
		refund_reason: '',

		jersey_sponsors: [
			{
				name_of_sponsor: '',
				no_sponsor_bar: false,
				sponsor_line_1: '',
				sponsor_line_2: '',
				amount: null,
			},
		],
	},
	validationSchema: yup.object().shape({
		team_instances_ids: yup
			.number()
			.required('Team(s) required!'),
		player_id: yup
			.number()
			.required('Player(s) required!'),

		placed_at_datetime: yup
			.string()
			.nullable(),

		comment: yup
			.string()
			.nullable(),
		coaches_comment: yup
			.string()
			.nullable(),
		player_submitted_notes: yup
			.string()
			.nullable(),

		registration_insurance: yup
			.boolean()
			.nullable(),

		prevent_spng_from_updating_financials: yup
			.boolean()
			.nullable(),
		paid: yup
			.number()
			.nullable(),
		total: yup
			.number()
			.nullable(),
		owes: yup
			.number()
			.nullable(),
		discounts: yup
			.number()
			.nullable(),
		discount_names: yup
			.number()
			.nullable(),
		refunds: yup
			.number()
			.nullable(),
		refund_names: yup
			.number()
			.nullable(),

		jersey_sponsors: yup
			.array()
			.of(
				yup.object().shape({
					name_of_sponsor: yup
								.string()
								.required('Name of sponsor required!'),
					no_sponsor_bar: yup
									.bool()
									.nullable(),
					sponsor_line_1: yup
									.string()
									.max(20, '20 Characters Maximum!')
									.test(
										'not-no-sponsor-bar',
										'You selected no sponsor bar!',
										function(v) {
											if (!!this.parent.no_sponsor_bar) {
												return (!v);
											}
											return true;
										}
									),
					sponsor_line_2: yup
									.string()
									.max(20, '20 Characters Maximum!')
									.test(
										'not-no-sponsor-bar',
										'You selected no sponsor bar!',
										function(v) {
											if (!!this.parent.no_sponsor_bar) {
												return (!v);
											}
											return true;
										}
									)
									.test(
										'sponsor-line-1-must-be-given',
										'Sponsor line 1 must be given',
										function(v) {
										if (!this.parent.sponsor_line_1) {
											return (!v);
										}
										return true;
									}),
					amount: yup
							.number()
							.typeError('Must be valid amount!')
							.required('Must be valid amount!')
							// .nullable()
							.label('Tag'),
				}),
			),
	}),
	onSubmit: values => {

		loading = true;

		let body_data = JSON.stringify(values);

		submitForm(body_data).then(data => {

			alert('Saved!')

		}).catch(error => {

			msg_type = 'error';
			msg_show = true;

			alert('Error!');

		}).finally(() => {

			loading = false;

		});
		
	}
});


async function submitForm(body_data) {

	const url = `${admin_api_url}/team-instance-registrations`;

	const resp = await fetch(url, {
		method: 'POST',
		body: body_data,
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	});

	const result = await resp.json();

	if (!resp.ok) {
		msg_text = result.detail;
		throw new Error('Error!');
	}

	return result;

}



let selected_players = undefined;

function onSelectPlayer(event) {
	selected_players = event.detail;

	let form_player_id = null;

	if (event.detail) {
		form_player_id = event.detail.value;
	}

	$form.player_id = form_player_id;
}


let selected_conference_instances = undefined;

function onSelectConferenceInstance(event) {
	selected_conference_instances = event.detail;

	console.log(event);
	let form_conference_instances_ids = [];

	if (event.detail) {

		for (var i = 0; i < event.detail.length; i++) {
			form_conference_instances_ids.push(event.detail[i].value);
		}

	}

	$form.conference_instances_ids = form_conference_instances_ids;
}



let selected_division_instances = undefined;

function onSelectDivisionInstance(event) {
	selected_division_instances = event.detail;

	console.log(event);
	let form_division_instances_ids = [];

	if (event.detail) {

		for (var i = 0; i < event.detail.length; i++) {
			form_division_instances_ids.push(event.detail[i].value);
		}

	}

	$form.division_instances_ids = form_division_instances_ids;
}



let selected_team_instances = undefined;

function onSelectTeamInstance(event) {
	selected_team_instances = event.detail;

	console.log(event);
	let form_team_instances_ids = [];

	if (event.detail) {

		for (var i = 0; i < event.detail.length; i++) {
			form_team_instances_ids.push(event.detail[i].value);
		}

	}

	$form.team_instances_ids = form_team_instances_ids;
}



function addNewJerseySponsor() {

	$form.jersey_sponsors = [...$form.jersey_sponsors, {
		name_of_sponsor: '',
		no_sponsor_bar: false,
		sponsor_line_1: '',
		sponsor_line_2: '',
		amount: null,
	}];


}


function removeJerseySponsor(i) {

	// ---
	$form.jersey_sponsors.splice(i, 1);

	$form.jersey_sponsors = $form.jersey_sponsors;

	$errors.jersey_sponsors.splice(i, 1);

	$errors.jersey_sponsors = $errors.jersey_sponsors;

	// console.log($errors.jersey_sponsors);

}



</script>



<style>

form {
	
}

</style>



<form on:submit={handleSubmit}>

	<!-- <div class="field">

		<div class="control">

			<label>Conferences (Used for filtering down divisions list)</label>

			<Select items={conference_instances_values} isMulti={true} on:select={onSelectConferenceInstance} bind:selectedValue={selected_conference_instances}></Select>

		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>Divisions (Used for filtering down teams list)</label>

			<Select items={division_instances_values} isMulti={true} on:select={onSelectDivisionInstance} bind:selectedValue={selected_division_instances}></Select>

		</div>

	</div> -->

	<div class="field">

		<div class="control">

			<label>Team(s) (Required)</label>

			<Select items={team_instances_values} isMulti={true} on:select={onSelectTeamInstance} bind:selectedValue={selected_team_instances}></Select>

			{#if $errors.team_instances_ids}
				<FormFieldError detail={$errors.team_instances_ids} />
			{/if}

		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>Player (Required)</label>

			<Select items={players_values} on:select={onSelectPlayer} bind:selectedValue={selected_players}></Select>

			{#if $errors.name}
				<FormFieldError detail={$errors.name} />
			{/if}

		</div>

	</div>

	<!-- <br>

	<div class="field">

		<div class="control">

			<label>Placed at</label>

			<input type="datetime-local" class="input" step="1" name="placed_at_datetime" id="placed_at_datetime" bind:value={$form.placed_at_datetime}>

			{#if $errors.placed_at_datetime}
				<FormFieldError detail={$errors.placed_at_datetime} />
			{/if}

		</div>

	</div> -->

	<br>

	<div class="field">

		<div class="control">

			<label>Comment</label>

			<textarea class="textarea" name="comment" id="comment" bind:value={$form.comment}></textarea>

			{#if $errors.comment}
				<FormFieldError detail={$errors.comment} />
			{/if}

		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>Coaches Comment</label>

			<textarea class="textarea" name="coaches_comment" id="coaches_comment" bind:value={$form.coaches_comment}></textarea>

			{#if $errors.coaches_comment}
				<FormFieldError detail={$errors.coaches_comment} />
			{/if}

		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>Player Submitted Notes</label>

			<textarea class="textarea" name="player_submitted_notes" id="player_submitted_notes" bind:value={$form.player_submitted_notes}></textarea>

			{#if $errors.player_submitted_notes}
				<FormFieldError detail={$errors.player_submitted_notes} />
			{/if}

		</div>

	</div>

	<br>

	<div class="field">

		<div class="control">

			<label class="checkbox" style="border: 1px solid var(--border); padding: 0.75rem; border-radius: 3px;">
				<input type="checkbox" bind:value={$form.registration_insurance} on:change={handleChange} style="margin-right: 0.75rem;">
				Registration Insurance?
			</label>

			{#if $errors.registration_insurance}
				<small>{$errors.registration_insurance}</small>
			{/if}

		</div>

	</div>

	<br>

	<MsgCard msg_text={'Financials'} />

	<div class="field">

		<div class="control">

			<label class="checkbox" style="border: 1px solid var(--border); padding: 0.75rem; border-radius: 3px;">
				<input type="checkbox" bind:value={$form.prevent_spng_from_updating_financials} on:change={handleChange} style="margin-right: 0.75rem;">
				Prevent SportsEngine from updating financials?
			</label>

			{#if $errors.prevent_spng_from_updating_financials}
				<small>{$errors.prevent_spng_from_updating_financials}</small>
			{/if}

		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>$ Paid (Optional)</label>


			<input placeholder="$ Paid" class="input" type="number" step=".01" id="paid" name="paid" on:change={handleChange} bind:value={$form.paid}>

			{#if $errors.paid}
				<small>{$errors.paid}</small>
			{/if}
			
		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>$ Total (Optional)</label>


			<input placeholder="$ Total" class="input" type="number" step=".01" id="total" name="total" on:change={handleChange} bind:value={$form.total}>

			{#if $errors.total}
				<small>{$errors.total}</small>
			{/if}
			
		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>$ Owed (Optional)</label>


			<input placeholder="$ Owed" class="input" type="number" step=".01" id="owed" name="owed" on:change={handleChange} bind:value={$form.owed}>

			{#if $errors.owed}
				<small>{$errors.owed}</small>
			{/if}
			
		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>$ Discounts (Optional)</label>


			<input placeholder="$ Discounts" class="input" type="number" step=".01" id="discounts" name="discounts" on:change={handleChange} bind:value={$form.discounts}>

			{#if $errors.discounts}
				<small>{$errors.discounts}</small>
			{/if}
			
		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Discount Names</label>

			<textarea class="textarea" name="discount_names" id="discount_names" bind:value={$form.discount_names}></textarea>

			{#if $errors.discount_names}
				<FormFieldError detail={$errors.discount_names} />
			{/if}

		</div>

	</div>

	<!--  -->

	<div class="field">

		<div class="control">

			<label>$ Refunds (Optional)</label>


			<input placeholder="$ Refunds" class="input" type="number" step=".01" id="refunds" name="refunds" on:change={handleChange} bind:value={$form.refunds}>

			{#if $errors.refunds}
				<small>{$errors.refunds}</small>
			{/if}
			
		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>Refund Reason(s)</label>

			<textarea class="textarea" name="refund_reason" id="refund_reason" bind:value={$form.refund_reason}></textarea>

			{#if $errors.refund_reason}
				<FormFieldError detail={$errors.refund_reason} />
			{/if}

		</div>

	</div>

	<br>

	<br>

	<!-- if spring hockey -->

	<MsgCard msg_text={'Jersey Sponsors'} />


	<!-- jersey sponsors -->
	{#each $form.jersey_sponsors as jersey_sponsor, i}

		<div class="field">

			<div class="control">

				<div class="columns is-variable is-vcentered is-2">

					<div class="column">
						<label style="margin-bottom: 0 !important; font-size: 1.225rem !important; color: #3c3c3c;">
							Sponsor {i + 1}
						</label>
					</div>

					<div class="column is-narrow">
						{#if $form.jersey_sponsors.length === 1}
						<span class="button is-custom-red is-small is-invisible" style="margin-top: 0 !important;">
							Remove
						</span>
						{:else}
						<span class="button is-custom-red is-small" style="margin-top: 0 !important;" on:click={() => removeJerseySponsor(i)}>
							Remove
						</span>
						{/if}
					</div>

				</div>

			</div>

		</div>


		<div class="field">

			<div class="control">

				<input placeholder="Name of Sponsor" class="input" type="text" id="jersey_sponsors.{i}.name_of_sponsor" name="jersey_sponsors.{i}.name_of_sponsor" on:change={handleChange} bind:value={$form.jersey_sponsors[i].name_of_sponsor} disabled={loading}>

				{#if $errors.jersey_sponsors[i]}
					{#if $errors.jersey_sponsors[i].name_of_sponsor}
					<FormFieldError detail={$errors.jersey_sponsors[i].name_of_sponsor} />
					{/if}
				{/if}

			</div>

		</div>


		<!-- -- -->


		<div class="field">

			<div class="control">

				<input placeholder="Sponsor Line 1" class="input" type="text" id="jersey_sponsors.{i}.sponsor_line_1" name="jersey_sponsors.{i}.sponsor_line_1" on:change={handleChange} bind:value={$form.jersey_sponsors[i].sponsor_line_1} disabled={loading}>

				{#if $errors.jersey_sponsors[i]}
					{#if $errors.jersey_sponsors[i].sponsor_line_1}
					<FormFieldError detail={$errors.jersey_sponsors[i].sponsor_line_1} />
					{/if}
				{/if}

			</div>

		</div>


		<div class="field">

			<div class="control">

				<input placeholder="Sponsor Line 2" class="input" type="text" id="jersey_sponsors.{i}.sponsor_line_2" name="jersey_sponsors.{i}.sponsor_line_2" on:change={handleChange} bind:value={$form.jersey_sponsors[i].sponsor_line_2} disabled={loading}>

				{#if $errors.jersey_sponsors[i]}
					{#if $errors.jersey_sponsors[i].sponsor_line_2}
					<FormFieldError detail={$errors.jersey_sponsors[i].sponsor_line_2} />
					{/if}
				{/if}

			</div>

		</div>


		<div class="field">

			<div class="control">

				<input placeholder="Sponsor Amount" class="input" type="number" id="jersey_sponsors.{i}.amount" name="jersey_sponsors.{i}.amount" on:change={handleChange} bind:value={$form.jersey_sponsors[i].amount} disabled={loading}>

				{#if $errors.jersey_sponsors[i]}
					{#if $errors.jersey_sponsors[i].amount}
					<FormFieldError detail={$errors.jersey_sponsors[i].amount} />
					{/if}
				{/if}

			</div>

		</div>


		{#if $form.jersey_sponsors.length > 1 && i !== $form.jersey_sponsors.length - 1}
		<hr style="">
		{/if}


	{/each}


	<br>

	<div class="field is-grouped">

		<div class="control is-expanded">

			<button class="button is-blue is-fullwidth">
				<span>Create</span>
				<i class="fas fa-circle-notch fa-spin" class:is-hidden={!loading}></i>
			</button>

		</div>


	</div>

</form>



<!-- jersey -->
