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

import DashboardResourceCreate from 'views/dashboard/resource/Create.svelte';
import DashboardResourceEdit from 'views/dashboard/resource/Edit.svelte';


// ACT

import DashboardACTResourcesResource from 'views/dashboard/act/resources/Resource.svelte';


import DashboardACTResourceEdit from 'views/dashboard/act/resource/Edit.svelte';



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
						name: 'resource/:resource_id',
						component: DashboardResourcesResource,
					},
				],
			},
			{
				name: 'resource',
				nestedRoutes: [
					{
						name: ':resource_id/create',
						component: DashboardResourceCreate,
					},
					{
						name: ':resource_id/edit/:resource_row_id',
						component: DashboardResourceEdit,
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
								name: ':resource_id',
								component: DashboardACTResourcesResource,
							},
						],
					},
					{
						name: 'resource',
						nestedRoutes: [
							{
								name: ':resource_id/edit/:resource_row_id',
								component: DashboardACTResourceCampRegistrationsEdit,
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

