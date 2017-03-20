export const PAGES_MENU = [
    {
        path: 'pages',
        children: [
            {
                path: 'news',
                data: {
                    menu: {
                        title: '头条管理',
                        icon: 'ion-android-home',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            },
            {
                path: 'forum',
                data: {
                    menu: {
                        title: '社区管理',
                        icon: 'ion-edit',
                        selected: false,
                        expanded: false,
                        order: 100,
                    }
                },
                children: [
                    {
                        path: 'users',
                        data: {
                            menu: {
                                title: '用户管理',
                            }
                        }
                    },
                    {
                        path: 'comments',
                        data: {
                            menu: {
                                title: '评论管理',
                            }
                        }
                    }
                ]
            },
            {
                path: 'push',
                data: {
                    menu: {
                        title: 'Push管理',
                        icon: 'ion-gear-a',
                        selected: false,
                        expanded: false,
                        order: 250,
                    }
                }
            },
            {
                path: 'statistics',
                data: {
                    menu: {
                        title: '数据统计',
                        icon: 'ion-stats-bars',
                        selected: false,
                        expanded: false,
                        order: 200,
                    }
                }
            },
            {
                path: 'feedback',
                data: {
                    menu: {
                        title: '意见反馈',
                        icon: 'ion-android-laptop',
                        selected: false,
                        expanded: false,
                        order: 300,
                    }
                }
            },
            {
                path: 'materials',
                data: {
                    menu: {
                        title: '素材管理',
                        icon: 'ion-compose',
                        selected: false,
                        expanded: false,
                        order: 400,
                    }
                }
            },
            {
                path: 'orders',
                data: {
                    menu: {
                        title: '订单管理',
                        icon: 'ion-grid',
                        selected: false,
                        expanded: false,
                        order: 500,
                    }
                }
            },
            {
                path: 'publictest',
                data: {
                    menu: {
                        title: '众测管理',
                        icon: 'ion-ios-location-outline',
                        selected: false,
                        expanded: false,
                        order: 600,
                    }
                }
            },
            {
                path: 'activities',
                data: {
                    menu: {
                        title: '活动管理',
                        icon: 'ion-document',
                        selected: false,
                        expanded: false,
                        order: 650,
                    }
                }
            },
            {
                path: '',
                data: {
                    menu: {
                        title: 'Menu Level 1',
                        icon: 'ion-ios-more',
                        selected: false,
                        expanded: false,
                        order: 700,
                    }
                },
                children: [
                    {
                        path: '',
                        data: {
                            menu: {
                                title: 'Menu Level 1.1',
                                url: '#'
                            }
                        }
                    },
                    {
                        path: '',
                        data: {
                            menu: {
                                title: 'Menu Level 1.2',
                                url: '#'
                            }
                        },
                        children: [
                            {
                                path: '',
                                data: {
                                    menu: {
                                        title: 'Menu Level 1.2.1',
                                        url: '#'
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            {
                path: '',
                data: {
                    menu: {
                        title: 'External Link',
                        url: '#',
                        icon: 'ion-android-exit',
                        order: 800,
                        target: '_blank'
                    }
                }
            }
        ]
    }
];