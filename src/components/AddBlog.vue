<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form action="">
      <label>Blog title:</label>
      <input type="text" v-model="blog.title" required />
      <label>Blog content:</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories" />
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories" />
        <label>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories" />
        <label>Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories" />
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in blog.authors" v-bind:key="author">
          {{ author }}
        </option>
      </select>
    </form>
    <form id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p> {{ blog.content }}</p>
      <p>Blog categories:</p>
      <ul>
        <li v-for="category in blog.categories" v-bind:key="category">
          {{ category }}
        </li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </form>
  </div>
</template>

<script>
export default {
  props: {
  },
  components: {

  },
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: 'The Net Ninja',
        authors: ['The Net Ninja', 'Ryu', 'Chun-Li', 'Yoshi']
      },
    }
  },
  methods: {

  }
}
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}
</style>