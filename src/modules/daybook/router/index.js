export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "DayBook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children : [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "DayBook-no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue'),
            
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "DayBook-entry-view" */ '@/modules/daybook/views/EntryView.vue'),
        },
        {
            path: 'pathMatch(/*)*',
            redirect : ''
        }
    ]
}