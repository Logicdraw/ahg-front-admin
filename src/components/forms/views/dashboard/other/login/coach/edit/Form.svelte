<script>
export let coach;

export let msg_show;
export let msg_text;
export let msg_type;


import { randomString } from 'utils/_random.js';


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
		name: '',
		email: '',
		password: randomString(8),
	},
	validationSchema: yup.object().shape({
		name: yup
			.string()
			.required('Full name required!'),
		email: yup
			.string()
			.email('Email required!')
			.required('Email required!'),
		password: yup
			.string()
			.required('Password required!'),
	}),
	onSubmit: values => {

		loading = true;

		let body_data = JSON.stringify(values);

		submitForm(body_data).then(data => {

			alert('Saved!');
			// redirect ... ()

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

	const url = `${admin_api_url}/_other/_logins/coaches`;

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

</style>



<form on:submit={handleSubmit}>

	<div class="field">

		<div class="control">

			<label>Full Name (Required)</label>

			<input placeholder="Full Name" class="input" type="text" id="name" name="name" on:change={handleChange} bind:value={$form.name}>

			{#if $errors.name}
				<FormFieldError detail={$errors.name} />
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

			<label>Login Code</label>

			<input placeholder="Login Code" class="input" type="text" id="password" name="password" on:change={handleChange} bind:value={$form.password} disabled>

			{#if $errors.password}
				<FormFieldError detail={$errors.password} />
			{/if}

		</div>

	</div>

	<!-- name -->

	<!-- ... -->



</form>




