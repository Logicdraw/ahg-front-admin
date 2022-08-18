<script>
export let currentRoute;
export let params;


import { Route } from 'svelte-router-spa';


import Hero from 'components/elements/Hero.svelte';

</script>


<style>

</style>


<Hero title={'ACT Archive: Spring Hockey Registrations'} />


<Route {currentRoute} params={{
	...params,
}} />

