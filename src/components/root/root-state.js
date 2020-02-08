export const rootState = {
    loading: true,
    username: '',
    currentTab: 'my_learning',
    currentSubTab: 'managment',
    tabs: {

        'search_cat' : {
            id: 1,
            code: 'search_cat',
            name: 'Поиск',
            type: 'link', //tab,link
            link: 'https://bu-online.beeline.ru/view_doc.html?mode=education_catalog'

        },
        'my_learning': {
            id: 2,
            code: 'my_learning',
            name: 'Мое обучение',
            type: 'tab', // tab,link
            subtabs: [
                {
                    id: 1,
                    code: 'managment',
                    name: 'Управление',
                    isActive: true,

                },
                {
                    id: 2,
                    code: 'professional',
                    name: 'Профессиональное',
                    isActive: false,

                },
                {
                    id: 3,
                    code: 'courses',
                    name: 'Курсы',
                    isActive: false,

                },
                {
                    id: 4,
                    code: 'tests',
                    name: 'Тесты',
                    isActive: false,

                },
                {
                    id: 5,
                    code: 'events',
                    name: 'Тренинги',
                    isActive: false,

                },
                {
                    id: 6,
                    code: 'certificates',
                    name: 'Сертификация',
                    isActive: false,

                },
                {
                    id: 7,
                    code: 'usefull',
                    name: 'Полезное',
                    isActive: false,

                }
            ]
        },
        'sp_learning' : {
            id: 3,
            code: 'sp_learning',
            name: 'Обучение специалистов',
            type: 'tab', //tab,link
            subtabs: [
                {
                    id: 1,
                    code: 'spec_list',
                    name: 'Специалисты',
                    isActive: true,

                },
                {
                    id: 2,
                    code: 'spec_courses',
                    name: 'Курсы',
                    isActive: false,

                },
                {
                    id: 3,
                    code: 'spec_trainings',
                    name: 'Тренинги',
                    isActive: false,

                },
                {
                    id: 4,
                    code: 'spec_posttrainings',
                    name: 'Посттренинги',
                    isActive: false,

                },
                {
                    id: 5,
                    code: 'spec_development',
                    name: 'Развитие',
                    isActive: false,

                },
                {
                    id: 6,
                    code: 'spec_tests',
                    name: 'Тесты',
                    isActive: false,

                },
                {
                    id: 7,
                    code: 'spec_certificates',
                    name: 'Сертификация',
                    isActive: false,

                },
            ],

        },
        'my_roles' : {
            id: 4,
            code: 'my_roles',
            name: 'Мои роли',
            type: 'link', //tab,link
            link: 'https://bu-online.beeline.ru/view_doc.html?mode=doc&doc_id=6481957441578098733'

        }
    }



}