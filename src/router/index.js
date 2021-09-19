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

import DashboardResourcesResource from 'views/dashboard/resources/Resource.svelte';


import DashboardResourceCreateLayout from 'layouts/dashboard/resource/create/Layout.svelte';

import DashboardResourceCreateAdultReps from 'views/dashboard/resource/adult_reps/Create.svelte';
import DashboardResourceCreateCampInstanceRegistrations from 'views/dashboard/resource/camp_instance_registrations/Create.svelte';
import DashboardResourceCreateCampInstances from 'views/dashboard/resource/camp_instances/Create.svelte';
import DashboardResourceCreateCoaches from 'views/dashboard/resource/coaches/Create.svelte';
import DashboardResourceCreateGuardians from 'views/dashboard/resource/guardians/Create.svelte';
import DashboardResourceCreatePlayers from 'views/dashboard/resource/players/Create.svelte';
import DashboardResourceCreateProgramInstanceRegistrations from 'views/dashboard/resource/program_instance_registrations/Create.svelte';
import DashboardResourceCreateProgramInstances from 'views/dashboard/resource/program_instances/Create.svelte';
import DashboardResourceCreateTeamInstanceRegistrations from 'views/dashboard/resource/team_instance_registrations/Create.svelte';
import DashboardResourceCreateTeamInstances from 'views/dashboard/resource/team_instances/Create.svelte';


import DashboardResourceEditLayout from 'layouts/dashboard/resource/edit/Layout.svelte';

import DashboardResourceEditAdultReps from 'views/dashboard/resource/adult_reps/Edit.svelte';
import DashboardResourceEditCampInstanceRegistrations from 'views/dashboard/resource/camp_instance_registrations/Edit.svelte';
import DashboardResourceEditCampInstances from 'views/dashboard/resource/camp_instances/Edit.svelte';
import DashboardResourceEditCoaches from 'views/dashboard/resource/coaches/Edit.svelte';
import DashboardResourceEditGuardians from 'views/dashboard/resource/guardians/Edit.svelte';
import DashboardResourceEditPlayers from 'views/dashboard/resource/players/Edit.svelte';
import DashboardResourceEditProgramInstanceRegistrations from 'views/dashboard/resource/program_instance_registrations/Edit.svelte';
import DashboardResourceEditProgramInstances from 'views/dashboard/resource/program_instances/Edit.svelte';
import DashboardResourceEditTeamInstanceRegistrations from 'views/dashboard/resource/team_instance_registrations/Edit.svelte';
import DashboardResourceEditTeamInstances from 'views/dashboard/resource/team_instances/Edit.svelte';



// ACT

import DashboardACTResourcesResource from 'views/dashboard/act/resources/Resource.svelte';


import DashboardACTResourceCoachesView from 'views/dashboard/act/resource/coaches/View.svelte';
import DashboardACTResourceHockeySchoolRegistrationsView from 'views/dashboard/act/resource/hockey_school_registrations/View.svelte';
import DashboardACTResourceSpringHockeyRegistrationsView from 'views/dashboard/act/resource/spring_hockey_registrations/View.svelte';




// Files

import DashboardFileTemplatesIndex from 'views/dashboard/file_templates/Index.svelte';


// File

import DashboardFileTemplateCreate from 'views/dashboard/file_template/Create.svelte';

import DashboardFileTemplateEdit from 'views/dashboard/file_template/Edit.svelte';


import DashboardGamesheetIndex from 'views/dashboard/other/gs/Index.svelte';

import DashboardSpngIndex from 'views/dashboard/other/spng/Index.svelte';

import DashboardSpngSurveysIndex from 'views/dashboard/other/spng/surveys/Index.svelte';


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
						name: 'resource/:resource_id',
						component: DashboardResourcesResource,
					},
				],
			},
			{
				name: 'resource',
				nestedRoutes: [
					{
						name: 'create',
						component: DashboardResourceCreateLayout,
						nestedRoutes: [
							{
								name: 'adult_reps',
								component: DashboardResourceCreateAdultReps,
							},
							{
								name: 'camp_instance_registrations',
								component: DashboardResourceCreateCampInstanceRegistrations,
							},
							{
								name: 'camp_instances',
								component: DashboardResourceCreateCampInstances,
							},
							{
								name: 'coaches',
								component: DashboardResourceCreateCoaches,
							},
							{
								name: 'guardians',
								component: DashboardResourceCreateGuardians,
							},
							{
								name: 'players',
								component: DashboardResourceCreatePlayers,
							},
							{
								name: 'program_instance_registrations',
								component: DashboardResourceCreateProgramInstanceRegistrations,
							},
							{
								name: 'program_instances',
								component: DashboardResourceCreateProgramInstances,
							},
							{
								name: 'team_instance_registrations',
								component: DashboardResourceCreateTeamInstanceRegistrations,
							},
							{
								name: 'team_instances',
								component: DashboardResourceCreateTeamInstances,
							},
						],
					},
					{
						name: 'edit',
						component: DashboardResourceEditLayout,
						nestedRoutes: [
							{
								name: 'adult_reps/:resource_row_id',
								component: DashboardResourceEditAdultReps,
							},
							{
								name: 'camp_instance_registrations/:resource_row_id',
								component: DashboardResourceEditCampInstanceRegistrations,
							},
							{
								name: 'camp_instances/:resource_row_id',
								component: DashboardResourceEditCampInstances,
							},
							{
								name: 'coaches/:resource_row_id',
								component: DashboardResourceEditCoaches,
							},
							{
								name: 'guardians/:resource_row_id',
								component: DashboardResourceEditGuardians,
							},
							{
								name: 'players/:resource_row_id',
								component: DashboardResourceEditPlayers,
							},
							{
								name: 'program_instance_registrations/:resource_row_id',
								component: DashboardResourceEditProgramInstanceRegistrations,
							},
							{
								name: 'program_instances/:resource_row_id',
								component: DashboardResourceEditProgramInstances,
							},
							{
								name: 'team_instance_registrations/:resource_row_id',
								component: DashboardResourceEditTeamInstanceRegistrations,
							},
							{
								name: 'team_instances/:resource_row_id',
								component: DashboardResourceEditTeamInstances,
							},
						],
					},
				],
			},
			{
				name: 'act',
				nestedRoutes: [
					{
						name: 'resources',
						nestedRoutes: [
							// {
							// 	name: 'index',
							// 	component: DashboardResourcesIndex,
							// },
							// {
							// 	name: 'master-search',
							// 	component: DashboardResourcesMasterSearch,
							// },
							// Adult --
							{
								name: 'resource/:act_resource_id',
								component: DashboardACTResourcesResource,
							},
						],
					},
					{
						name: 'resource',
						nestedRoutes: [
							{
								name: 'coaches/:act_resource_row_id',
								component: DashboardACTResourceCoachesView,
							},
							{
								name: 'hockey_school_registrations/:act_resource_row_id',
								component: DashboardACTResourceHockeySchoolRegistrationsView,
							},
							{
								name: 'spring_hockey_registrations/:act_resource_row_id',
								component: DashboardACTResourceSpringHockeyRegistrationsView,
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
						name: 'edit/:file_template_row_id',
						component: DashboardFileTemplateEdit,
					},
				],
			},
			{
				name: 'spng',
				nestedRoutes: [
					{
						name: 'index',
						component: DashboardSpngIndex,
					},
					{
						name: 'surveys',
						component: DashboardSpngSurveysIndex,
					}
				],
			},
			{
				name: 'gs',
				component: DashboardGamesheetIndex,
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

