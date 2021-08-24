<template>
    <div class="container">
        <hr>
        <Header title="Leaderboard Vue.js application" v-bind:showAddUser="showAddUser" v-on:toggle-add-user="toggleAddUser" />
        <router-view v-bind:showAddUser="showAddUser"></router-view>
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'App',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            showAddUser: false
        }
    },
    methods: {
        toggleAddUser() {
            this.showAddUser = !this.showAddUser
        },
        
    }
}
</script>

<style>
    /* .vertical-center {
        min-height: 100%;  
        min-height: 100vh;
    } */
</style>
