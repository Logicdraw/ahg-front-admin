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

import DashboardResourcesMasterSearch from 'views/dashboard/resources/MasterSearch.svelte';
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
import DashboardResourceAdultRepsEdit from 'views/dashboard/resource/adult_reps/Edit.svelte';

import DashboardResourceCoachesCreate from 'views/dashboard/resource/coaches/Create.svelte';
import DashboardResourceCoachesEdit from 'views/dashboard/resource/coaches/Edit.svelte';

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


// ACT

import DashboardACTResourcesCampRegistrationsIndex from 'views/dashboard/act/resources/camp_registrations/Index.svelte';

import DashboardACTResourcesCoachRegistrationsIndex from 'views/dashboard/act/resources/coach_registrations/Index.svelte';

import DashboardACTResourcesTeamRegistrationsIndex from 'views/dashboard/act/resources/team_registrations/Index.svelte';


import DashboardACTResourceCampRegistrationsEdit from 'views/dashboard/act/resource/camp_registrations/Edit.svelte';

import DashboardACTResourceCoachRegistrationsEdit from 'views/dashboard/act/resource/coach_registrations/Edit.svelte';

import DashboardACTResourceTeamRegistrationsEdit from 'views/dashboard/act/resource/team_registrations/Edit.svelte';



// Files

import DashboardFileTemplatesIndex from 'views/dashboard/file_templates/Index.svelte';


// File

import DashboardFileTemplateCreate from 'views/dashboard/file_template/Create.svelte';

import DashboardFileTemplateEdit from 'views/dashboard/file_template/Edit.svelte';


// Settings

import DashboardSettingsIndex from 'views/dashboard/settings/Index.svelte';


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
					{
						name: 'master-search',
						component: DashboardResourcesMasterSearch,
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
						name: 'adult_reps/edit/:resource_id',
						component: DashboardResourceAdultRepsEdit,
					},
					{
						name: 'coaches/create',
						component: DashboardResourceCoachesCreate,
					},
					{
						name: 'coaches/edit/:resource_id',
						component: DashboardResourceCoachesEdit,
					},
					{
						name: 'guardians/create',
						component: DashboardResourceGuardiansCreate,
					},
					{
						name: 'guardians/edit/:resource_id',
						component: DashboardResourceGuardiansEdit,
					},
					{
						name: 'players/create',
						component: DashboardResourcePlayersCreate,
					},
					{
						name: 'players/edit/:resource_id',
						component: DashboardResourcePlayersEdit,
					},
					// --
					{
						name: 'camp_instances/create',
						component: DashboardResourceCampsCreate,
					},
					{
						name: 'camp_instances/edit/:resource_id',
						component: DashboardResourceCampsEdit,
					},
					{
						name: 'program_instances/create',
						component: DashboardResourceProgramsCreate,
					},
					{
						name: 'program_instances/edit/:resource_id',
						component: DashboardResourceProgramsEdit,
					},
					{
						name: 'team_instances/create',
						component: DashboardResourceTeamsCreate,
					},
					{
						name: 'team_instances/edit/:resource_id',
						component: DashboardResourceTeamsEdit,
					},
					// --
					{
						name: 'camp_instance_registrations/create',
						component: DashboardResourceCampRegistrationsCreate,
					},
					{
						name: 'camp_instance_registrations/edit/:resource_id',
						component: DashboardResourceCampRegistrationsEdit,
					},
					{
						name: 'program_instance_registrations/create',
						component: DashboardResourceProgramRegistrationsCreate,
					},
					{
						name: 'program_instance_registrations/edit/:resource_id',
						component: DashboardResourceProgramRegistrationsEdit,
					},
					{
						name: 'team_instance_registrations/create',
						component: DashboardResourceTeamRegistrationsCreate,
					},
					{
						name: 'team_instance_registrations/edit/:resource_id',
						component: DashboardResourceTeamRegistrationsEdit,
					},
				],
			},
			{
				name: 'act',
				nestedRoutes: [
					{
						name: 'resources',
						nestedRoutes: [
							{
								name: 'camp_registrations',
								component: DashboardACTResourcesCampRegistrationsIndex,
							},
							{
								name: 'coach_registrations',
								component: DashboardACTResourcesCoachRegistrationsIndex,
							},
							{
								name: 'team_registrations',
								component: DashboardACTResourcesTeamRegistrationsIndex,
							},
						],
					},
					{
						name: 'resource',
						nestedRoutes: [
							{
								name: 'camp_registrations/edit/:resource_id',
								component: DashboardACTResourceCampRegistrationsEdit,
							},
							{
								name: 'coach_registrations/edit/:resource_id',
								component: DashboardACTResourceCampRegistrationsEdit,
							},
							{
								name: 'team_registrations/edit/:resource_id',
								component: DashboardACTResourceTeamRegistrationsEdit,
							},
						],
					},
				],
			},
			{
				name: 'file_templates',
				component: DashboardFileTemplatesIndex,
			},
			{
				name: 'file_template',
				nestedRoutes: [
					{
						name: 'create',
						component: DashboardFileTemplateCreate,
					},
					{
						name: 'edit/:file_template_id',
						component: DashboardFileTemplateEdit,
					},
				],
			},
			{
				name: 'settings',
				component: DashboardSettingsIndex,
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

