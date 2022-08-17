<script>
export let currentRoute;
export let params;


import { Route } from 'svelte-router-spa';


import Hero from 'components/elements/Hero.svelte';

</script>


<style>

</style>


<Hero title={'Training Helpers'} />


<Route {currentRoute} params={{
	...params,
}} />

