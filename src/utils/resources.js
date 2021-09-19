// ...
// params ...

const resources_info = [
	{
		id: 'adult_reps',
		url: 'adult-reps',
		search_url: 'adult-reps-search',
		name: 'Adult Reps',
		name_singular: 'Adult Rep',
		has_create_form: true,
		default_columns: [
			{
				path: ['full_name'],
				name: 'Name',
				ordering_option: true,
			},
			{
				path: ['email'],
				name: 'Email',
				ordering_option: true,
			},
			{
				path: ['mobile_phone'],
				name: 'Mobile',
				ordering_option: true,
			},
		],
		search_columns: [
			{
				path: ['full_name'],
				name: 'Name',
			},
			{
				path: ['email'],
				name: 'Email',
			},
			{
				path: ['mobile_phone'],
				name: 'Mobile',
			},
		],
		more_filters: [
			// {
			// 	id: '',
			// 	name: '',
			// 	type: '',
			// 	dropdown_options: [
			// 		{
			// 			id: '',
			// 			value: '',
			// 		},
			// 	],
			// },
		],
		// filters...
		form_additional_data: [
			{
				id: 'team_instances',
				url: 'team-instances',
			},
		],
	},
	{
		id: 'coaches',
		url: 'coaches',
		search_url: 'coaches-search',
		name: 'Coaches',
		name_singular: 'Coach',
		has_create_form: true,
		default_columns: [
			{
				path: ['full_name'],
				name: 'Name',
				ordering_option: true,
			},
			{
				path: ['email'],
				name: 'Email',
				ordering_option: true,
			},
			{
				path: ['mobile_phone'],
				name: 'Mobile',
				ordering_option: true,
			},
		],
		search_columns: [
			{
				path: ['full_name'],
				name: 'Name',
				ordering_option: true,
			},
			{
				path: ['email'],
				name: 'Email',
				ordering_option: true,
			},
			{
				path: ['mobile_phone'],
				name: 'Mobile',
				ordering_option: true,
			},
		],
		more_filters: [
			// {
			// 	id: '',
			// 	name: '',
			// 	type: '',
			// 	dropdown_options: [
			// 		{
			// 			id: '',
			// 			value: '',
			// 		},
			// 	],
			// },
		],
		form_additional_data: [
			{
				id: 'camp_instances',
				url: 'camp-instances',
			},
			{
				id: 'program_instances',
				url: 'program-instances',
			},
			{
				id: 'team_instances',
				url: 'team-instances',
			},
		],
	},
	{
		id: 'guardians',
		url: 'guardians',
		search_url: 'guardians-search',
		name: 'Guardians',
		name_singular: 'Guardian',
		has_create_form: true,
		default_columns: [
			{
				path: ['full_name'],
				name: 'Name',
				ordering_option: true,
			},
			{
				path: ['email'],
				name: 'Email',
				ordering_option: true,
			},
			{
				path: ['mobile_phone'],
				name: 'Mobile',
				ordering_option: true,
			},
		],
		search_columns: [
			{
				path: ['full_name'],
				name: 'Name',
				ordering_option: true,
			},
			{
				path: ['email'],
				name: 'Email',
				ordering_option: true,
			},
			{
				path: ['mobile_phone'],
				name: 'Mobile',
				ordering_option: true,
			},
		],
		more_filters: [
			// {
			// 	id: '',
			// 	name: '',
			// 	type: '',
			// 	dropdown_options: [
			// 		{
			// 			id: '',
			// 			value: '',
			// 		},
			// 	],
			// },
		],
		form_additional_data: [
			{
				id: 'players',
				url: 'players',
			},
		],
	},
	{
		id: 'players',
		url: 'players',
		search_url: 'players-search',
		name: 'Players',
		name_singular: 'Player',
		has_create_form: true,
		default_columns: [
			{
				path: ['first_name'],
				name: 'First',
				ordering_option: true,
			},
			{
				path: ['last_name'],
				name: 'Last',
				ordering_option: true,
			},
			{
				path: ['date_of_birth'],
				name: 'Date of Birth',
				ordering_option: true,
			},
			{
				path: ['gender'],
				name: 'Gender',
				ordering_option: true,
			},
		],
		search_columns: [
			{
				path: ['first_name'],
				name: 'First',
				ordering_option: true,
			},
			{
				path: ['last_name'],
				name: 'Last',
				ordering_option: true,
			},
			{
				path: ['email'],
				name: 'Email',
				ordering_option: true,
			},
		],
		more_filters: [
			{
				id: 'date_of_birth_start',
				name: 'Date of Birth Start',
				type: 'date',
				dropdown_options: [
					{
						id: '',
						value: '',
					},
				],
			},
			{
				id: 'date_of_birth_end',
				name: 'Date of Birth End',
				type: 'date',
				dropdown_options: [
					{
						id: '',
						value: '',
					},
				],
			},
			{
				id: 'gender',
				name: 'Gender',
				type: 'dropdown',
				dropdown_options: [
					{
						id: 'male',
						value: 'Male',
					},
					{
						id: 'female',
						value: 'Female',
					},
				],
			},
			{
				id: 'province',
				name: 'Province',
				type: 'dropdown',
				dropdown_options: [
					{
						id: 'NB',
						value: 'NB',
					},
					{
						id: 'NS',
						value: 'NS',
					},
					{
						id: 'PE',
						value: 'PE',
					},
					{
						id: 'NL',
						value: 'NL',
					},
					{
						id: 'QC',
						value: 'QC',
					},
				],
			},
		],
		form_additional_data: [
			{
				id: 'guardians',
				url: 'guardians',
			},
		],
	},
	{
		id: 'camp_instances',
		url: 'camp-instances',
		search_url: 'camp-instances-search',
		name: 'Camps',
		name_singular: 'Camp',
		has_create_form: true,
		default_columns: [
			{
				path: ['camps_sc', 'name'],
				name: 'Camp Name',
				ordering_option: true,
			},
			{
				path: ['year_start'],
				name: 'Year Start',
				ordering_option: true,
			},
			{
				path: ['year_end'],
				name: 'Year End',
				ordering_option: true,
			},
		],
		search_columns: [
			{
				path: ['camps_sc', 'name'],
				name: 'Camp Name',
				ordering_option: true,
			},
		],
		more_filters: [
			{
				id: 'year_end',
				name: 'Year End',
				type: 'number',
				dropdown_options: [
					{
						id: '',
						value: '',
					},
				],
			},
			{
				id: 'year_end',
				name: 'Year End',
				type: 'number',
				dropdown_options: [
					{
						id: '',
						value: '',
					},
				],
			},
		],
		form_additional_data: [
		],
	},
	{
		id: 'program_instances',
		url: 'program-instances',
		search_url: 'program-instances-search',
		name: 'Programs',
		name_singular: 'Program',
		has_create_form: true,
		default_columns: [
			{
				path: ['programs_sc', 'name'],
				name: 'Program Name',
				ordering_option: true,
			},
			{
				path: ['year_start'],
				name: 'Year Start',
				ordering_option: true,
			},
			{
				path: ['year_end'],
				name: 'Year End',
				ordering_option: true,
			},
		],
		search_columns: [
			{
				path: ['programs_sc', 'name'],
				name: 'Program Name',
				ordering_option: true,
			},
		],
		more_filters: [
			{
				id: 'year_end',
				name: 'Year End',
				type: 'number',
				dropdown_options: [
					{
						id: '',
						value: '',
					},
				],
			},
			{
				id: 'year_end',
				name: 'Year End',
				type: 'number',
				dropdown_options: [
					{
						id: '',
						value: '',
					},
				],
			},
		],
		form_additional_data: [
		],
	},
	{
		id: 'team_instances',
		url: 'team-instances',
		search_url: 'team-instances-search',
		name: 'Teams',
		name_singular: 'Team',
		has_create_form: true,
		default_columns: [
			{
				path: ['teams_sc', 'name'],
				name: 'Team',
				ordering_option: true,
			},
			{
				path: ['teams_sc', 'divisions_sc', 'name'],
				name: 'Division',
				ordering_option: true,
			},
			{
				path: ['year_start'],
				name: 'Year Start',
				ordering_option: true,
			},
			{
				path: ['year_end'],
				name: 'Year End',
				ordering_option: true,
			},
		],
		search_columns: [
			{
				path: ['teams_sc', 'name'],
				name: 'Team Name',
				ordering_option: true,
			},
		],
		more_filters: [
			{
				id: 'year_end',
				name: 'Year End',
				type: 'number',
				dropdown_options: [
					{
						id: '',
						value: '',
					},
				],
			},
			{
				id: 'year_end',
				name: 'Year End',
				type: 'number',
				dropdown_options: [
					{
						id: '',
						value: '',
					},
				],
			},
		],
		form_additional_data: [
		],
	},
	{
		id: 'camp_instance_registrations',
		url: 'camp-instances-camp-instance-registrations',
		search_url: 'camp-instances-camp-instance-registrations-search',
		name: 'Camp Registrations',
		name_singular: 'Camp Registration',
		has_create_form: true,
		default_columns: [
			{
				path: ['camp_instance_registrations_sc', 'players_sc', 'first_name'],
				name: 'First',
				ordering_option: true,
			},
			{
				path: ['camp_instance_registrations_sc', 'players_sc', 'last_name'],
				name: 'Last',
				ordering_option: true,
			},
			{
				path: ['camp_instances_sc', 'camps_sc', 'name'],
				name: 'Camp',
				ordering_option: true,
			},
			{
				path: ['camp_instances_sc', 'year_start'],
				name: 'Year Start',
				ordering_option: true,
			},
			{
				path: ['camp_instances_sc', 'year_end'],
				name: 'Year End',
				ordering_option: true,
			}
		],
		// ...
		more_filters: [],
		form_additional_data: [
			{
				id: 'camp_instances',
				url: 'camp-instances',
			},
			{
				id: 'players',
				url: 'players',
			},
		],
	},
	{
		id: 'program_instance_registrations',
		id_key: 'program_instance_registration_id',
		url: 'program-instances-program-instance-registrations',
		search_url: 'program-instances-program-instance-registrations-search',
		name: 'Program Registrations',
		name_singular: 'Program Registration',
		has_create_form: true,
		default_columns: [
			{
				path: ['program_instance_registrations_sc', 'players_sc', 'first_name'],
				name: 'First',
				ordering_option: true,
			},
			{
				path: ['program_instance_registrations_sc', 'players_sc', 'last_name'],
				name: 'Last',
				ordering_option: true,
			},
			{
				path: ['program_instances_sc', 'programs_sc', 'name'],
				name: 'Program',
				ordering_option: true,
			},
			{
				path: ['program_instances_sc', 'year_start'],
				name: 'Year Start',
				ordering_option: true,
			},
			{
				path: ['program_instances_sc', 'year_end'],
				name: 'Year End',
				ordering_option: true,
			}
		],
		more_filters: [],
		form_additional_data: [
			{
				id: 'program_instances',
				url: 'program-instances',
			},
			{
				id: 'players',
				url: 'players',
			},
		],
	},
	{
		id: 'team_instance_registrations',
		id_key: 'team_instance_registration_id',
		url: 'team-instances-team-instance-registrations',
		search_url: 'team-instances-team-instance-registrations-search',
		name: 'Team Registrations',
		name_singular: 'Team Registration',
		has_create_form: true,
		default_columns: [
			{
				path: ['team_instance_registrations_sc', 'players_sc', 'first_name'],
				name: 'First',
				ordering_option: true,
			},
			{
				path: ['team_instance_registrations_sc', 'players_sc', 'last_name'],
				name: 'Last',
				ordering_option: true,
			},
			{
				path: ['team_instances_sc', 'teams_sc', 'name'],
				name: 'Team',
				ordering_option: true,
			},
			{
				path: ['team_instances_sc', 'year_start'],
				name: 'Year Start',
				ordering_option: true,
			},
			{
				path: ['team_instances_sc', 'year_end'],
				name: 'Year End',
				ordering_option: true,
			},
		],
		more_filters: [],
		form_additional_data: [
			{
				id: 'team_instances',
				url: 'team-instances',
			},
			{
				id: 'players',
				url: 'players',
			},
		],
	},
	//
	{
		id: 'spng_surveys',
		id_key: 'spng_surveys',
		url: 'spng-surveys',
		search_url: 'spng-surveys-search',
		name: 'All SportsEngine Forms',
		name_singular: 'All SportsEngine Form',
		has_create_form: false,
		default_columns: [
			{
				path: ['name'],
				name: 'Name',
				ordering_option: true,
			},
			{
				path: ['active'],
				name: 'Active',
				ordering_option: true,
			},
			{
				path: ['archived'],
				name: 'Archived',
				ordering_option: true,
			},
			{
				path: ['type'],
				name: 'Type',
				ordering_option: true,
			},
		],
		more_filters: [],
		form_additional_data: [],
	},
]


export { resources_info };

