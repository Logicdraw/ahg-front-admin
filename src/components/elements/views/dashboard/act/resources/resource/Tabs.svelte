<script>
export let params;
export let act_resource_id;

// import ExportModal from 'components/elements/views/dashboard/resources/resource/modals/Export.svelte';
import SelectColumnsModal from 'components/elements/views/dashboard/act/resources/resource/modals/SelectColumns.svelte';
// import FilterModal from 'components/elements/views/dashboard/resources/resource/modals/Filter.svelte';


import { Navigate } from 'svelte-router-spa';


// let export_modal_is_active = false;

// async function openExportModal() {
// 	export_modal_is_active = true;
// }


let select_columns_modal_is_active = false;

async function openSelectColumnsModal() {
	select_columns_modal_is_active = true;
}


</script>


<style>

</style>



<!-- <ExportModal bind:export_modal_is_active={export_modal_is_active} {params} /> -->

<SelectColumnsModal bind:select_columns_modal_is_active={select_columns_modal_is_active} />


<div>

	<div class="field is-grouped">

		<!-- <div class="control">

			<span class="button is-normal" on:click={openExportModal}>
				Export Rows
				<i class="far fa-file-export"></i>
			</span>

		</div> -->

		<div class="control">

			<span class="button is-normal" on:click={openSelectColumnsModal}>
				Select Columns
			</span>

		</div>

		<!-- <div class="control">

			<span class="button is-normal" on:click={SelectColumnsModal}>
				Create Player
				<i class="fal fa-file-plus"></i>
			</span>

		</div> -->

		<!-- <div class="control">

		</div> -->

	</div>

</div>

<!-- ... -->

<!-- Filter button... -->


