<script>
export let currentRoute;
export let params;


import Hero from 'components/elements/Hero.svelte';

import MsgCard from 'components/elements/MsgCard.svelte';


import { menu_info } from 'data/menu/index.js';


</script>


<style>

</style>





{#each menu_info as menu_block}

<section class="section skinny-section">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={menu_block.name} />

		<div class="columns is-variable is-mobile is-multiline is-centered">

			{#each menu_blocks.items as item}

				<div class="column is-4-desktop is-4-tablet is-6-mobile">

					<Navigate styles='button is-medium is-fullwidth' to='{item.href}'>
						<span>{item.name}</span>
					</Navigate>

				</div>

			{/each}

		</div>

	</div>
	
</section>

{/each}




