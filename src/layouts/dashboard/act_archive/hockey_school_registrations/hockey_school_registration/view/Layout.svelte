<script>
export let currentRoute;
export let params;


import { Route } from 'svelte-router-spa';


import Hero from 'components/elements/Hero.svelte';

</script>


<style>

</style>


<Hero title={'View Hockey School Registration (ACT Archive)'} />


<Route {currentRoute} params={{
	...params,
}} />

