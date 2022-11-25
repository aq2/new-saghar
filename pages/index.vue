<template lang='pug' 🕷️>

.headContainer(ref='headerRef')
  Header
  NavBar

main
  Gallery(:headHeight='headHeight' v-if='headHeight')
  Content

</template> 🕷️


<script setup 🚀>

import { ref } from 'vue'

const headerRef = ref(null)
const headHeight = ref(null)

onMounted(() => {
  headHeight.value = headerRef.value.offsetHeight
})



</script> 🚀


<style lang='stylus' 🐯>

main
  display flex


</style> 🐯