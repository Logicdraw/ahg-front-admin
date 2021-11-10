<script>
export let url_params;
export let at_last_page;


import { onMount } from 'svelte';


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;


async function getLeagueInstances() {

	let params_string = new URLSearchParams({
		season_instance_id: '2',
		limit: 10000,
	}).toString();

	const url = `${admin_api_url}/_resources/_programs/_team_instance/league-instances?${params_string}`;

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




let active_league_instances = [];
// for


getLeagueInstances().then(data => {

	for (var i = 0; i < data.length; i++) {
		let league_instance = data[i];
		active_league_instances.push({
			id: league_instance.id,
			name: league_instance.leagues_sc.name,
		});
	}

}).catch(err => {

	// 

}).finally(() => {

});








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


		<div class="control">

			<div class="select">
				<!-- loading -->
				<select bind:value={url_params['league_instance_id']}>
					<option value="">League</option>
					{#each active_league_instances as active_league_instance}
						<option value="{active_league_instance.id}">{active_league_instance.name}</option>
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

	<div class="field is-grouped">

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

	</div>


</div>



