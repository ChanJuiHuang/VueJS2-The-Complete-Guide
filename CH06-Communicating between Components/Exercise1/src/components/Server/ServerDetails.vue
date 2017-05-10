<template>
    <div class="col-xs-12 col-sm-6">
        <p>Please select server</p>
        <div v-if="server">
            <p>Server Id: {{ server.id }}</p>
            <p>Server Status: {{ server.status }}</p>
            <button @click="setNormal">Normal</button>
            <button @click="setCritical">Critical</button>
            <button @click="setUnknown">Unknown</button>
        </div>
    </div>

</template>

<script>
    import { eventBus } from '../../main.js'
    export default {
        data(){
            return {
                server: null
            }
        },
        methods: {
            setNormal(){
                this.server.status = 'Normal';
            },
            setCritical(){
                this.server.status = 'Critical';
            },
            setUnknown(){
                this.server.status = 'Unknown';
            },
        },
        created(){
            eventBus.$on('showDetail', (server) => {
                this.server = server;
            });
        }
    }
</script>

