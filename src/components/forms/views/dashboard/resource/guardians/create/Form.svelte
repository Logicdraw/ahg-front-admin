<script>
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
// const hcaptcha_site_key = app_.env.HCAPTCHA_SITE_KEY;

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
		full_name: '',
		email: '',
		mobile_phone: '',
		home_phone: '',
		work_phone: '',
		players_ids: [],
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
				yup.number().required(),
			),
	}),
	onSubmit: values => {

		loading = true;

		let body_data = JSON.stringify(values);

		submitForm(body_data).then(data => {

			// ...

		}).catch(error => {

			msg_type = 'error';
			msg_show = true;

		}).finally(() => {

			loading = false;

		});
		
	}
});


async function submitForm(body_data) {

	const url = `${admin_api_url}/guardians`;

	const resp = await fetch(url, {
		method: 'POST',
		body: body_data,
	});

	const result = await resp.json();

	if (!resp.ok) {
		msg_text = result.detail;
		throw new Error('Error!');
	}

	return result;

}



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

	<div class="field is-grouped">

		<div class="control is-expanded">

			<button class="button is-blue is-fullwidth">
				<span>Create</span>
				<i class="fas fa-circle-notch fa-spin" class:is-hidden={!loading}></i>
			</button>

		</div>


	</div>

</form>


