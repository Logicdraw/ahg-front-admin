<script>
export let currentRoute;


import Navbar from 'layouts/auth/Navbar.svelte';
import Loading from 'components/elements/Loading.svelte';


import { Route, navigateTo } from 'svelte-router-spa';


const params = {};



// import { onMount } from 'svelte';


// onMount(() => {

// });

</script>



<style>

#auth-layout {

}

</style>



<Navbar />
<div id="auth-layout" class="layout">
	<Route {currentRoute} {params} />
</div>
<!-- <Footer /> -->


