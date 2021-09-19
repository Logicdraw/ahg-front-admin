<script>
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
		new_password: '',
		confirm_new_password: '',
	},
	validationSchema: yup.object().shape({
		new_password: yup
			.string()
			.required('New Password Required!'),
		confirm_new_password: yup
			.string()
			.required('Confirm New Password Required!'),
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

	const url = `${admin_api_url}/admin/update-password`;

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



</script>



<style>

form {
	
}

</style>



<form on:submit={handleSubmit}>

	<div class="field">

		<div class="control">

			<label>New Password (Required)</label>

			<input placeholder="New Password" class="input" type="text" id="new_password" name="new_password" on:change={handleChange} bind:value={$form.new_password}>

			{#if $errors.new_password}
				<FormFieldError detail={$errors.new_password} />
			{/if}

		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>Confirm New Password (Required)</label>

			<input placeholder="Confirm New Password" class="input" type="text" id="confirm_new_password" name="confirm_new_password" on:change={handleChange} bind:value={$form.confirm_new_password}>

			{#if $errors.confirm_new_password}
				<FormFieldError detail={$errors.confirm_new_password} />
			{/if}

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


