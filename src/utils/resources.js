// ...
// params ...

const resources_info = [
	{
		id: 'adult_reps',
		url: '_persons/_adult_rep/adult-reps',
		search_url: '_persons/_adult_rep/adult-reps-search',
		search_columns_str: 'Full name, email, phone',
		name: 'Adult Reps',
		name_singular: 'Adult Rep',
		has_create_form: true,
		default_columns: [
			{
				path: ['full_name'],
				id: 'full_name',
				name: 'Name',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['email'],
				id: 'email',
				name: 'Email',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['mobile_phone'],
				id: 'mobile_phone',
				name: 'Mobile',
				ordering_option: true,
				highlight_row_items: false,
			},
		],
		search_columns: [
			{
				path: ['full_name'],
				id: 'full_name',
				name: 'Name',
			},
			{
				path: ['email'],
				id: 'email',
				name: 'Email',
			},
			{
				path: ['mobile_phone'],
				id: 'mobile_phone',
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
		url: '_persons/_coach/coaches',
		search_url: '_persons/_coach/coaches-search',
		search_columns_str: 'Full name, email, phone',
		name: 'Coaches',
		name_singular: 'Coach',
		has_create_form: true,
		default_columns: [
			{
				path: ['full_name'],
				id: 'full_name',
				name: 'Name',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['email'],
				id: 'email',
				name: 'Email',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['mobile_phone'],
				id: 'mobile_phone',
				name: 'Mobile',
				ordering_option: true,
				highlight_row_items: false,
			},
		],
		search_columns: [
			{
				path: ['full_name'],
				id: 'full_name',
				name: 'Name',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['email'],
				id: 'email',
				name: 'Email',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['mobile_phone'],
				id: 'mobile_phone',
				name: 'Mobile',
				ordering_option: true,
				highlight_row_items: false,
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
		url: '_persons/_guardian/guardians',
		search_url: 'guardians-search',
		search_columns_str: 'Full name, email, phone',
		name: 'Guardians',
		name_singular: 'Guardian',
		has_create_form: true,
		default_columns: [
			{
				path: ['full_name'],
				id: 'full_name',
				name: 'Name',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['email'],
				name: 'Email',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['mobile_phone'],
				name: 'Mobile',
				ordering_option: true,
				highlight_row_items: false,
			},
		],
		search_columns: [
			{
				path: ['full_name'],
				id: 'full_name',
				name: 'Name',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['email'],
				id: 'email',
				name: 'Email',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['mobile_phone'],
				id: 'mobile_phone',
				name: 'Mobile',
				ordering_option: true,
				highlight_row_items: false,
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
		url: '_persons/_player/players',
		search_url: '_persons/_player/players-search',
		search_columns_str: 'Full name, email, phone',
		name: 'Players',
		name_singular: 'Player',
		has_create_form: true,
		default_columns: [
			{
				path: ['first_name'],
				id: 'first_name',
				name: 'First',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['last_name'],
				id: 'last_name',
				name: 'Last',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['date_of_birth'],
				id: 'date_of_birth',
				name: 'Date of Birth',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['gender'],
				id: 'gender',
				name: 'Gender',
				ordering_option: true,
				highlight_row_items: false,
			},
		],
		search_columns: [
			{
				path: ['first_name'],
				id: 'first_name',
				name: 'First',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['last_name'],
				id: 'last_name',
				name: 'Last',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['email'],
				id: 'email',
				name: 'Email',
				ordering_option: true,
				highlight_row_items: false,
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
		url: '_programs/_camp_instance/camp-instances',
		search_url: '_programs/_camp_instance/camp-instances-search',
		search_columns_str: 'Name',
		name: 'Camps',
		name_singular: 'Camp',
		has_create_form: false,
		default_columns: [
			{
				path: ['camps_sc', 'name'],
				id: 'camp_name',
				name: 'Camp Name',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['year_start'],
				id: 'year_start',
				name: 'Year Start',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['year_end'],
				id: 'year_end',
				name: 'Year End',
				ordering_option: true,
				highlight_row_items: false,
			},
		],
		search_columns: [
			{
				path: ['camps_sc', 'name'],
				name: 'Camp Name',
				ordering_option: true,
				highlight_row_items: false,
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
		url: '_programs/_program_instance/program-instances',
		search_url: '_programs/_program_instance/program-instances-search',
		search_columns_str: 'Name',
		name: 'Programs',
		name_singular: 'Program',
		has_create_form: false,
		default_columns: [
			{
				path: ['programs_sc', 'name'],
				id: 'program_name',
				name: 'Program Name',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['year_start'],
				id: 'year_start',
				name: 'Year Start',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['year_end'],
				id: 'year_end',
				name: 'Year End',
				ordering_option: true,
				highlight_row_items: false,
			},
		],
		search_columns: [
			{
				path: ['programs_sc', 'name'],
				name: 'Program Name',
				ordering_option: true,
				highlight_row_items: false,
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
		url: '_programs/_team_instance/team-instances',
		search_url: '_programs/_team_instance/team-instances-search',
		search_columns_str: 'Name, Division',
		name: 'Teams',
		name_singular: 'Team',
		has_create_form: false,
		default_columns: [
			{
				path: ['teams_sc', 'name'],
				id: 'team_name',
				name: 'Team',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['teams_sc', 'divisions_sc', 'name'],
				id: 'team_division_name',
				name: 'Division',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['year_start'],
				id: 'year_start',
				name: 'Year Start',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['year_end'],
				id: 'year_end',
				name: 'Year End',
				ordering_option: true,
				highlight_row_items: false,
			},
		],
		search_columns: [
			{
				path: ['teams_sc', 'name'],
				name: 'Team Name',
				ordering_option: true,
				highlight_row_items: false,
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
		id_key: 'camp_instance_registration_id',
		url: '_registrations/_camp_instance_registration/camp-instances-camp-instance-registrations',
		search_url: '_registrations/_camp_instance_registration/camp-instances-camp-instance-registrations-search',
		search_columns_str: 'Player full name, camp name',
		name: 'Camp Registrations',
		name_singular: 'Camp Registration',
		has_create_form: true,
		default_columns: [
			{
				path: ['camp_instance_registrations_sc', 'players_sc', 'first_name'],
				id: 'camp_instance_registration_player_first_name',
				name: 'First',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['camp_instance_registrations_sc', 'players_sc', 'last_name'],
				id: 'camp_instance_registration_player_last_name',
				name: 'Last',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['camp_instances_sc', 'camps_sc', 'name'],
				id: 'camp_instance_camp_name',
				name: 'Camp',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['camp_instances_sc', 'year_start'],
				id: 'year_start',
				name: 'Year Start',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['camp_instances_sc', 'year_end'],
				id: 'year_end',
				name: 'Year End',
				ordering_option: true,
				highlight_row_items: false,
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
		url: '_registrations/_program_instance_registration/program-instances-program-instance-registrations',
		search_url: '_registrations/_program_instance_registration/program-instances-program-instance-registrations-search',
		search_columns_str: 'Player full name, program name',
		name: 'Program Registrations',
		name_singular: 'Program Registration',
		has_create_form: true,
		default_columns: [
			{
				path: ['program_instance_registrations_sc', 'players_sc', 'first_name'],
				id: 'program_instance_registration_player_first_name',
				name: 'First',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['program_instance_registrations_sc', 'players_sc', 'last_name'],
				id: 'program_instance_registration_player_last_name',
				name: 'Last',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['program_instances_sc', 'programs_sc', 'name'],
				id: 'program_instance_program_name',
				name: 'Program',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['program_instances_sc', 'year_start'],
				id: 'program_instance_year_start',
				name: 'Year Start',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['program_instances_sc', 'year_end'],
				id: 'program_instance_year_end',
				name: 'Year End',
				ordering_option: true,
				highlight_row_items: false,
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
		url: '_registrations/_team_instance_registration/team-instances-team-instance-registrations',
		search_url: '_registrations/_team_instance_registration/team-instances-team-instance-registrations-search',
		search_columns_str: 'Player full name, team name, SportsEngine id',
		name: 'Team Registrations',
		name_singular: 'Team Registration',
		has_create_form: true,
		default_columns: [
			{
				path: ['team_instance_registrations_sc', 'players_sc', 'first_name'],
				id: 'team_instance_registration_player_first_name',
				name: 'First',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['team_instance_registrations_sc', 'players_sc', 'last_name'],
				id: 'team_instance_registration_player_last_name',
				name: 'Last',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['team_instances_sc', 'teams_sc', 'name'],
				id: 'team_instance_team_name',
				name: 'Team',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['team_instances_sc', 'year_start'],
				id: 'team_instance_year_start',
				name: 'Year Start',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['team_instances_sc', 'year_end'],
				id: 'team_instance_year_end',
				name: 'Year End',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['team_instance_registrations_sc', 'spng_survey_result_id'],
				id: 'team_instance_registration_spng_survey_result_id',
				name: 'Spng Form ID',
				ordering_option: false,
				highlight_row_items: true,
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
		transformations: [
			{
				id: 'team_instance_registration_spng_survey_result_id',
				func: [
					function(val) {
						// If reg
						return ((!!val) ? val : '');
					}
				],
			},
		],
	},
	//
	{
		id: 'spng_surveys',
		id_key: 'id',
		url: '_spng_surveys/spng-surveys',
		search_url: '_spng_surveys/spng-surveys-search',
		search_columns_str: 'Name',
		name: 'All SportsEngine Forms',
		name_singular: 'SportsEngine Form',
		has_create_form: false,
		default_columns: [
			{
				path: ['name'],
				id: 'name',
				name: 'Name',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['active'],
				id: 'active',
				name: 'Active',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['archived'],
				id: 'archived',
				name: 'Archived',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['type'],
				id: 'type',
				name: 'Type',
				ordering_option: true,
				highlight_row_items: false,
			},
		],
		more_filters: [],
		form_additional_data: [],
		transformations: [],
	},

	{
		id: 'spng_surveys_camp_instance',
		id_key: 'id',
		url: '_spng_surveys/spng-surveys-camp-instance',
		search_url: '_spng_surveys/spng-surveys-search-camp-instance',
		search_columns_str: 'Name',
		name: 'Camp SportsEngine Forms',
		name_singular: 'Camp SportsEngine Form',
		has_create_form: false,
		default_columns: [
			{
				path: ['name'],
				id: 'name',
				name: 'Name',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['active'],
				id: 'active',
				name: 'Active',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['archived'],
				id: 'archived',
				name: 'Archived',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['type'],
				id: 'type',
				name: 'Type',
				ordering_option: true,
				highlight_row_items: false,
			},
		],
		more_filters: [],
		form_additional_data: [],
		transformations: [],
	},
	{
		id: 'spng_surveys_program_instance',
		id_key: 'id',
		url: '_spng_surveys/spng-surveys-program-instance',
		search_url: '_spng_surveys/spng-surveys-search-program-instance',
		search_columns_str: 'Name',
		name: 'Program SportsEngine Forms',
		name_singular: 'Program SportsEngine Form',
		has_create_form: false,
		default_columns: [
			{
				path: ['name'],
				id: 'name',
				name: 'Name',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['active'],
				id: 'active',
				name: 'Active',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['archived'],
				id: 'archived',
				name: 'Archived',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['type'],
				id: 'type',
				name: 'Type',
				ordering_option: true,
				highlight_row_items: false,
			},
		],
		more_filters: [],
		form_additional_data: [],
		transformations: [],
	},
	{
		id: 'spng_surveys_team_instance',
		id_key: 'id',
		url: '_spng_surveys/spng-surveys-team-instance',
		search_url: '_spng_surveys/spng-surveys-search-team-instance',
		search_columns_str: 'Name',
		name: 'Team SportsEngine Forms',
		name_singular: 'Team SportsEngine Form',
		has_create_form: false,
		default_columns: [
			{
				path: ['name'],
				id: 'name',
				name: 'Name',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['active'],
				id: 'active',
				name: 'Active',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['archived'],
				id: 'archived',
				name: 'Archived',
				ordering_option: true,
				highlight_row_items: false,
			},
			{
				path: ['type'],
				id: 'type',
				name: 'Type',
				ordering_option: true,
				highlight_row_items: false,
			},
		],
		more_filters: [],
		form_additional_data: [],
		transformations: [],
	},
]


export { resources_info };

