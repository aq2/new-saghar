<template lang='pug' 🕷️>

.tabContainer(@comewell='wilkommen')

  section(v-if="currentTab=='welcome'" @switchTab='swatch')
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

const swatch = () => {
  console.log('switch')
}

const wilkommen = () => {
  console.log('welcome recieved in content')
}
</script> 🚀


<style lang='stylus' scoped 🐯>



</style> 🐯