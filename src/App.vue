<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
import listBlogs from './components/listBlogs.vue'

export default {
  components: {
    'add-blog': AddBlog,
    'show-blogs': ShowBlogs,
    'list-blogs': listBlogs
  },
  data() {
    return {
      title: 'Vue Ninjas',
    }
  },
  methods: {
  }
}

</script>

<style scoped></style>
