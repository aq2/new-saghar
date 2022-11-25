<template lang='pug' 🕷️>

.tabContainer(@navvy='changeTab(tab)')

  section(v-if="currentTab=='welcome'")
    include ../tabs/welcome.pug

  section(v-if="currentTab=='training'")
    include ../tabs/training.pug

</template> 🕷️


<script setup 🚀>
import { ref } from 'vue'

const currentTab = ref('training')

const changeTab = (tab) => {
  console.log('tab', tab)
  currentTab = tab
  console.log('cT', currentTab)
}
</script> 🚀


<style lang='stylus' scoped 🐯>



</style> 🐯