<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/blogs">Blogs</router-link>
            </li>
            <li>
                <router-link to="/add">Add</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
    background-color: #444;
    color: white;
    padding: 14px 0;
    margin-bottom: 20px;
}

nav ul {
    list-style-type: none;
    text-align: center;
    margin: 0;
}

nav li {
    display: inline-block;
    margin: 0 10px;
}

nav a {
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}

nav a:hover {
    text-decoration: underline;
}

.router-link-active {
    background: #eee;
    color: #444
}
</style>