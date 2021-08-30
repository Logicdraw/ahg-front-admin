<script>
export let row;

import MsgCard from 'components/elements/MsgCard.svelte';

</script>


<style>

</style>

<MsgCard msg_type={'error'} msg_show={true} msg_text={`This row was created on: ${row.created_on} and last updated on: ${row.updated_on}`} />

