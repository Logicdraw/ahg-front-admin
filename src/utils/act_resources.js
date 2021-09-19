

const act_resources_info = [
	{
		id: 'coaches',
		url: 'coaches',
		search_url: 'coaches',
		// search_url: 'coaches-search',
		name: 'Coaches',
		name_singular: 'Coach',
		default_columns: [
			{
				path: ['f_name'],
				name: 'First Name',
				ordering_option: true,
			},
			{
				path: ['l_name'],
				name: 'Last Name',
				ordering_option: true,
			},
			{
				path: ['team'],
				name: 'Program',
				ordering_option: true,
			},
			{
				path: ['create_date'],
				name: 'Date',
				ordering_option: true,
			},
		],
		search_columns: [
			{
				path: ['f_name'],
				name: 'First Name',
			},
			{
				path: ['l_name'],
				name: 'Last Name',
			},
			{
				path: ['team'],
				name: 'Program',
			},
		],
		more_filters: [],
	},
	{
		id: 'spring_hockey_registrations',
		url: 'spring-hockey-registrations',
		search_url: 'spring-hockey-registrations',
		// search_url: 'spring-hockey-registrations-search',
		name: 'Spring Hockey Registrations',
		name_singular: 'Spring Hockey Registration',
		default_columns: [
			{
				path: ['f_name'],
				name: 'First Name',
				ordering_option: true,
			},
			{
				path: ['l_name'],
				name: 'Last Name',
				ordering_option: true,
			},
			{
				path: ['team'],
				name: 'Team',
				ordering_option: true,
			},
			{
				path: ['team_division'],
				name: 'Division',
				ordering_option: true,
			},
			{
				path: ['program'],
				name: 'Program',
				ordering_option: true,
			},
			{
				path: ['create_date'],
				name: 'Date',
				ordering_option: true,
			},
		],
		search_columns: [
			{
				path: ['f_name'],
				name: 'First Name',
			},
			{
				path: ['l_name'],
				name: 'Last Name',
			},
			{
				path: ['team'],
				name: 'Team',
			},
			{
				path: ['team_division'],
				name: 'Division',
			},
			{
				path: ['program'],
				name: 'Program',
			},
		],
		more_filters: [],
	},
	{
		id: 'hockey_school_registrations',
		url: 'hockey-school-registrations',
		search_url: 'hockey-school-registrations',
		// search_url: 'hockey-school-registrations-search',
		name: 'Hockey School Registrations',
		name_singular: 'Hockey School Registration',
		default_columns: [
			{
				path: ['f_name'],
				name: 'First Name',
				ordering_option: true,
			},
			{
				path: ['l_name'],
				name: 'Last Name',
				ordering_option: true,
			},
			{
				path: ['camp'],
				name: 'Camp',
				ordering_option: true,
			},
			{
				path: ['create_date'],
				name: 'Date',
				ordering_option: true,
			},
		],
		search_columns: [
			{
				path: ['f_name'],
				name: 'First Name',
			},
			{
				path: ['l_name'],
				name: 'Last Name',
			},
			{
				path: ['camp'],
				name: 'Camp',
			},
		],
		more_filters: [],
	},
];


export { act_resources_info };

