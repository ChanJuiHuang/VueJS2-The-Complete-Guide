<template>
    <div class="container">
        <div class="row">
            <my-header></my-header>
        </div>
        <hr>
        <div class="row">
            <my-content></my-content>        
            <my-server-details></my-server-details>
        </div>
        <hr>
        <div class="row">
            <my-footer></my-footer>
        </div>
    </div>
</template>

<script>
    import Header from './components/shared/Header.vue'
    import Footer from './components/shared/Footer.vue'
    import Content from './components/server/Content.vue'
    import ServerDetails from './components/server/ServerDetails.vue'
    export default {
        components: {
            'my-header': Header,
            'my-footer': Footer,
            'my-content': Content,
            'my-server-details': ServerDetails
        }
    }
</script>
