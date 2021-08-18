<script>
import { Router } from 'svelte-router-spa';
import { routes } from './router';
import { maintenance_routes } from './router/maintenance';


const in_maintenance = (app_.env.MAINTENANCE == '1');

</script>


<style>
	
main {
	min-height: calc(100vh - var(--navbar-height));
	/*margin-top: var(--navbar-height);*/
}

</style>


{#if in_maintenance}
<main>
	<Router routes={maintenance_routes} />
</main>
{:else}
<main>
	<Router {routes} />
</main>
{/if}


