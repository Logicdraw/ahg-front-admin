<script>
export let currentRoute;

import LoginForm from 'components/forms/views/auth/login/Form.svelte';

// import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';


import SvelteSeo from 'svelte-seo';


let msg_show = false;
let msg_type;
let msg_text;

</script>



<style>


</style>



<SvelteSeo
	title='Login! | AHG Database'
	description='Login!'
/>


<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				Login
			</p>

		</div>

	</div>
	
</section>


<section class="section">

	<div class="container">

		<div class="columns is-centered">

			<div class="column is-6-desktop is-8-tablet is-12-mobile">

				<MsgCard bind:msg_show={msg_show} bind:msg_type={msg_type} bind:msg_text={msg_text} />

				<div class="card form-card">

					<div class="card-content">

						<LoginForm bind:msg_show={msg_show} bind:msg_type={msg_type} bind:msg_text={msg_text} />

					</div>

				</div>

			</div>

		</div>

	</div>
	
</section>


