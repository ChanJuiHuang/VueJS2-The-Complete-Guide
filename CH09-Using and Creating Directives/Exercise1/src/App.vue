<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <p  v-myon:mouseenter="mouseEnter()"
                    v-myon:mouseleave="mouseLeave()"
                    >Enter Me and Leave Me~XDDD</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'myon': {
                bind(el, binding, vnode){
                    const event = binding.arg;
                    const cb = binding.value;
                    el.addEventListener(event, cb);
                }
            }
        },
        methods: {
            mouseEnter(){
                return function(){
                    this.style.background = 'red';
                    // console.log(this);
                    console.log('HA HA HA!!!');
                };
            },
            mouseLeave(){
                return function(){
                    this.style.background = 'white';
                    console.log('XDDD');
                };
            }
        }
    }
</script>

<style>
</style>
