<script>
export let currentRoute;


import MsgCard from 'components/elements/MsgCard.svelte';

import { Navigate } from 'svelte-router-spa';


import { resources_info } from 'utils/resources.js';



</script>


<style>

</style>


<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Resources</span>
			</p>

		</div>

	</div>

</section>


<section class="section" style="padding-bottom: 1.5rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'Create:'} />

		<div class="columns is-variable is-mobile is-multiline is-centered">

			<!-- {#each resources_info as resource}

				<div class="column is-3-desktop is-4-tablet is-6-mobile">

					<Navigate styles='button is-medium is-fullwidth' to='/my/resources/resource/{resource.id}'>
						<span>{resource.name}</span>
					</Navigate>

				</div>

			{/each} -->

			{#each resources_info as resource}
				{#if resource.has_create_form}
				<div class="column is-3-desktop is-4-tablet is-6-mobile">

					<Navigate styles='button is-medium is-fullwidth' to='/my/resource/create/{resource.id}'>
						<span>{resource.name_singular}</span>
					</Navigate>

				</div>
				{/if}
			{/each}

		</div>

	</div>

</section>


<section class="section" style="padding-top: 1.5rem !important;">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'View:'} />

		<div class="columns is-variable is-mobile is-multiline is-centered">

			{#each resources_info as resource}

				<div class="column is-3-desktop is-4-tablet is-6-mobile">

					<Navigate styles='button is-medium is-fullwidth' to='/my/resources/resource/{resource.id}'>
						<span>{resource.name}</span>
					</Navigate>

				</div>

			{/each}

		</div>

	</div>

</section>




