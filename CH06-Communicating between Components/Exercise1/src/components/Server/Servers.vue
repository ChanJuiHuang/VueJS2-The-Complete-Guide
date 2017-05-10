<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                class="list-group-item"
                v-for="server in servers"
                @click="showDetail(server)"
                style="cursor: pointer">
                Server #{{ server.id }} #status: {{ server.status }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { eventBus } from '../../main.js';
    export default {
        data(){
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'},
                    {id: 5, status: 'Critical'}
                ]
            }
        },
        methods: {
            showDetail(server){
                eventBus.showDetail(server);
            }
        }
    }
</script>
