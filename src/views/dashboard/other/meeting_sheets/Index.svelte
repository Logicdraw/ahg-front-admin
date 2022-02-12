<script>
export let currentRoute;


import MsgCard from 'components/elements/MsgCard.svelte';


import DownloadMeetingSheet from 'components/elements/views/dashboard/other/meeting_sheets/index/DownloadMeetingSheet.svelte';



const meeting_sheets = [
	{
		name: 'Programs 2022',
		slug: 'programs-2022',
	},
	{
		name: 'Prospects Spring 2022',
		slug: 'prospects-spring-2022',
	},
	{
		name: 'AAA Spring 2022',
		slug: 'aaa-spring-2022',
	},
];


</script>



<style>

</style>


<section class="hero bg-grey">

	<div class="hero-body">

		<div class="container">

			<p class="hero-subtitle has-text-centered">
				<span>Meeting Sheets</span>
			</p>

		</div>

	</div>

</section>



<section class="section skinny-section">

	<div class="container is-fullwidth">

		<MsgCard msg_show={true} msg_forever={true} msg_type={'error'} msg_text={'Click to have sheet sent to your email:'} />

		<div class="columns is-variable is-mobile is-multiline is-centered">

			{#each meeting_sheets as meeting_sheet}

				<div class="column is-4-desktop is-4-tablet is-6-mobile">

					<DownloadMeetingSheet {meeting_sheet} />

				</div>

			{/each}

		</div>

	</div>

</section>





