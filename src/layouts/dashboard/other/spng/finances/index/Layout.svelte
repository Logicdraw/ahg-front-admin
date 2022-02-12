<script>
export let currentRoute;
export let params;

import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';


import { Route } from 'svelte-router-spa';


import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';



// async function get_() {

// }


let promise = Promise.all([
	// ...
]);


</script>


<style>

</style>



{#await promise}

<Loading />

{:then data}


<MsgCard msg_show={true} msg_text={'...'} msg_type={'error'} msg_forever={true} />


<Route {currentRoute} {params} />

{:catch error}

<section class="section skinny-section">

	<div class="container">

		<MsgCard msg_show={true} msg_text={'Error viewing data!'} msg_type={'error'} msg_forever={true} />

	</div>

</section>

{/await}

