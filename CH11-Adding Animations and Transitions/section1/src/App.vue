<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Transition & Animations</h1>
                <hr>
                <select class="form-control" v-model="animationAlert">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br><br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition :name="animationAlert">
                    <div class="alert alert-info" v-show="show">This is some Info</div>
                </transition>
                <transition name="slide" type="animation" appear>
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <transition enter-active-class="animated bounce" leave-active-class="animated shake" appear>
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <transition :name="animationAlert" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is some Info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
                </transition>
                <hr>
                <h1>JS hooks</h1>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br><br>
                <transition 
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false">
                    <div style="width: 300px; height: 100px; background: lightgreen;" v-if="load"></div>
                </transition>
                <br><br>
                <h1>Dynamic Component</h1>
                <button class="btn btn-primary"
                    @click="selectedComponent === 'app-success-alert' ? 
                        selectedComponent = 'app-danger-alert' :
                        selectedComponent = 'app-success-alert'">Toggle Component</button>
                <br><br>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <h1>Transition-Group</h1>
                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br><br>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li
                            class="list-group-item"
                            style="cursor: pointer"
                            v-for="(number, index) in numbers"
                            :key="number"
                            @click="removeItem(index)">{{ number }}</li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import SuccessAlert from './SuccessAlert.vue';
    import DangerAlert from './DangerAlert.vue';
    export default {
        data() {
            return {
                show: false,
                load: true,
                animationAlert: 'fade',
                elementWidth: 100,
                selectedComponent: 'app-success-alert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            beforeEnter(el) {
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
                console.log('beforeEnter');
            },
            enter(el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => {                    
                    el.style.width = (this.elementWidth + 10*round) + 'px';
                    round ++;
                    if (round > 20) {
                        clearInterval(interval);                        
                        done();
                    }
                }, 20);
            },
            afterEnter(el, done) {
                console.log('afterEnter');
            },
            enterCancelled(el) {
                console.log('enterCancelled');
            },
            beforeLeave(el) {
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
                console.log('beforeLeave');
            },
            leave(el, done) {
                console.log('leave');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round*10) + 'px';
                    round++;
                    if (round > 20){
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('afterLeave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
            },
            addItem(){
                const pos = Math.floor(Math.random()*this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length+1);
            },
            removeItem(index){
                this.numbers.splice(index, 1);
            }
        },
        components: {
            'app-success-alert': SuccessAlert,
            'app-danger-alert': DangerAlert
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave-active {
        transition: opacity 1s;
    }

    .fade-leave-to {
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }
    /*.slide-leave {}*/

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 3s;
        opacity: 0;
        position: absolute;
    }

    .slide-move {
        transition: all 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>