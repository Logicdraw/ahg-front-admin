<script>
export let rows;
export let url_params;


import Loading from 'components/elements/Loading.svelte';
import MsgCard from 'components/elements/MsgCard.svelte';

import TableRow from 'components/elements/views/dashboard/other/adult_hockey/free_agents/TableRow.svelte';

import DeleteAdultFreeAgentModal from 'components/elements/views/dashboard/other/adult_hockey/finances/modals/DeleteAdultFreeAgent.svelte';



import { auth } from 'store/index.js';


import { get } from 'svelte/store';
import SvelteSeo from 'svelte-seo';


const admin_api_url = app_.env.ADMIN_API_URL;

const token = get(auth).token;



async function getLeagueInstances() {

	// --

	let params_string = new URLSearchParams({
		season_instance_id: '2',
		limit: 10000,
	}).toString();

	const url = `${admin_api_url}/_resources/_programs/_team_instance/league-instances?${params_string}`;

	const resp = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const result = await resp.json();

	if (!resp.ok) {
		throw new Error(result.detail);
	}

	return result;

}


// async function getSpngLastFetchedRegistrations()



let promise = getLeagueInstances();


let active_delete_adult_adult_free_agent_id = null;


let delete_modal_is_active = false;

$: {
	if (!!active_delete_adult_adult_free_agent_id) {
		delete_modal_is_active = true;
	}
}


</script>


<style>

.table {
	border: 1px solid var(--border);
}

@media screen and (max-width: 768px) {
	.table {
		border: 0 !important;
	}
}

thead {
	background: var(--bg-light) !important;
}

td .arrow-divider {
	margin-left: 0.325rem !important;
	margin-right: 0.325rem !important;
}

td .arrow-divider:last-child {
	display: none !important;
}

</style>



<DeleteAdultPaymentModal bind:delete_modal_is_active bind:adult_payment_id={active_delete_adult_adult_free_agent_id} />


<!-- MsgCard: last updated -->


{#await promise}

<Loading />

{:then team_instances}

<MsgCard msg_text={'...'} />

<table class="table is-hoverable- is-fullwidth">
	<!-- <thead>
		<tr>
			<td>
				First
			</td>
			<td>
				Last
			</td>
			<td>
				Team
			</td>
			
			<td>
				
			</td>
		</tr>
	</thead>
 -->
	<tbody>
		{#each rows as row}
			<TableRow {row} {team_instances} bind:active_delete_adult_adult_free_agent_id />
		{/each}
	</tbody>
</table>

{:catch error}

<br>
<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={error.detail} />

{/await}


