<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h2>All Blog Posts</h2>
    <ul>
      <li v-for="post in posts.slice(0, 3)" :key="post.id">
        <h3 v-rainbow>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
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