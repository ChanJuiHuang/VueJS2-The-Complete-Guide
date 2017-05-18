<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" class="form-control" name="username" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="">Mail</label>
                    <input type="text" class="form-control" name="mail" v-model="user.mail">
                </div>
                <button class="btn btn-primary" @click.prevent="submit">Submit</button>
                <hr>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="data">
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" @click.prevent="fetchData">Get Data</button>
                </div>                
                <ul class="list-group">
                    <li class="list-group-item" v-for="user in users">
                        {{ user.username }} - {{ user.email }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                user: {
                    username: '',
                    mail: ''
                },
                users: [],
                resource: null,
                data: 'first_user'
            }
        },
        methods: {
            async submit(){
                // this.$http.post('data', this.user)
                //     .then(res => console.log(res))
                //     .catch(err => console.log(err));

                // this.resource.save({}, this.user)
                //     .then(res => console.log(res));

                const res = await this.resource.saveAlt(this.user);
                console.log(res);
                    // .then(res => console.log(res));
            },
            fetchData(){
                // this.$http.get('')                
                //     .then(res => res.json())
                //     .then(data => {
                //         this.users = data;
                //     });
                this.resource.get({data: this.data})
                    .then(res => res.json())
                    .then(data => {
                        this.users = data;
                    });
            }
        },
        created(){
            const customActions = {
                saveAlt: {method: 'PUT', url: 'alt_data'}
            };
            this.resource = this.$resource('{data}', {}, customActions);
        }
    }
</script>

<style>
</style>
