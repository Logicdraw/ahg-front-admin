<script>
export let currentRoute;
export let params;


import MsgCard from 'components/elements/MsgCard.svelte';


import Form from 'components/forms/views/dashboard/resource/team_instance_registrations/create/Form.svelte';

</script>

<style>

</style>



<section class="section skinny-section">

	<div class="container">

		<div class="columns is-centered">

			<div class="column is-9-desktop is-12-tablet is-12-mobile">

				<!-- <MsgCard msg_show={true} msg_text={'...'} msg_type={'error'} msg_forever={true} /> -->

				<div class="card form-card">

					<div class="card-content">
			
						<Form />

					</div>

				</div>

			</div>

		</div>

	</div>

</section>


