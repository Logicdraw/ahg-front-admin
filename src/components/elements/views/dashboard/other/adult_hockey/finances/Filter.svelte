<script>
export let url_params;
export let at_last_page;

// export let league_instances;
// export let division_instances;
export let team_instances;


import { onMount } from 'svelte';



// console.log(league_instances);


// let active_league_instances = league_instances;
// // for

// let active_division_instances = division_instances;
// // for

let active_team_instances = team_instances;
// for





function goToPrevPage() {
	if (url_params.offset > 0) {
		url_params.offset = url_params.offset - url_params.limit;
	}
}


function goToNextPage() {
	if (!at_last_page) {
		url_params.offset = url_params.offset + url_params.limit;
	}
}

</script>


<style>


</style>


<div class="is-hidden-touch">

	<div class="field is-grouped">

		<div class="control is-expanded has-icons-right">

			<input class="input" placeholder="Search by first name + last name, email" bind:value={url_params['q']}>

			<span class="icon is-right">
				<i class="fas fa-search"></i>
			</span>

		</div>


		<!-- <div class="control">

			<div class="select">
				<select bind:value={url_params['league_instance_id']}>
					<option value="">League</option>
					{#each active_league_instances as active_league_instance}
						<option value="{active_league_instance.id}">{active_league_instance.name}</option>
					{/each}
				</select>
			</div>

		</div>

		<div class="control">

			<div class="select">
				<select bind:value={url_params['division_instance_id']}>
					<option value="">Division</option>
					{#each active_division_instances as active_division_instance}
						<option value="{active_division_instance.id}">{active_division_instance.name}</option>
					{/each}
				</select>
			</div>

		</div> -->

		<div class="control">

			<div class="select">
				<!-- <select bind:value={url_params['team_instance_id']}>
					<option value="">Team</option>
					{#each active_team_instances as active_team_instance}
						<option value="{active_team_instance.id}">{active_team_instance.name}</option>
					{/each}
				</select> -->
				<select bind:value={url_params['team_instance_id']}>
					<option value="">Team</option>
					{#each active_team_instances as active_team_instance}
						<option value="{active_team_instance.id}">{active_team_instance.teams_sc.name}</option>
					{/each}
				</select>
			</div>

		</div>


		<div class="control">

			<div class="buttons">

				{#if url_params.offset > 0}

				<a class="button paginate-button" on:click={goToPrevPage}>
					<i class="far fa-angle-left"></i>
				</a>

				{:else}

				<a class="button paginate-button" disabled>
					<i class="far fa-angle-left"></i>
				</a>

				{/if}



				{#if !at_last_page}

				<a class="button paginate-button" on:click={goToNextPage}>
					<i class="far fa-angle-right"></i>
				</a>

				{:else}

				<a class="button paginate-button" disabled>
					<i class="far fa-angle-right"></i>
				</a>

				{/if}


			</div>

		</div>


	</div>

</div>



<div class="is-hidden-desktop is-hidden-mobile">

	<div class="field is-grouped">

		<div class="control is-expanded has-icons-right">

			<input class="input" placeholder="Search by first name + last name" bind:value={url_params['q']}>

			<span class="icon is-right">
				<i class="fas fa-search"></i>
			</span>

		</div>


		<div class="control">

			<div class="buttons">

				{#if url_params.offset > 0}

				<a class="button paginate-button" on:click={goToPrevPage}>
					<i class="far fa-angle-left"></i>
				</a>

				{:else}

				<a class="button paginate-button" disabled>
					<i class="far fa-angle-left"></i>
				</a>

				{/if}



				{#if !at_last_page}

				<a class="button paginate-button" on:click={goToNextPage}>
					<i class="far fa-angle-right"></i>
				</a>

				{:else}

				<a class="button paginate-button" disabled>
					<i class="far fa-angle-right"></i>
				</a>

				{/if}


			</div>

		</div>


	</div>

	<div class="field is-grouped">

		<!-- <div class="control">

			<div class="select">
				<select bind:value={url_params['league_instance_id']}>
					<option value="">League</option>
					{#each active_league_instances as active_league_instance}
						<option value="{active_league_instance.id}">{active_league_instance.name}</option>
					{/each}
				</select>
			</div>

		</div>

		<div class="control">

			<div class="select">
				<select bind:value={url_params['division_instance_id']}>
					<option value="">Division</option>
					{#each active_division_instances as active_division_instance}
						<option value="{active_division_instance.id}">{active_division_instance.name}</option>
					{/each}
				</select>
			</div>

		</div> -->

		<div class="control">

			<div class="select">
				<!-- <select bind:value={url_params['team_instance_id']}>
					<option value="">Team</option>
					{#each active_team_instances as active_team_instance}
						<option value="{active_team_instance.id}">{active_team_instance.name}</option>
					{/each}
				</select> -->
				<select bind:value={url_params['team_instance_id']}>
					<option value="">Team</option>
					{#each active_team_instances as active_team_instance}
						<option value="{active_team_instance.id}">{active_team_instance.teams_sc.name}</option>
					{/each}
				</select>
			</div>

		</div>

	</div>

</div>



<div class="is-hidden-desktop is-hidden-tablet">

	<div class="field is-grouped">

		<div class="control is-expanded has-icons-right">

			<input class="input" placeholder="Search by first name + last name" bind:value={url_params['q']}>

			<span class="icon is-right">
				<i class="fas fa-search"></i>
			</span>

		</div>


		<div class="control">

			<div class="buttons">

				{#if url_params.offset > 0}

				<a class="button paginate-button" on:click={goToPrevPage}>
					<i class="far fa-angle-left"></i>
				</a>

				{:else}

				<a class="button paginate-button" disabled>
					<i class="far fa-angle-left"></i>
				</a>

				{/if}



				{#if !at_last_page}

				<a class="button paginate-button" on:click={goToNextPage}>
					<i class="far fa-angle-right"></i>
				</a>

				{:else}

				<a class="button paginate-button" disabled>
					<i class="far fa-angle-right"></i>
				</a>

				{/if}


			</div>

		</div>

	</div>

	<!-- <div class="field is-grouped">

		<div class="control">

			<div class="select">
				<select bind:value={url_params['league_instance_id']}>
					<option value="">League</option>
					{#each active_league_instances as active_league_instance}
						<option value="{active_league_instance.id}">{active_league_instance.name}</option>
					{/each}
				</select>
			</div>

		</div>

	</div> -->

	<!-- <div class="field is-grouped">

		<div class="control">

			<div class="select">
				<select bind:value={url_params['division_instance_id']}>
					<option value="">Division</option>
					{#each active_division_instances as active_division_instance}
						<option value="{active_division_instance.id}">{active_division_instance.name}</option>
					{/each}
				</select>
			</div>

		</div>

	</div> -->

	<div class="field is-grouped">

		<div class="control">

			<div class="select">
				<!-- <select bind:value={url_params['team_instance_id']}>
					<option value="">Team</option>
					{#each active_team_instances as active_team_instance}
						<option value="{active_team_instance.id}">{active_team_instance.name}</option>
					{/each}
				</select> -->
				<select bind:value={url_params['team_instance_id']}>
					<option value="">Team</option>
					{#each active_team_instances as active_team_instance}
						<option value="{active_team_instance.id}">{active_team_instance.teams_sc.name}</option>
					{/each}
				</select>
			</div>

		</div>

	</div>



</div>



