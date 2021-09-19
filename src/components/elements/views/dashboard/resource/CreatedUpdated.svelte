<script>
export let row;

import dayjs from 'dayjs';

import MsgCard from 'components/elements/MsgCard.svelte';


console.log(row.created_on);
console.log(typeof row.created_on);


let created_on = dayjs(row.created_on).subtract(4, 'hour').format('h:mm:ssA (MMM D YYYY)');

let updated_on = dayjs(row.updated_on).subtract(4, 'hour').format('h:mm:ssA (MMM D YYYY)');

</script>


<style>

</style>

<MsgCard msg_type={'error'} msg_show={true} msg_text={`This row was created on: ${created_on} and last updated on: ${updated_on}`} />

