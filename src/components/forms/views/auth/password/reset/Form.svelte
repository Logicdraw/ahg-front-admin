<script>
export let msg_show;
export let msg_text;
export let msg_type;

export let show_resend_option;

export let email_to;


import { createForm } from 'svelte-forms-lib';
import * as yup from 'yup';


import { Navigate } from 'svelte-router-spa';


const auth_api_url = app_.env.AUTH_API_URL;
let loading = false;


const { form, errors, state, handleChange, handleSubmit } = createForm({
	initialValues: {
		email: '',
	},
	validationSchema: yup.object().shape({
		email: yup
			.string()
			.email()
			.required(),
	}),
	onSubmit: values => {

		loading = true;

		submitForm(values.email).then(data => {

			msg_type = 'success';
			msg_show = true;

			email_to = values.email;
			show_resend_option = true;

		}).catch(error => {

			msg_type = 'error';
			msg_show = true;

		}).finally(() => {

			loading = false;

		});

	}
});


async function submitForm(email) {

	const url = `${auth_api_url}/_password/begin-reset/${email}/admin`;

	const response = await fetch(url, {
		method: 'POST',
	});

	const result = await response.json();

	if (!response.ok) {
		msg_text = result.detail;
		throw new Error('Error!');
	}

	msg_text = result.msg;
	return result;

}


</script>


<style>

#auth-password-begin-reset-form {
	
}

</style>



<form id="auth-password-begin-reset-form" on:submit={handleSubmit}>
	
	<div class="field">

		<div class="control">

			<input placeholder="Email" class="input" type="text" id="email" name="email" on:change={handleChange} bind:value={$form.email}>

		</div>

	</div>

	<div class="field is-grouped">

		<div class="control">

			<button type="submit" class="button is-blue">
				<span>Continue</span>
				<i class="fas fa-circle-notch fa-spin" class:is-hidden={!loading}></i>
			</button>

		</div>

		<div class="control">

			<Navigate styles="form-card-link" to="/auth/login">
				<span>Back to Login</span>
			</Navigate>

		</div>

	</div>

</form>



