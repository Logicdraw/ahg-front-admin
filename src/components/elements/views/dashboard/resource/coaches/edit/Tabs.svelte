<script>
export let coach_id;

import { Navigate } from 'svelte-router-spa';

</script>


<style>
	
</style>


<div class="tabs is-toggle is-fullwidth">

	<ul>

		<li>
			<Navigate to='/my/resource/coaches/edit/{coach_id}'>
				Edit
			</Navigate>
		</li>

		<li>
			<Navigate to='/my/resource/coaches/edit/{coach_id}/team_instances'>
				Teams
			</Navigate>
		</li>

		<li>
			<Navigate to='/my/resource/coaches/edit/{coach_id}/program_instances'>
				Programs
			</Navigate>
		</li>

		<li>
			<Navigate to='/my/resource/coaches/edit/{coach_id}/camp_instances'>
				Camps
			</Navigate>
		</li>

	</ul>

</div>

