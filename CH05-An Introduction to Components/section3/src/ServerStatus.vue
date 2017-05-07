<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <button @click="changeStatus">ChangeStatus</button>
    <hr>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        status: 'Critical'
      }
    },
    methods: {
      changeStatus(){
        this.status = 'Normal';
      }
    }
  }
</script>