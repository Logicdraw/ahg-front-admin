<script>
export let currentRoute;

import Form from 'components/forms/views/auth/password/reset/Form.svelte';

import MsgCard from 'components/elements/MsgCard.svelte';


import SvelteSeo from 'svelte-seo';


let msg_show = false;
let msg_type;
let msg_text;

</script>


<style>

</style>



<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				Choose new password
			</p>

		</div>

	</div>
	
</section>


<section class="section">

	<div class="container">

		<div class="columns is-variable is-centered">

			<div class="column is-6-desktop is-9-tablet is-12-mobile">

				<MsgCard bind:msg_show={msg_show} bind:msg_type={msg_type} bind:msg_text={msg_text} />

				<div class="card form-card">

					<div class="card-content">

						<Form bind:msg_show={msg_show} bind:msg_type={msg_type} bind:msg_text={msg_text} />

					</div>

				</div>

			</div>

		</div>

	</div>

</section>


<!-- ... -->

