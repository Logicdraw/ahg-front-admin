<script>
export let currentRoute;
// export let params;


import Navbar from 'layouts/auth/Navbar.svelte';
import Loading from 'components/elements/Loading.svelte';


import { Route, navigateTo } from 'svelte-router-spa';


const params = {};



// import { onMount } from 'svelte';


// onMount(() => {

// });

</script>



<style>

#errors-layout {

}

</style>



<Navbar />
<div id="errors-layout" class="layout">
	<Route {currentRoute} {params} />
</div>
<!-- <Footer /> -->


