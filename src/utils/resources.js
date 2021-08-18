// ...
// params ...

const resources_info = [
	{
		id: 'adult_reps',
		url: 'adult-reps',
		name: 'Adult Reps',
		name_singular: 'Adult Rep',
		default_columns: [
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
		name: 'Coaches',
		name_singular: 'Coach',
		default_columns: [
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
		name: 'Guardians',
		name_singular: 'Guardian',
		default_columns: [
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
		name: 'Players',
		name_singular: 'Player',
		default_columns: [
			{
				path: ['first_name'],
				name: 'First',
			},
			{
				path: ['last_name'],
				name: 'Last',
			},
			{
				path: ['date_of_birth'],
				name: 'Date of Birth',
			},
			{
				path: ['gender'],
				name: 'Gender',
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
		name: 'Camps',
		name_singular: 'Camp',
		default_columns: [
			{
				path: ['camps_sc', 'name'],
				name: 'Camp Name',
			},
			{
				path: ['year_start'],
				name: 'Year Start',
			},
			{
				path: ['year_end'],
				name: 'Year End',
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
		name: 'Programs',
		name_singular: 'Program',
		default_columns: [
			{
				path: ['programs_sc', 'name'],
				name: 'Program Name',
			},
			{
				path: ['year_start'],
				name: 'Year Start',
			},
			{
				path: ['year_end'],
				name: 'Year End',
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
		name: 'Teams',
		name_singular: 'Team',
		default_columns: [
			{
				path: ['teams_sc', 'name'],
				name: 'Team Name',
			},
			{
				path: ['year_start'],
				name: 'Year Start',
			},
			{
				path: ['year_end'],
				name: 'Year End',
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
		name: 'Camp Registrations',
		name_singular: 'Camp Registration',
		default_columns: [
			{
				path: ['camp_instance_registrations_sc', 'players_sc', 'first_name'],
				name: 'First',
			},
			{
				path: ['camp_instance_registrations_sc', 'players_sc', 'last_name'],
				name: 'Last',
			},
			{
				path: ['camp_instances_sc', 'camps_sc', 'name'],
				name: 'Camp',
			},
			{
				path: ['camp_instances_sc', 'year_start'],
				name: 'Year Start',
			}
			{
				path: ['camp_instances_sc', 'year_end'],
				name: 'Year End',
			}
		],
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
		url: 'program-instances-program-instance-registrations',
		name: 'Program Registrations',
		name_singular: 'Program Registration',
		default_columns: [
			{
				path: ['program_instance_registrations_sc', 'players_sc', 'first_name'],
				name: 'First',
			},
			{
				path: ['program_instance_registrations_sc', 'players_sc', 'last_name'],
				name: 'Last',
			},
			{
				path: ['program_instances_sc', 'camps_sc', 'name'],
				name: 'Camp',
			},
			{
				path: ['program_instances_sc', 'year_start'],
				name: 'Year Start',
			}
			{
				path: ['program_instances_sc', 'year_end'],
				name: 'Year End',
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
		name: 'Team Registrations',
		name_singular: 'Team Registration',
		default_columns: [
			{
				path: ['team_instance_registrations_sc', 'players_sc', 'first_name'],
				name: 'First',
			},
			{
				path: ['team_instance_registrations_sc', 'players_sc', 'last_name'],
				name: 'Last',
			},
			{
				path: ['team_instances_sc', 'teams_sc', 'name'],
				name: 'Team',
			},
			{
				path: ['team_instances_sc', 'year_start'],
				name: 'Year Start',
			}
			{
				path: ['team_instances_sc', 'year_end'],
				name: 'Year End',
			}
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
	}
]



