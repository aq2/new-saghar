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

*
  margin 0
  padding 0
  box-sizing border-box

header
  height 15vh

main
  display flex


</style> 🐯