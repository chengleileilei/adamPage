import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import ResearchTrends from '@/components/ResearchTrends'
import MemberIntroduction from '@/components/MemberIntroduction'
import ListOfPapers from '@/components/ListOfPapers'
import TeamStyle from '@/components/TeamStyle'



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/research',
            name: 'ResearchTrends',
            component: ResearchTrends
        },
        {
            path: '/members',
            name: 'MemberIntroduction',
            component: MemberIntroduction
        },
        {
            path: '/papers',
            name: 'ListOfPapers',
            component: ListOfPapers
        },
        {
            path: '/team',
            name: 'TeamStyle',
            component: TeamStyle
        }
    ]
})