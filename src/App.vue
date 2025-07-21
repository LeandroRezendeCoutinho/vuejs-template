<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'vuejs-template',
    }
  },
  methods: {
    greeting () {
      return 'Hello World'
    }
  }
}
</script>

<style>
</style>
