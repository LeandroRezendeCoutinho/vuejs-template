<template>
    <footer>
        <p>{{ title }}</p>
    </footer>
</template>

<script>
import { bus } from '../main';

export default {
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            title: 'Copyright vuejs 2018'
        }
    },
    created() {
        bus.$on('titleChanged', (title) => {
            this.title = title
        })
    }
}
</script>

<style scoped>
footer {
    background: #222;
    padding: 6px;
}
p {
    color: lightgreen;
    text-align: center;
}
</style>