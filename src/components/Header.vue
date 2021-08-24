<template>
    <header>
        <div class="row">
            <div class="col-9"><h1> <center>{{ title }}</center> </h1></div>
            <div class="col-3" v-show="homePage">
                <div class="d-grid gap-2 d-flex justify-content-end">
                    <button v-bind:class="showAddUser ? 'btn btn-danger' : 'btn btn-success'" v-on:click="$emit('toggle-add-user')">{{ showAddUser ? 'Close' : 'Add User' }}</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        props: {
            showAddUser: Boolean,
            title: {
                type: String,
                default: 'Title here'
            }
        },
        computed: {
            homePage() {
                if(this.$route.path === '/') {
                    return true
                } else {
                    return false
                }
            }
        }
    }
</script>

<style scoped></style>
