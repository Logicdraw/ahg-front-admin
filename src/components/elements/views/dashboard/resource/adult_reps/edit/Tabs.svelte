<script>
export let adult_rep_id;

import { Navigate } from 'svelte-router-spa';

</script>


<style>
	
</style>


<div class="tabs is-toggle is-fullwidth">

	<ul>

		<li>
			<Navigate to='/my/resource/adult_reps/edit/{adult_rep_id}'>
				Edit
			</Navigate>
		</li>

		<li>
			<Navigate to='/my/resource/adult_reps/edit/{adult_rep_id}/team_instances'>
				Teams
			</Navigate>
		</li>


	</ul>

</div>

