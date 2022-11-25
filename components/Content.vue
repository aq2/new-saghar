<template lang='pug' 🕷️>

section(v-if="currentTab=='welcome'")
  include ../tabs/welcome.pug

section(v-if="currentTab=='training'")
  include ../tabs/training.pug

</template> 🕷️


<script setup 🚀>
import { ref } from 'vue'

const currentTab = ref('training')


</script> 🚀


<style lang='stylus' scoped 🐯>



</style> 🐯