<template>
  <div>
    <app-header v-bind:headerTitle="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:footerTitle="title"></app-footer>
    <slots>
      <h1 slot="title">Slots</h1>
      <p slot="subtitle">This is a named slot</p>
    </slots>
    <form-helper>
      <div slot="form-header">
        <h3>Form Header Slot</h3>
        <p>This is a form header</p>
      </div>
      <div slot="form-fields">
        <input type="text" name="name" required>
        <input type="password" name="password" required>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Form one</button>
    <button v-on:click="component = 'form-two'">Form two</button>
    <add-blog></add-blog>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'
import slots from './components/slots.vue'
import FormHelper from './components/FormHelper.vue'
import FormOne from './components/FormOne.vue'
import FormTwo from './components/FormTwo.vue'
import AddBlog from './components/AddBlog.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas,
    'slots': slots,
    'form-helper': FormHelper,
    'form-one': FormOne,
    'form-two': FormTwo,
    'add-blog': AddBlog
  },
  data() {
    return {
      ninjas: [
        { name: 'Ryu', speciality: 'Vue Components', show: false },
        { name: 'Crystal', speciality: 'HTML Wizardry', show: false },
        { name: 'Hitoshi', speciality: 'Click Events', show: false },
        { name: 'Tango', speciality: 'Conditionals in Vue', show: false },
        { name: 'Kami', speciality: 'Webpack', show: false },
        { name: 'Yoshi', speciality: 'Data Diggin', show: false }
      ],
      title: 'Vue Ninjas',
      component: 'form-two'
    }
  },
  methods: {
    updateTitle(title) {
      this.title = title;
    },
    handleSubmit() {
      console.log('submitted');
    }
  }
}
</script>

<style scoped></style>
