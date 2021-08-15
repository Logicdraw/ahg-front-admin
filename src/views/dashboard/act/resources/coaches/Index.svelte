<script>
export let currentRoute;


import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';


const old_act_api_url = app_.env.OLD_ACT_API_URL;


let promise = getRows(params);

async function getRows(params) {

	const url = `${}/resources/coaches`;

	const resp = await fetch(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const result = await resp.json();

	if (!resp.ok) {
		throw new Error(result)
	}

}

</script>


<style>

</style>

