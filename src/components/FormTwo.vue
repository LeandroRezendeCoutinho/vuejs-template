<template>
    <div>
        <form-helper v-bind:title="'Form Two - Log In'">
            <div slot="form-header">
                <h3>Form Two - Log In</h3>
                <p>Enter your credentials</p>
            </div>
            <div slot="form-fields">
                <input type="text" name="name" required>
                <input type="password" name="password" required>
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Submit</button>
            </div>
        </form-helper>
    </div>
</template>

<script>
import formHelper from './FormHelper.vue'

export default {
    components: {
        'form-helper': formHelper
    },
    methods: {
        handleSubmit() {
            console.log('Submitted');
        }
    }
}
</script>

<style>

</style>