<script>
export let spng_survey_camp_instance;

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
		name: spng_survey_camp_instance.name || null,
		survey_id: spng_survey_camp_instance.survey_id || null,
	},
	validationSchema: yup.object().shape({
		name: yup
			.string()
			.required(),
		survey_id: yup
			.number()
			.required(),
	}),
	onSubmit: values => {

		return;

		// loading = true;

		// let body_data = JSON.stringify(values);

		// submitForm(body_data).then(data => {

		// 	alert('Saved!');

		// }).catch(error => {

		// 	msg_type = 'error';
		// 	msg_show = true;

		// 	alert('Error!');

		// }).finally(() => {

		// 	loading = false;

		// });
		
	}
});


async function submitForm(body_data) {

	const url = `${admin_api_url}/_resources/_spng_surveys/spng-survey-camp-instances/${spng_survey_camp_instance.id}`;

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

			<input type="text" name="name" id="name" class="input" placeholder="Name" on:change={handleChange} bind:value={$form.name} readonly>

			{#if $errors.name}
				<FormFieldError detail={$errors.name} />
			{/if}

		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>Survey ID (Required)</label>

			<input type="text" name="survey_id" id="survey_id" class="input" placeholder="Survey ID" on:change={handleChange} bind:value={$form.survey_id} readonly>

			{#if $errors.survey_id}
				<FormFieldError detail={$errors.survey_id} />
			{/if}

		</div>

	</div>

	<br>

	<!-- <div class="field is-grouped">

		<div class="control is-expanded">

			<button class="button is-blue is-fullwidth">
				<span>Save Changes</span>
				<i class="fas fa-circle-notch fa-spin" class:is-hidden={!loading}></i>
			</button>

		</div>


	</div>
 -->
</form>


	