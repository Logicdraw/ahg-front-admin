<script>
export let currentRoute;

import { navigateTo } from 'svelte-router-spa';
import { onMount } from 'svelte';


import { auth } from 'store/index.js';
import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const token = get(auth).token;


onMount(() => {
	if (!token) {
		navigateTo('/login');
	} else {
		navigateTo('/logged-in');
	}
});

</script>


<section class="hero bg-grey is-fullheight-with-navbar">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>404: Not Found</span>
			</p>

		</div>

	</div>
	
</section>

