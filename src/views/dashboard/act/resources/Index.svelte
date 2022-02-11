<script>
export let currentRoute;


import MsgCard from 'components/elements/MsgCard.svelte';

import { Navigate } from 'svelte-router-spa';


import { act_resources_info } from 'utils/act_resources.js';



</script>


<style>

</style>


<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>ACT Resources</span>
			</p>

		</div>

	</div>

</section>


<section class="section" style="padding-bottom: 1.5rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'View'} />

		<div class="columns is-variable is-mobile is-multiline is-centered">

			{#each act_resources_info as act_resource}

				<div class="column is-4-desktop is-4-tablet is-6-mobile">

					<Navigate styles='button is-medium is-fullwidth' to='/my/act/resources/resource/{act_resource.id}'>
						<span>{act_resource.name}</span>
					</Navigate>

				</div>

			{/each}

		</div>

	</div>

</section>



