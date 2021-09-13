<script>
export let guardian;
export let players;

export let msg_show;
export let msg_text;
export let msg_type;


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import { createForm } from 'svelte-forms-lib';
import * as yup from 'yup';
import { navigateTo, Navigate } from 'svelte-router-spa';

import { onMount } from 'svelte';


import FormFieldError from 'components/forms/FormFieldError.svelte';

import Select from 'svelte-select';



const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;



let loading = false;

let players_ids = [];


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
		full_name: guardian.full_name || null,
		email: guardian.email || null,
		mobile_phone: guardian.mobile_phone || null,
		home_phone: guardian.home_phone || null,
		work_phone: guardian.work_phone || null,
		players_ids: initial_players_ids,
	},
	validationSchema: yup.object().shape({
		full_name: yup
			.string()
			.required('Full name required!'),
		email: yup
			.string()
			.email('Email required!')
			.required('Email required!'),
		mobile_phone: yup
			.string()
			.nullable(),
		home_phone: yup
			.string()
			.nullable(),
		work_phone: yup
			.string()
			.nullable(),
		players_ids: yup
			.array()
			.of(
				yup.number(),
			),
	}),
	onSubmit: values => {

		loading = true;

		let body_data = JSON.stringify(values);

		submitForm(body_data).then(data => {

			// ...
			alert('Saved!');

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

	const url = `${admin_api_url}/guardians/${guardian.id}`;

	const resp = await fetch(url, {
		method: 'PUT',
		body: body_data,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const result = await resp.json();

	if (!resp.ok) {
		msg_text = result.detail;
		throw new Error('Error!');
	}

	return result;

}



// const players_values = [];

// for (var i = 0; i < players.length; i++) {

// 	let player_label = players[i].first_name + ' ' + players[i].last_name;

// 	if (players[i].date_of_birth) {
// 		player_label += ' (' + players[i].date_of_birth + ')';
// 	}

// 	if (players[i].street_address_1) {
// 		player_label += ' - ' + players[i].street_address_1 + ',';
// 	}

// 	if (players[i].city) {
// 		player_label += ' ' + players[i].city + ',';
// 	}

// 	if (players[i].province) {
// 		player_label += ' ' + players[i].province + '';
// 	}

// 	let player_value_obj = {
// 		value: players[i].id,
// 		label: player_label,
// 	};

// 	players_values.push(player_value_obj);
// }



// let selected_players = undefined;

// function onSelectPlayer(event) {
// 	selected_players = event.detail;

// 	let form_players_ids = [];

// 	if (event.detail) {

// 		for (var i = 0; i < event.detail.length; i++) {
// 			form_players_ids.push(event.detail[i].value);
// 		}

// 	}

// 	$form.players_ids = form_players_ids;
// }


</script>



<style>

form {
	
}

</style>



<form on:submit={handleSubmit}>

	<div class="field">

		<div class="control">

			<label>Full Name (Required)</label>

			<input placeholder="Full Name" class="input" type="text" id="full_name" name="full_name" on:change={handleChange} bind:value={$form.full_name}>

			{#if $errors.full_name}
				<FormFieldError detail={$errors.full_name} />
			{/if}

		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>Email (Required)</label>

			<input placeholder="Email" class="input" type="text" id="email" name="email" on:change={handleChange} bind:value={$form.email}>

			{#if $errors.email}
				<FormFieldError detail={$errors.email} />
			{/if}

		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>Mobile Phone</label>

			<input placeholder="Mobile Phone" class="input" type="text" id="mobile_phone" name="mobile_phone" on:change={handleChange} bind:value={$form.mobile_phone}>

			{#if $errors.mobile_phone}
				<FormFieldError detail={$errors.mobile_phone} />
			{/if}

		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>Home Phone</label>

			<input placeholder="Home Phone" class="input" type="text" id="home_phone" name="home_phone" on:change={handleChange} bind:value={$form.home_phone}>

			{#if $errors.home_phone}
				<FormFieldError detail={$errors.home_phone} />
			{/if}

		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>Work Phone</label>

			<input placeholder="Mobile Phone" class="input" type="text" id="work_phone" name="work_phone" on:change={handleChange} bind:value={$form.work_phone}>

			{#if $errors.work_phone}
				<FormFieldError detail={$errors.work_phone} />
			{/if}

		</div>

	</div>

	<br>

	<div class="field">

		<div class="control">

			<label>Player(s)</label>

			<!-- <Select items={players_values} isMulti={true} on:select={onSelectPlayer} bind:selectedValue={selected_players}></Select> -->


			<!-- {#if $errors.players_ids}
				<FormFieldError detail={$errors.players_ids} />

			{/if} -->

		</div>

	</div>

	<br>

	<div class="field is-grouped">

		<div class="control is-expanded">

			<button class="button is-blue is-fullwidth">
				<span>Save Changes</span>
				<i class="fas fa-circle-notch fa-spin" class:is-hidden={!loading}></i>
			</button>

		</div>


	</div>

</form>


