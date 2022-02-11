<script>
export let msg_show;
export let msg_text;
export let msg_type;
export let adult_free_agent_id;
export let delete_modal_is_active = null;



import { auth } from 'store/index.js';


import { getContext } from 'svelte';

const { refreshTable } = getContext('refresh_adult_free_agents_table');


import { get } from 'svelte/store';
import { createForm } from 'svelte-forms-lib';
import * as yup from 'yup';
import { navigateTo, Navigate } from 'svelte-router-spa';

import { onMount } from 'svelte';


import FormFieldError from 'components/forms/FormFieldError.svelte';

import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';


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
		// is_delete: true,
		submit: true,
	},
	validationSchema: yup.object().shape({
		submit: yup
			.bool(),
	}),
	onSubmit: values => {

		loading = true;

		let body_data = JSON.stringify(values);

		submitForm(body_data).then(data => {

			alert('Free agent deleted!');

			if (delete_modal_is_active != null) {
				delete_modal_is_active = false;
			}

			refreshTable();

		}).catch(error => {

			msg_type = 'error';
			msg_show = true;

			console.log(error);

			alert('Error!');

		}).finally(() => {

			loading = false;

		});
		
	}
});


async function submitForm(body_data) {

	const url = `${admin_api_url}/_other/_adult_hockey/free-agents/${adult_free_agent_id}`;

	const resp = await fetch(url, {
		method: 'DELETE',
		// body: body_data,
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	});

	if (!resp.ok) {
		console.log(result);
		throw new Error('Error!');
	}

	return resp;

}



</script>



<style>

form {
	
}

</style>



<form on:submit={handleSubmit}>

	<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={`Do you wish to delete this free agent?`} />
	<!-- <br> -->

	<div class="field is-grouped">

		<div class="control is-expanded">

			<button class="button is-blue is-fullwidth">
				<span>Delete Free Agent</span>
				<i class="fas fa-circle-notch fa-spin" class:is-hidden={!loading}></i>
			</button>

		</div>


	</div>

</form>




