<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h2>All Blog Posts</h2>
    <input type="text" v-model="search" placeholder="Search posts..." />
    <ul>
      <li v-for="post in filteredPosts" :key="post.id">
        <h3 v-rainbow>{{ post.title | toUpperCase }}</h3>
        <p>{{ post.body | snippet }}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      posts: [],
      search: ''
    }
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.error('Error fetching blog posts:', error);
        });
    }
  },
  computed: {
    filteredPosts: function () {
      return this.posts.filter(post => {
        return post.title.match(this.search);
      });
    }
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase()
    }
  }
}
</script>

<style scoped>
#show-blogs {
  margin: 20px auto;
  max-width: 600px;
}

h2 {
  margin-bottom: 20px;
}

h3 {
  margin: 10px 0 5px;
}

p {
  margin: 0 0 15px;
}
</style>