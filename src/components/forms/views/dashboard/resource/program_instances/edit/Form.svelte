<script>
export let program_instance;

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
		name: program_instance.programs_sc.name || null,
		year_start: program_instance.year_start || null,
		year_end: program_instance.year_end || null,
	},
	validationSchema: yup.object().shape({
		name: yup
			.string()
			.required('Program Name required!'),
		year_start: yup
			.number()
			.required('Year Start required!'),
		year_end: yup
			.number()
			.required('Year End required!'),
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

	const url = `${admin_api_url}/_resources/_programs/_program_instance/program-instances/${program_instance.id}`;

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



</script>



<style>

form {
	
}

</style>



<form on:submit={handleSubmit}>

	<div class="field">

		<div class="control">

			<label>Name (Required)</label>

			<input placeholder="Name" class="input" type="text" id="name" name="name" on:change={handleChange} bind:value={$form.name}>

			{#if $errors.name}
				<FormFieldError detail={$errors.name} />
			{/if}

		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>Year Start (Required)</label>

			<input placeholder="Year Start" class="input" type="text" id="year_start" name="year_start" on:change={handleChange} bind:value={$form.year_start}>

			{#if $errors.year_start}
				<FormFieldError detail={$errors.year_start} />
			{/if}

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Year End (Required)</label>

			<input placeholder="Year End" class="input" type="text" id="year_end" name="year_end" on:change={handleChange} bind:value={$form.year_end}>

			{#if $errors.year_end}
				<FormFieldError detail={$errors.year_end} />
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


