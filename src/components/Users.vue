<template>
    <div>
        <b-table-simple striped hover>
            <b-thead>
                <b-tr>
                    <b-th>Delete</b-th>
                    <b-th class="col-6" sticky-column>Name</b-th>
                    <b-th class="col-3 text-center">Action</b-th>
                    <b-th class="col-1">Points</b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr :key="user.id" v-for="user in users">
                    <b-td>
                        <Button 
                        variant='danger' 
                        content="" 
                        icon="fas fa-times" 
                        event="delete-user" 
                        v-on:delete-user="onDelete(user.id)"/>
                    </b-td>
                    <b-th sticky-column>
                        {{user.name}}
                    </b-th>
                    <b-td class="text-center">
                        <Button 
                        variant="primary" 
                        content="" 
                        icon="fas fa-plus-circle" 
                        event="add-point" 
                        v-on:add-point="addPoint(user.id)"
                        v-on:click="$emit('add-point')"
                        />
                        &nbsp;
                        <Button 
                        variant='warning' 
                        content="" 
                        icon='fas fa-minus-circle' 
                        event="sub-point" 
                        v-on:sub-point="subPoint(user.id)"
                        v-on:click="$emit('sub-point')"
                        />
                    </b-td>
                    <b-td>
                        <center>{{user.points}}</center>
                    </b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
    </div>
</template>

<script>

    import Button from './Button.vue'

    export default {
        name: 'Users',
        components: {
            Button
        },
        props: {
            users: Array
        },
        methods: {
            onDelete(id) {
                this.$emit('delete-user', id)
            },
            addPoint(id) {
                this.$emit('add-point', id)
            },
            subPoint(id) {
                this.$emit('sub-point', id)
            }
        }
    }
</script>

<style scoped>

</style>
