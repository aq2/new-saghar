<template lang='pug' 🕷️>

nav
  .tab#welcome Welcome
  .tab#treatments Treatments
  .tab#training Massage Training
  .tab#yoga Yoga Classes
  .tab#joyful Joyful Living
  .tab#dosha Dosha Principles
  .tab#contact Contact

  p hi

</template> 🕷️


<script setup 🚀>



</script> 🚀


<style lang='stylus' scoped  🐯>
@import '../stylus/typography'


nav
  display flex
  flex-wrap wrap
  justify-content space-between

nav .tab
  flex-grow 1
  padding 1rem
  cursor pointer
  text-align center
  border 2px solid orange
  background $green

</style> 🐯