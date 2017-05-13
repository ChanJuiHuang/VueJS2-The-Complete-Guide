<template>
    <div>
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input
                type="text"
                class="form-control"
                id="firstName"
                v-model="firstName"
                @input="getFullName">
        </div>
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
                type="text"
                class="form-control"
                id="lastName"
                v-model="lastName"
                @input="getFullName">
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                firstName: '',
                lastName: ''
            }
        },
        methods: {
            getFullName(){
                this.$emit('input', `${this.firstName} ${this.lastName}`.trim());
            }
        }
    }
</script>