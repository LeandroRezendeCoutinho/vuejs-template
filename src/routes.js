import ShowBlogs from "./components/ShowBlogs.vue"
import AddBlog from "./components/AddBlog.vue"
import All from "./components/All.vue"

export default [
    { path: '/', component: All },
    { path: '/blogs', component: ShowBlogs },
    { path: '/add', component: AddBlog }
]