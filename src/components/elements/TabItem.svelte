<script>
export let currentRoute;
export let item;

import { Navigate, routeIsActive } from 'svelte-router-spa';



let is_active = false;

$: {
	is_active = (currentRoute && item.to && routeIsActive(item.to, true));
}

</script>


<style>

</style>


<li class:is-active={is_active}>
	<Navigate to={item.full_to}>
		{item.name}
	</Navigate>
</li>




