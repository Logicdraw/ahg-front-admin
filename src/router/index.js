import { auth } from 'store/index.js';

import { get } from 'svelte/store';



// Auth

import AuthLayout from 'layouts/auth/Layout.svelte';


import AuthLogin from 'views/auth/Login.svelte';

import AuthLogout from 'views/auth/Logout.svelte';

import AuthPasswordBeginReset from 'views/auth/password/BeginReset.svelte';
import AuthPasswordReset from 'views/auth/password/Reset.svelte';



// Dashboard

import DashboardLayout from 'layouts/dashboard/Layout.svelte';


import DashboardResourcesIndex from 'views/dashboard/resources/Index.svelte';

// 

import DashboardResourcesAdultRepsIndex from 'views/dashboard/resources/adult_reps/Index.svelte';

import DashboardResourcesCoachesIndex from 'views/dashboard/resources/coaches/Index.svelte';

import DashboardResourcesGuardiansIndex from 'views/dashboard/resources/guardians/Index.svelte';

import DashboardResourcesPlayersIndex from 'views/dashboard/resources/players/Index.svelte';

import DashboardResourcesCampsIndex from 'views/dashboard/resources/camp_instances/Index.svelte';

import DashboardResourcesProgramsIndex from 'views/dashboard/resources/program_instances/Index.svelte';

import DashboardResourcesTeamsIndex from 'views/dashboard/resources/team_instances/Index.svelte';

import DashboardResourcesCampRegistrationsIndex from 'views/dashboard/resources/camp_instance_registrations/Index.svelte';

import DashboardResourcesProgramRegistrationsIndex from 'views/dashboard/resources/program_instance_registrations/Index.svelte';

import DashboardResourcesTeamRegistrationsIndex from 'views/dashboard/resources/team_instance_registrations/Index.svelte';


import DashboardResourceAdultRepsCreate from 'views/dashboard/resource/adult_reps/Create.svelte';
import DashboardResourceAdultRepsEdit from 'views/dashboard/resource/adult_reps/Create.svelte';

import DashboardResourceCoachesCreate from 'views/dashboard/resource/coaches/Create.svelte';
import DashboardResourceCoachesEdit from 'views/dashboard/resource/coaches/Create.svelte';

import DashboardResourceGuardiansCreate from 'views/dashboard/resource/guardians/Create.svelte';
import DashboardResourceGuardiansEdit from 'views/dashboard/resource/guardians/Edit.svelte';

import DashboardResourcePlayersCreate from 'views/dashboard/resource/players/Create.svelte';
import DashboardResourcePlayersEdit from 'views/dashboard/resource/players/Edit.svelte';

import DashboardResourceCampsCreate from 'views/dashboard/resource/camp_instances/Create.svelte';
import DashboardResourceCampsEdit from 'views/dashboard/resource/camp_instances/Edit.svelte';

import DashboardResourceProgramsCreate from 'views/dashboard/resource/program_instances/Create.svelte';
import DashboardResourceProgramsEdit from 'views/dashboard/resource/program_instances/Edit.svelte';

import DashboardResourceTeamsCreate from 'views/dashboard/resource/team_instances/Create.svelte';
import DashboardResourceTeamsEdit from 'views/dashboard/resource/team_instances/Edit.svelte';

import DashboardResourceCampRegistrationsCreate from 'views/dashboard/resource/camp_instance_registrations/Create.svelte';
import DashboardResourceCampRegistrationsEdit from 'views/dashboard/resource/camp_instance_registrations/Edit.svelte';

import DashboardResourceProgramRegistrationsCreate from 'views/dashboard/resource/program_instance_registrations/Create.svelte';
import DashboardResourceProgramRegistrationsEdit from 'views/dashboard/resource/program_instance_registrations/Edit.svelte';

import DashboardResourceTeamRegistrationsCreate from 'views/dashboard/resource/team_instance_registrations/Create.svelte';
import DashboardResourceTeamRegistrationsEdit from 'views/dashboard/resource/team_instance_registrations/Edit.svelte';



// Errors

import ErrorsLayout from 'layouts/errors/Layout.svelte';

import ErrorsNotFound from 'views/errors/NotFound.svelte';




const routes = [
	// Auth
	{
		name: 'login',
		component: AuthLogin,
		layout: AuthLayout,
	},
	{
		name: 'logout',
		component: AuthLogout,
		layout: AuthLayout,
	},
	{
		name: 'password/begin-reset',
		component: AuthPasswordBeginReset,
		layout: AuthLayout,
	},
	{
		name: 'password/reset',
		component: AuthPasswordReset,
		layout: AuthLayout,
	},
	// Dashboard
	{
		name: 'my',
		component: DashboardLayout,
		nestedRoutes: [
			{
				name: 'resources',
				nestedRoutes: [
					{
						name: 'index',
						component: DashboardResourcesIndex,
					},
					// Adult --
					{
						name: 'adult_reps',
						component: DashboardResourcesAdultRepsIndex,
					},
					{
						name: 'coaches',
						component: DashboardResourcesCoachesIndex,
					},
					{
						name: 'guardians',
						component: DashboardResourcesGuardiansIndex,
					},
					{
						name: 'players',
						component: DashboardResourcesPlayersIndex,
					},
					// --
					{
						name: 'camp_instances',
						component: DashboardResourcesCampsIndex,
					},
					{
						name: 'program_instances',
						component: DashboardResourcesProgramsIndex,
					},
					{
						name: 'team_instances',
						component: DashboardResourcesTeamsIndex,
					},
					// --
					{
						name: 'camp_instance_registrations',
						component: DashboardResourcesCampRegistrationsIndex,
					},
					{
						name: 'program_instance_registrations',
						component: DashboardResourcesProgramRegistrationsIndex,
					},
					{
						name: 'team_instance_registrations',
						component: DashboardResourcesTeamRegistrationsIndex,
					},
				],
			},
			{
				name: 'resource',
				nestedRoutes: [
					{
						name: 'adult_reps/create',
						component: DashboardResourceAdultRepsCreate,
					},
					{
						name: 'adult_reps/:resource_id/edit',
						component: DashboardResourceAdultRepsEdit,
					},
					{
						name: 'coaches/create',
						component: DashboardResourceCoachesCreate,
					},
					{
						name: 'coaches/:resource_id/edit',
						component: DashboardResourceCoachesEdit,
					},
					{
						name: 'guardians/create',
						component: DashboardResourceGuardiansCreate,
					},
					{
						name: 'guardians/:resource_id/edit',
						component: DashboardResourceGuardiansEdit,
					},
					{
						name: 'players/create',
						component: DashboardResourcePlayersCreate,
					},
					{
						name: 'players/:resource_id/edit',
						component: DashboardResourcePlayersEdit,
					},
					// --
					{
						name: 'camp_instances/create',
						component: DashboardResourceCampsCreate,
					},
					{
						name: 'camp_instances/:resource_id/edit',
						component: DashboardResourceCampsEdit,
					},
					{
						name: 'program_instances/create',
						component: DashboardResourceProgramsCreate,
					},
					{
						name: 'program_instances/:resource_id/edit',
						component: DashboardResourceProgramsEdit,
					},
					{
						name: 'team_instances/create',
						component: DashboardResourceTeamsCreate,
					},
					{
						name: 'team_instances/:resource_id/edit',
						component: DashboardResourceTeamsEdit,
					},
					// --
					{
						name: 'camp_instance_registrations/create',
						component: DashboardResourceCampRegistrationsCreate,
					},
					{
						name: 'camp_instance_registrations/:resource_id/edit',
						component: DashboardResourceCampRegistrationsEdit,
					},
					{
						name: 'program_instance_registrations/create',
						component: DashboardResourceProgramRegistrationsCreate,
					},
					{
						name: 'program_instance_registrations/:resource_id/edit',
						component: DashboardResourceProgramRegistrationsEdit,
					},
					{
						name: 'team_instance_registrations/create',
						component: DashboardResourceTeamRegistrationsCreate,
					},
					{
						name: 'team_instance_registrations/:resource_id/edit',
						component: DashboardResourceTeamRegistrationsEdit,
					},
				],
			},
		],
	},

	// Errors
	{
		name: '404',
		path: '404',
		component: ErrorsNotFound,
		layout: ErrorsLayout,
	},
	// Redirect --
	{
		name: 'logged-in',
		redirectTo: '/my/resources',
	},
]



export { routes };

