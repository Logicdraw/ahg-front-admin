<script>
export let currentRoute;
export let params;


import Form from 'components/forms/views/dashboard/resource/camp_instances/create/Form.svelte';

</script>

<style>

</style>



<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Create new Camp</span>
			</p>

		</div>

	</div>

</section>

<section class="section">

	<div class="container">

		<div class="columns is-centered">

			<div class="column is-9-desktop is-12-tablet is-12-mobile">

				<div class="card form-card">

					<div class="card-content">
			
						<Form />

					</div>

				</div>

			</div>

		</div>

	</div>

</section>


