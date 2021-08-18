<script>
export let currentRoute;


import MsgCard from 'components/elements/MsgCard.svelte';
import Form from 'components/forms/views/dashboard/resource/program_instances/create/Form.svelte'

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

			<span class="hero-subtitle has-text-centered">
				Create new Program
			</span>

		</div>

	</div>

</section>


<section class="section">

	<div class="container">

		<div class="columns is-centered">

			<div class="column is-9-desktop is-12-tablet is-12-mobile">

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




