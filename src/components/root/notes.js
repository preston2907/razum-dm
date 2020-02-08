let state = {
    currentTab: 'my_learning',
	tabs: [
		{
            id: 1,
            code: 'my_learning',
			name: 'Мое обучение',
			type: 'tab', // tab,link
            subtabs: [
                {
                    id: 1,
                    code: 'managment',
                    name: 'Управление',
                    default: true,

                },
                {
                    id: 2,
                    code: 'professional',
                    name: 'Профессиональное',
                    default: false,

                },
                {
                    id: 3,
                    code: 'certificates',
                    name: 'Сертификация',
                    default: false,

                },
                {
                    id: 4,
                    code: 'usefull',
                    name: 'Полезное',
                    default: false,

                }
            ]
		}
    ],


}