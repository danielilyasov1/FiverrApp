<template>
<section class="main-layout">


    <h1 >hi</h1>
    <pre>
        {{orders}}

    </pre>

</section>
</template>

<script>

   export default {
    data() {
      return {
       
      }
    },
  
    created() {
        this.$store.dispatch({ type: 'loadOrders'})
    
    
    
    },
    methods: {
    

    },
    computed: {
      orders() {
      return this.$store.getters.orders
  },
     
    },
    unmounted() {},
  }

</script>