<script>
export let program_instance_registration;

export let msg_show;
export let msg_text;
export let msg_type;

export let program_instances = [];
export let players = [];


const program_instances_values = [];

for (var i = 0; i < program_instances.length; i++) {

	let program_instance_label = program_instances[i].programs_sc.name;

	if (program_instances[i].year_start && program_instances[i].year_end) {
		program_instance_label += ' (' + program_instances[i].year_start + ' - ' + program_instances[i].year_end + ')';
	} else if (program_instances.year_start) {
		program_instance_label += ' (' + program_instances[i].year_start + ')';
	} else if (program_instances.year_end) {
		program_instance_label += ' (' + program_instances[i].year_end + ')';
	}

	let program_instance_value_obj = {
		value: program_instances[i].id,
		label: program_instance_label,
	};

	program_instances_values.push(program_instance_value_obj);
}


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


let initial_program_instances_ids = [];


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
		program_instances_ids: initial_program_instances_ids,
		player_id: program_instance_registration.player_id || null,

		placed_at_datetime: program_instance_registration.placed_at_datetime || null,

		comment: program_instance_registration.comment || null,
		coaches_comment: program_instance_registration.coaches_comment || null,
		player_submitted_notes: program_instance_registration.player_submitted_notes || null,

		registration_insurance: program_instance_registration.registration_insurance || null,

		paid: program_instance_registration.paid || null,
		total: program_instance_registration.total || null,
		owes: program_instance_registration.owes || null,
		discounts: program_instance_registration.discounts || null,
		discount_names: program_instance_registration.discount_names || null,
		refunds: program_instance_registration.refunds || null,
		refund_reason: program_instance_registration.refund_reason || null,
	},
	validationSchema: yup.object().shape({
		program_instances_ids: yup
			.number()
			.required('program(s) required!'),
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

	const url = `${admin_api_url}/_resources/_registrations/_program_instance_registration/program-instance-registrations/${program_instance_registration.id}`;

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


let selected_program_instances = undefined;

function onSelectprogramInstance(event) {
	selected_program_instances = event.detail;

	console.log(event);
	let form_program_instances_ids = [];

	if (event.detail) {

		for (var i = 0; i < event.detail.length; i++) {
			form_program_instances_ids.push(event.detail[i].value);
		}

	}

	$form.program_instances_ids = form_program_instances_ids;
}


</script>



<style>

form {
	
}

</style>



<form on:submit={handleSubmit}>

	<div class="field">

		<div class="control">

			<label>Program(s) (Required)</label>

			<Select items={program_instances_values} isMulti={true} on:select={onSelectprogramInstance} bind:selectedValue={selected_program_instances}></Select>

			{#if $errors.name}
				<FormFieldError detail={$errors.name} />
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

	<br>

	<div class="field">

		<div class="control">

			<label>Placed at</label>

			<input type="datetime-local" class="input" step="1" name="placed_at_datetime" id="placed_at_datetime" bind:value={$form.placed_at_datetime}>

			{#if $errors.placed_at_datetime}
				<FormFieldError detail={$errors.placed_at_datetime} />
			{/if}

		</div>

	</div>

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
