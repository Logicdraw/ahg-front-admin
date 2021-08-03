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

import DashboardResourcesUsersIndex from 'views/dashboard/resources/users/Index.svelte';
import DashboardResourcesUsersCreate from 'views/dashboard/resources/users/Create.svelte';
import DashboardResourcesUsersEdit from 'views/dashboard/resources/users/Edit.svelte';



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
		name: 'resources',
		component: DashboardResourcesIndex,
		layout: DashboardLayout,
		nestedRoutes: [
			// Users --
			{
				name: 'users',
				component: DashboardResourcesUsersIndex,
			},
			{
				name: 'users/edit/:user_id',
				component: DashboardResourcesUsersEdit,
			},
			{
				name: 'users/create',
				component: DashboardResourcesUsersCreate,
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
]



export { routes };

