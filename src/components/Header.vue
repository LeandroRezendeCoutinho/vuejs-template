<template>
    <header>
        <h1 v-on:click="changeTitle">{{ headerTitle }}</h1>
    </header>
</template>

<script>
import { bus } from '../main';

export default {
    props: {
        headerTitle: {
            type: String,
        }
    },
    data() {
        return {
            title: 'Ninja Template'
        }
    },
    methods: {
        changeTitle: function() {
            this.headerTitle = this.title;
            bus.$emit('titleChanged', 'Vue updated!');
        }
    }
}
</script>

<style scoped>
    header {
        background: lightgreen;
        padding: 10px;        
    }
    h1 {
        color: #222;
        text-align: center;
    }
</style>