<template>
  <div id="detail">
    <h2>{{ blogPost.title }}</h2>
    <article>{{ blogPost.content }}</article>
    <p>Author: {{ blogPost.author }}</p>
    <ul>
      <li v-for="category in blogPost.categories" :key="category">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blogPost: {}
    }
  },
  created() {
    this.$http.get(`https://vuejs-templatedb-default-rtdb.firebaseio.com/posts/${this.id}.json`)
      .then(response => {
        return response.json();
      })
      .then(function (data) {
        this.blogPost = data;
      })
      .catch(error => {
        console.error('Error fetching blog post:', error);
      });
  }
}
</script>

<style></style>