<script>
export let currentRoute;
export let params;


import { Route } from 'svelte-router-spa';


import Hero from 'components/elements/Hero.svelte';

</script>


<style>

</style>


<Hero title={'Spring Hockey Registrations (ACT Archive)'} />


<Route {currentRoute} params={{
	...params,
}} />

