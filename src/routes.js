import ShowBlogs from "./components/ShowBlogs.vue"
import AddBlog from "./components/AddBlog.vue"
import All from "./components/All.vue"
import BlogDetail from "./components/BlogDetail.vue"

export default [
    { path: '/', component: All },
    { path: '/blogs', component: ShowBlogs },
    { path: '/add', component: AddBlog },
    { path: '/blog/:id', component: BlogDetail }
]