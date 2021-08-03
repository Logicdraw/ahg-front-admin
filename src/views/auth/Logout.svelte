<script>
import { auth } from 'store/index.js';

import { onMount } from 'svelte';

import { navigateTo } from 'svelte-router-spa';


onMount(() => {
	auth.set({token: null});
	navigateTo('/login');
});

</script>


<style>

</style>



<!-- ... -->