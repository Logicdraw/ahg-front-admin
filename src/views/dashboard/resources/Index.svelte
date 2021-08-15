<script>
export let currentRoute;


import MsgCard from 'components/elements/MsgCard.svelte';

import { Navigate } from 'svelte-router-spa';

</script>


<style>

</style>


<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				Resources
			</p>

		</div>

	</div>

</section>


<section class="section">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'Use View or Create tabs on navigation bar!'} />

	</div>

</section>

