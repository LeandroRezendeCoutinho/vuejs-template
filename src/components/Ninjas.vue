<template>
  <div id="ninjas">
    <ul>
      <li v-bind:key="ninja.name" v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteNinja">Delete Ninja</button>
  </div>
</template>

<script>
export default {
  props: { 
    ninjas: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    deleteNinja() {
      this.ninjas.pop();
    }
  },
  // lifecycle hooks
  // beforeCreate() {
  //   alert('beforeCreate')
  // },
  // created() {
  //   alert('created')
  // },
  // beforeMount() {
  //   alert('beforeMount')
  // },
  // mounted() {
  //   alert('mounted')
  // },
  // beforeUpdate() {
  //   alert('beforeUpdate')
  // },
  // updated() {
  //   alert('updated')
  // },
  // beforeDestroy() {
  //   alert('beforeDestroy')
  // },
  // destroyed() {
  //   alert('destroyed')
  // }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
