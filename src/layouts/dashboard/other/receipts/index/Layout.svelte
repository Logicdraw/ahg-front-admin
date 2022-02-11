<script>
export let currentRoute;
export let params;

import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';


import { Route } from 'svelte-router-spa';


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';



// 
let promise = Promise.all([
	// ...
]);


</script>


<style>

</style>



{#await promise}

<Loading />

{:then data}

<!-- msgcard -->

{:catch error}



{/await}



