<template>
  <div id="detail">
    <h2>{{ blogPost.title }}</h2>
    <article>{{ blogPost.body }}</article>
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
    this.$http.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then(response => {
        this.blogPost = response.body;
      })
      .catch(error => {
        console.error('Error fetching blog post:', error);
      });
  }
}
</script>

<style></style>