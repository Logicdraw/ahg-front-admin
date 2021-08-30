<script>
export let player;

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
		first_name: player.first_name || '',
		last_name: player.last_name || '',
		email: player.email || '',
		mobile_phone: player.mobile_phone || '',
		date_of_birth: player.date_of_birth || '',
		medicare_number: player.medicare_number || '',
		street_address_1: player.street_address_1 || '',
		street_address_2: player.street_address_2 || '',
		postal_code: player.postal_code || '',
		country: player.country || 'Canada',
		gender: player.gender || 'Male',
		language: player.language || 'English',
	},
	validationSchema: yup.object().shape({
		first_name: yup
			.string()
			.required('First name required!'),
		last_name: yup
			.string()
			.required('Last name required!'),
		email: yup
			.string()
			.email('Email required!')
			.nullable(),
		mobile_phone: yup
			.string()
			.nullable(),
		date_of_birth: yup
			.string()
			.required('Date of Birth required!'),
		medicare_number: yup
			.string()
			.nullable(),
		street_address_1: yup
			.string()
			.nullable(),
		street_address_2: yup
			.string()
			.nullable(),
		postal_code: yup
			.string()
			.nullable(),
		city: yup
			.string()
			.nullable(),
		province: yup
			.string()
			.nullable(),
		country: yup
			.string()
			.nullable(),
		gender: yup
			.string()
			.required('Gender required!'),
		language: yup
			.string()
			.required('Language required!'),
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

	const url = `${admin_api_url}/players/${player.id}`;

	const resp = await fetch(url, {
		method: 'PUT',
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

			<label>First Name (Required)</label>

			<input placeholder="First Name" class="input" type="text" id="first_name" name="first_name" on:change={handleChange} bind:value={$form.first_name}>

			{#if $errors.first_name}
				<FormFieldError detail={$errors.first_name} />
			{/if}

		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>Last Name (Required)</label>

			<input placeholder="Last Name" class="input" type="text" id="last_name" name="last_name" on:change={handleChange} bind:value={$form.last_name}>

			{#if $errors.last_name}
				<FormFieldError detail={$errors.last_name} />
			{/if}

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Email</label>

			<input placeholder="Email" class="input" type="text" id="email" name="email" on:change={handleChange} bind:value={$form.email}>

			{#if $errors.email}
				<FormFieldError detail={$errors.email} />
			{/if}

		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>Date of Birth (Required)</label>

			<input placeholder="Date of Birth" class="input" type="date" id="date_of_birth" name="date_of_birth" on:change={handleChange} bind:value={$form.date_of_birth}>

			{#if $errors.date_of_birth}
				<FormFieldError detail={$errors.date_of_birth} />
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


	<!-- ... -->


	<div class="field">

		<div class="control">

			<label>Medicare Number</label>

			<input placeholder="Medicare Number" class="input" type="text" id="medicare_number" name="medicare_number" on:change={handleChange} bind:value={$form.medicare_number}>

			{#if $errors.medicare_number}
				<FormFieldError detail={$errors.medicare_number} />
			{/if}

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Street Address 1</label>

			<input placeholder="Street Address 1" class="input" type="text" id="street_address_1" name="street_address_1" on:change={handleChange} bind:value={$form.street_address_1}>

			{#if $errors.street_address_1}
				<FormFieldError detail={$errors.street_address_1} />
			{/if}

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Street Address 2</label>

			<input placeholder="Street Address 2" class="input" type="text" id="street_address_2" name="street_address_2" on:change={handleChange} bind:value={$form.street_address_2}>

			{#if $errors.street_address_2}
				<FormFieldError detail={$errors.street_address_2} />
			{/if}

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Postal Code</label>

			<input placeholder="Postal Code" class="input" type="text" id="postal_code" name="postal_code" on:change={handleChange} bind:value={$form.postal_code}>

			{#if $errors.postal_code}
				<FormFieldError detail={$errors.postal_code} />
			{/if}

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Country</label>

			<input placeholder="Country" class="input" type="text" id="country" name="country" on:change={handleChange} bind:value={$form.country}>

			{#if $errors.contry}
				<FormFieldError detail={$errors.country} />
			{/if}

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Gender (Required)</label>

			<div class="select is-fullwidth">

				<select id="gender" name="gender" on:change={handleChange} bind:value={$form.gender}>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</select>

			</div>
			{#if $errors.gender}
				<FormFieldError detail={$errors.gender} />
			{/if}

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Language (Required)</label>

			<div class="select is-fullwidth">

				<select id="language" name="language" on:change={handleChange} bind:value={$form.language}>
					<option value="English">English</option>
					<option value="French">French</option>
					<option value="Other">Other</option>
				</select>

			</div>
			{#if $errors.language}
				<FormFieldError detail={$errors.language} />
			{/if}

		</div>

	</div>


	<!-- ... -->

	<!-- guardians -->

	<!-- registration -->


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


