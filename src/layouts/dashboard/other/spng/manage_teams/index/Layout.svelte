<script>
export let currentRoute;
export let params;

import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';


import { Route } from 'svelte-router-spa';


</script>


<style>

</style>


<Route {currentRoute} {params} />
