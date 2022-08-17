<script>
export let currentRoute;
export let params;


import MsgCard from 'components/elements/MsgCard.svelte';
import Loading from 'components/elements/Loading.svelte';

import Tabs from 'components/elements/views/dashboard/other/camps/coaches/index/Tabs.svelte';
import Filter from 'components/elements/views/dashboard/other/camps/coaches/index/Filter.svelte';


// fetch coaches

</script>



<style>

</style>



<section class="section skinny-section" style="padding-bottom: 0 !important;">

	<div class="container is-fullwidth">

		<Tabs {url_params} />

	</div>

</section>


<section class="section skinny-section" style="padding-bottom: 0.5rem !important;">

	<div class="container is-fullwidth">

		<Filter bind:url_params={url_params} {at_last_page} />

	</div>

</section>



{#await promise}

<Loading />

{:then rows}

<section class="section skinny-section">

	<div class="container is-fullwidth">

		{#if rows.length === 0}

			<!-- msgcard -->

		{:else}

			<!-- <Table {rows} /> -->

		{/if}

	</div>

</section>

{:catch error}

<ErrorSection msg_text={error.detail} />

{/await}



