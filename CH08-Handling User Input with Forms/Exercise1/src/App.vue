<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-full-name-input v-model="fullName"></app-full-name-input>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            v-model="password">
                    </div>
                    <div class="form-group">
                        <div>Store Data</div>
                        <label for="yes" class="radio-inline">
                            <input
                                type="radio"
                                id="yes"
                                value="Yes"
                                v-model="isStore">Yes
                        </label>
                        <label for="no" class="radio-inline">
                            <input
                                type="radio"
                                id="no"
                                value="No"
                                v-model="isStore">No
                        </label>
                    </div>
                    <button
                        type="submit"
                        class="btn btn-primary"
                        @click.prevent="submitted">Submit</button>                    
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ isStore }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullNameInput from './FullNameInput.vue';
    export default {
        data(){
            return {
                fullName: '',
                email: '',
                password: '',
                isStore: '',
                isSubmitted: false
            }
        },
        components: {
            'app-full-name-input': FullNameInput
        },
        methods: {
            submitted(){
                this.isSubmitted = true;
            }
        }
    }
</script>

<style>
</style>
