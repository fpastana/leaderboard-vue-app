<template>
	<div class="row align-items-center vertical-center">
			<div v-show="showAddUser">
				<AddUser v-on:user-added="userAdded" />
			</div>
			<div class="col-lg-12">
					<Users 
					v-on:delete-user="deleteUser" 
					v-bind:users="users" 
					v-on:add-point="addPoint"
					v-on:sub-point="subPoint"
					/>
			</div>
	</div>
</template>

<script>

import Users from '../components/Users.vue'
import AddUser from '../components/AddUser.vue'

export default {
    name: 'Home',
	props: {
		showAddUser: Boolean
	},
    components: {
        Users,
		AddUser
    },
	data(){
		return {
			users: [],
		}
	},
	methods: {
		async userAdded(data) {
			this.users = [...this.users, data]
		},
		async deleteUser(id) {
            if(confirm('Are you sure?')){

                const res = await fetch(`api/users/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })

                if(res.status === 200) {
                    this.users = this.users.filter(function(user){
                        return user.id !== id
                    })
                } else {
                    alert('Error deleting user')
                }
            }
        },
		async fetchUsers() {
            const res = await fetch('api/users')

            const data = await res.json()

            return data
        },
        async fetchUser(id) {
            const res = await fetch(`api/users/${id}`)

            const data = await res.json()

            return data
        },
        async addPoint(id) {
            const userPoints = await this.fetchUser(id)
            const updUser = {...userPoints, points: userPoints + 1}

            const res = await fetch(`api/users/addPoint/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(updUser)
            })

            const data = await this.fetchUsers()

            this.users = data

            /*
            const data = await res.json()

            this.users = this.users.map(function(user) {
                if(user.id === id) {
                    return {...user, points: data.points}
                } else {
                    return user
                }
            })
            */
        },
        async subPoint(id) {
            const userPoints = await this.fetchUser(id)
            const updUser = {...userPoints, points: userPoints - 1}

            const res = await fetch(`api/users/subPoint/${id}`, {
                method: 'PATCH'
            })

            this.users = await this.fetchUsers()

            /*
            const data = await res.json()

            this.users = this.users.map(function(user){
                if(user.id === id){
                    return {...user, points: data.points}
                } else {
                    return user
                }
            })
            */
        }
	},
	async created() {
        this.users = await this.fetchUsers()
    }
}
</script>
