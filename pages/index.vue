<template lang='pug' 🕷️>

.headContainer(ref='headerRef')
  Header
  NavBar(@switchTab="navved" @treatClicked='navved' )

main()
  Gallery(:headHeight='headHeight' v-if='headHeight')
  Content(@welcome='welcomed')

</template> 🕷️


<script setup 🚀>

import { ref } from 'vue'

const headerRef = ref(null)
const headHeight = ref(null)

const emit = defineEmits(['comewell'])

onMounted(() => {
  headHeight.value = headerRef.value.offsetHeight
})

const navved = () => {
  console.log('index navved')
}

const welcomed = () => {
  console.log('welcome recieved in index')
  emit('comewell')
}

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