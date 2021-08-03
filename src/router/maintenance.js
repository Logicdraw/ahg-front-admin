import Maintenance from 'views/Maintenance.svelte';


const maintenance_routes = [
	{
		name: 'maintenance',
		component: Maintenance,
	},
	// Errors
	{
		name: '404',
		path: '404',
		redirectTo: '/maintenance',
	},
]



export { maintenance_routes };




