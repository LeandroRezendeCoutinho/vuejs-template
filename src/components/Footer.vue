<template>
    <footer>
        <p>{{ footerTitle }}</p>
    </footer>
</template>

<script>
import { bus } from '../main';

export default {
    props: {
        footerTitle: {
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
            this.footerTitle = title
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