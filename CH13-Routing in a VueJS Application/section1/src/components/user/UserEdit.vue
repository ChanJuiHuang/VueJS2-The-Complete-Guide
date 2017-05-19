<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Value: {{ $route.query.val }}</p>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div id="data" style="height: 700px"></div>
        <p>some data</p>
        <a href="#data"><button class="btn btn-primary">Go to #data</button></a>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                confirmed: false
            };
        },
        beforeRouteLeave(to, from, next){
            console.log(this.confirmed);
            if (this.confirmed) {
                next();
            } else {
                if (confirm('Are you sure?')) {
                    next();
                } else {
                    next(false);
                }
            }
        },
        destroyed(){
            console.log('destroyed!');
        }
    }
</script>