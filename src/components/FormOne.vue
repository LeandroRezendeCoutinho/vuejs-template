<template>
    <div>
        <form-helper v-bind:title="'Form One - Contact Us'">
            <div slot="form-header">
                <h3>Form One - Contact Us</h3>
                <p>Fill this form to contact us</p>
            </div>
            <div slot="form-fields">
                <input type="text" name="name" required>
                <label>Your message:</label>
                <textarea></textarea>
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
            console.log('Form submitted');
        }
    }
}
</script>

<style>

label {
    display: block;
    margin: 6px 0;
    font-weight: bold;    
}

textarea {
    height: 100px;
    width: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
}
</style>