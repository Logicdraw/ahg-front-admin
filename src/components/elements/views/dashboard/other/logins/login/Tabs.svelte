<script>
export let params;
export let login_id;
export let login_has_create_form;

// import ExportModal from 'components/elements/views/dashboard/logins/login/modals/Export.svelte';
// import SelectColumnsModal from 'components/elements/views/dashboard/logins/login/modals/SelectColumns.svelte';
// import FilterModal from 'components/elements/views/dashboard/logins/login/modals/Filter.svelte';


import { Navigate } from 'svelte-router-spa';



let export_modal_is_active = false;

let select_columns_modal_is_active = false;

</script>


<style>

</style>



<!-- <ExportModal bind:export_modal_is_active {params} /> -->

<!-- <SelectColumnsModal bind:select_columns_modal_is_active /> -->


<div>

	<div class="field is-grouped">

		<div class="control">

			<span class="button is-normal" on:click={() => export_modal_is_active = true}>
				Export Rows
				<i class="far fa-file-export"></i>
			</span>

		</div>

		<!-- <div class="control">

			<span class="button is-normal" on:click={() => select_columns_modal_is_active = true}>
				Select Columns
			</span>

		</div> -->


		{#if login_has_create_form}

		<div class="control">

			<Navigate to='/my/login/create/{login_id}' styles="button is-normal">
				Create
				<i class="fal fa-plus"></i>
			</Navigate>

		</div>

		{/if}


	</div>

</div>


