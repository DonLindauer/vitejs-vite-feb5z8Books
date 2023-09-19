import { createRouter, createWebHistory } from 'vue-router'
import AuthorView from '../views/AuthorView.vue'
import AuthorsView from '../views/AuthorsView.vue'
import BookView from '../views/BookView.vue'
import BooksView from '../views/BooksView.vue'
import SettingsView from '../views/SettingsView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/settings',
            name: 'settings',
            component: SettingsView
        },
        {
            path: '/authors',
            name: 'authors',
            component: AuthorsView
        },
        {
            path: '/author/:id',
            name: 'author',
            component: AuthorView
        },
        {
            path: '/books',
            name: 'books',
            component: BooksView
        },
        {
            path: '/book/:id',
            name: 'book',
            component: BookView
        },
        {
            path: '/',
            redirect: { path: "/settings" },
            name: 'home',
            component: SettingsView
        },
    ]
})

export default router