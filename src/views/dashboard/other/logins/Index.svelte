<script>
export let currentRoute;

import { logins_info } from 'utils/logins.js';


import { Navigate } from 'svelte-router-spa';


import MsgCard from 'components/elements/MsgCard.svelte';


</script>



<style>

</style>


<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Logins Helpers</span>
			</p>

		</div>

	</div>

</section>



<section class="section">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'Create:'} />

		<div class="columns is-variable is-mobile is-multiline is-centered">

			{#each logins_info as login}

				{#if login.has_create_form}

					<div class="column is-3-desktop is-4-tablet is-6-mobile">

						<Navigate styles='button is-medium is-fullwidth' to='/my/resources/resource/{login.id}'>
							<span>{login.name_singular}</span>
						</Navigate>

					</div>

				{/if}

			{/each}

		</div>

	</div>

</section>




<section class="section">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'View:'} />

		<div class="columns is-variable is-mobile is-multiline is-centered">

			{#each logins_info as login}

				<div class="column is-3-desktop is-4-tablet is-6-mobile">

					<Navigate styles='button is-medium is-fullwidth' to='/my/resources/resource/{login.id}'>
						<span>{login.name}</span>
					</Navigate>

				</div>

			{/each}

		</div>

	</div>

</section>




