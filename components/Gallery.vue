<template lang='pug' 🕷️>

.gallery
  img(src='../imgs/gall/gal1.jpg' ref='imageRef')

</template> 🕷️


<script setup 🚀>

import { ref } from 'vue'
const imageRef = ref(null)
const props = defineProps(['headHeight'])

onMounted(() => {
  imageRef.value.style.height = window.innerHeight - props.headHeight + 'px'
})


</script> 🚀


<style lang='stylus' scoped 🐯>

// .gallery
//   width 25%
//   height 100%

img
  // height 100%
  // width 100%
  // object-fit contain
  // height 75vh

</style> 🐯