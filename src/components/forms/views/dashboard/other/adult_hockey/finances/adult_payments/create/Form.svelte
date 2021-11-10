<script>
export let msg_show;
export let msg_text;
export let msg_type;


import { auth } from 'store/index.js';


import { getContext } from 'svelte';

const { refreshTable } = getContext('refresh_adult_payments_table');

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




async function getTeamInstances() {

	// --

	let params_string = new URLSearchParams({
		season_instance_id: '2',
		limit: 10000,
	}).toString();

	const url = `${admin_api_url}/_resources/_programs/_team_instance/team-instances?${params_string}`;

	const resp = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const result = await resp.json();

	if (!resp.ok) {
		throw new Error(result.detail);
	}

	return result;

}


let promise = getTeamInstances();




const {
	form,
	errors,
	state,
	// handleBlur,
	handleReset,
	handleChange,
	handleSubmit,
	setField,
} = createForm({
	initialValues: {
		first_name: '',
		last_name: '',
		team_instance_id: '',
		placed_at_datetime: '',
		amount: '',
		notes: '',
		is_cancel: '0',
	},
	validationSchema: yup.object().shape({
		first_name: yup
			.string()
			.required('First name required!'),
		last_name: yup
			.string()
			.required('Last name required!'),
		team_instance_id: yup
			.number()
			.required('Team required!'),
		placed_at_datetime: yup
			.string()
			.required('Placed at required!'),
		amount: yup
			.number()
			.required('Amount required!'),
		notes: yup
			.string()
			.required('Notes required!'),
		is_cancel: yup
			.bool(),
	}),
	onSubmit: values => {

		loading = true;

		if (values['placed_at_datetime']) {
			values['placed_at_datetime'] = values['placed_at_datetime'] + '+00:00';
		}

		let body_data = JSON.stringify(values);

		submitForm(body_data).then(data => {

			alert('Saved! Create another payment:');

			handleReset();

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

	const url = `${admin_api_url}/_other/_adult_hockey_finances/adult-payments`;

	const resp = await fetch(url, {
		method: 'POST',
		body: body_data,
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	});

	if (!resp.ok) {
		throw new Error('Error!');
	}


}



</script>



<style>

form {
	
}

</style>


{#await promise}

<Loading />

{:then team_instances}

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

			<label>Team (Required)</label>

			<div class="select is-fullwidth">
				<select bind:value={$form.team_instance_id}>
					<option value="">Team</option>
					{#each team_instances as team_instance}
					<option value="{team_instance.id}">
						{team_instance.teams_sc.name}
						(Division: {team_instance.teams_sc.divisions_sc.name}, {team_instance.teams_sc.leagues_sc.name})
					</option>
					{/each}
				</select>
			</div>

			<!-- select! -->

			{#if $errors.team_instance_id}
				<FormFieldError detail={`Must choose a valid team!`} />
			{/if}

		</div>

	</div>

	<div class="field">

		<div class="control">

			<label>Placed At (Required)</label>

			<input type="datetime-local" name="placed_at_datetime" class="input" bind:value={$form.placed_at_datetime}>

			{#if $errors.placed_at_datetime}
				<FormFieldError detail={$errors.placed_at_datetime} />
			{/if}

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Amount (Required)</label>

			<input placeholder="Amount" class="input" type="number" step=".01" id="amount" name="amount" on:change={handleChange} bind:value={$form.amount}>

			{#if $errors.amount}
				<FormFieldError detail={`Valid amount must be required!`} />
			{/if}

		</div>

	</div>


	<div class="field">

		<div class="control">

			<label>Notes (Required)</label>

			<input placeholder="Notes" class="input" type="text" id="notes" name="notes" on:change={handleChange} bind:value={$form.notes}>

			{#if $errors.notes}
				<FormFieldError detail={$errors.notes} />
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

{:catch error}

<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={error.detail} />

{/await}

