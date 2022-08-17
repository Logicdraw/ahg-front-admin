<script>
export let row;

import dayjs from 'dayjs';

import MsgCard from 'components/elements/MsgCard.svelte';



let created_on = dayjs(row.create_date).subtract(4, 'hour').format('h:mm:ssA (MMM D YYYY)');

let updated_on = dayjs(row.edit_date).subtract(4, 'hour').format('h:mm:ssA (MMM D YYYY)');

</script>


<style>

</style>

<MsgCard msg_type={'error'} msg_show={true} msg_text={`<span style="text-align: center;">Created on: <span style="text-decoration: underline;">${created_on}</span><br> Last updated on: <span style="text-decoration: underline;">${updated_on}<span></span>`} />

