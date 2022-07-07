import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/zh_ch/HomePage'
import ResearchTrends from '@/components/zh_ch/ResearchTrends'
import MemberIntroduction from '@/components/zh_ch/MemberIntroduction'
import ListOfPapers from '@/components/zh_ch/ListOfPapers'
import TeamStyle from '@/components/zh_ch/TeamStyle'
import Chinese from '@/components/Chinese'
import English from '@/components/English'



Vue.use(Router)

export default new Router({
    scrollBehavior(to, from, saveTop) {

        if (saveTop) {

            return saveTop;

        } else {

            return { x: 0, y: 0 }

        }
    },
    routes: [{
            path: '/',
            name: 'root',
            redirect: { name: "zhcn" }
        },
        {
            path: '/english',
            name: 'English',
            component: English
        },
        {
            path: '/zhcn',
            name: 'zhcn',
            component: Chinese,
            children: [{
                    path: 'home',
                    name: 'HomePage',
                    component: HomePage,
                },
                {
                    path: 'research',
                    name: 'ResearchTrends',
                    component: ResearchTrends
                },
                {
                    path: 'members',
                    name: 'MemberIntroduction',
                    component: MemberIntroduction
                },
                {
                    path: 'papers',
                    name: 'ListOfPapers',
                    component: ListOfPapers
                },
                {
                    path: 'team',
                    name: 'TeamStyle',
                    component: TeamStyle
                }
            ],
            redirect: { name: "HomePage" }
        }

    ]
})