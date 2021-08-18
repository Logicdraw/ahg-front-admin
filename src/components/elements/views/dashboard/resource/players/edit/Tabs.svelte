<script>
export let player_id;

import { Navigate } from 'svelte-router-spa';

</script>


<style>
	
</style>


<div class="tabs is-toggle is-fullwidth">

	<ul>

		<li>
			<Navigate to='/my/resource/players/edit/{player_id}'>
				Edit
			</Navigate>
		</li>

		<li>
			<Navigate to='/my/resource/players/edit/{player_id}/team_instance_registrations'>
				Team Regs
			</Navigate>
		</li>

		<li>
			<Navigate to='/my/resource/players/edit/{player_id}/program_instance_registrations'>
				Program Regs
			</Navigate>
		</li>

		<li>
			<Navigate to='/my/resource/players/edit/{player_id}/camp_instance_registrations'>
				Camp Regs
			</Navigate>
		</li>


		<li>
			<Navigate to='/my/resource/players/edit/{player_id}/team_instance_registration_jersey_sponsors'>
				Jersey Sponsors
			</Navigate>
		</li>

	</ul>

</div>

