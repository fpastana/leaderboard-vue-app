<template>
    <form class="row g-3" v-on:submit="onSubmit">
        <div class="form-floating mb-3">
            <input type="text" class="form-control" placeholder="Ex. Felipe Pastana" v-model="name">
            <label for="name">Name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" placeholder="name@example.com" v-model="email">
            <label for="email">Email address</label>
        </div>
        <div class="form-floating">
            <input type="number" class="form-control" placeholder="33" v-model="age">
            <label for="ager">Age</label>
        </div>
        <div class="mb-3">
            <input type="submit" class="btn btn-primary form-control" value="Save User">
        </div>
    </form>
</template>

<script>

export default {
    name: 'AddUser',
    data() {
        return {
            name: '',
            email: '',
            age: '',
            points: 0,
            errorAddUser: false
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()

            if(!this.name){
                alert('Please add a name')
                return
            }
            if(!this.email){
                alert('Please add an email')
                return
            }
            if(!this.age){
                alert('Please add an age')
                return
            }

            const newUser = {
                //id: Math.floor(Math.random() * 100000),
                name: this.name,
                email: this.email,
                age: this.age,
                points: this.points
            }

            this.addUser(newUser)
        },
        async addUser(newUser) {

            const res = await fetch('api/users', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(newUser)
            })

			const data = await res.json()

			if(res.status === 200) {
                this.cleanFields()
                this.$emit('user-added', data)
			} else {
				alert(JSON.stringify(data))
			}
        },
        cleanFields() {
            if(this.errorAddUser === false) {
                this.name = ''
                this.email = ''
                this.age = ''
            }
        }
    },
    mounted() {
        this.cleanFields()
    }
}
</script>
