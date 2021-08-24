<template>
    <b-button v-on:click="onClick(event)" v-bind:variant="variant"><i v-bind:class='icon'></i>{{content}}</b-button>
</template>

<script>

export default {
    name: 'Button',
    props: {
        event: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: 'Text Here'
        },
        variant: {
            type: String,
            default: 'danger'
        }
    },
    methods: {
        onClick(id) {
            this.$emit(this.event)
        }
    }
}
</script>