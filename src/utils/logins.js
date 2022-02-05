// ...


const logins_info = [
{
		id: 'adult_commishes',
		url: '_logins/adult-commishes',
		search_url: '_logins/adult-commishes',
		search_columns_str: 'Name, Email',
		name: 'Adult Commishes',
		name_singular: 'Adult Commish',
		has_create_form: true,
		default_columns: [
			{
				path: ['name'],
				id: 'name',
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
		],
		search_columns: [

		],
		more_filters: [

		],
		// ...
	},
	{
		id: 'adult_reps',
		url: '_logins/adult-reps',
		search_url: '_logins/adult-reps',
		search_columns_str: 'Name, Email',
		name: 'Adult Reps',
		name_singular: 'Adult Rep',
		has_create_form: true,
		default_columns: [
			{
				path: ['name'],
				id: 'name',
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
		],
		search_columns: [

		],
		more_filters: [

		],
		// ...
	},
	{
		id: 'coaches',
		url: '_logins/coaches',
		search_url: '_logins/coaches',
		search_columns_str: 'Name, Email',
		name: 'Coaches',
		name_singular: 'Coach',
		has_create_form: true,
		default_columns: [
			{
				path: ['name'],
				id: 'name',
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
		],
		search_columns: [

		],
		more_filters: [

		],
		// ...
	},
]


export { logins_info };

