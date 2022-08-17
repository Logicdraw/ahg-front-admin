<script>
export let error;


import MsgCard from 'components/elements/MsgCard.svelte';


let msg_text = 'Error!';
if (error) {
	if (error.detail) {
		msg_text = 'Error!';
	}
}


</script>


<style>

</style>


<section class="section skinny-section">

	<div class="container">

		<MsgCard msg_show={true} msg_text={msg_text} msg_type={'error'} msg_forever={true} />

	</div>

</section>



