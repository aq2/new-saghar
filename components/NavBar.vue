<template lang='pug' 🕷️>

nav(@click='navClicked')
  .tab#welcome Welcome
  .tab#treatments Treatments
  .tab#training Massage Training
  .tab#yoga Yoga Classes
  .tab#joyful Joyful Living
  .tab#dosha Dosha Principles
  .tab#contact Contact

</template> 🕷️


<script setup 🚀>

const navClicked = (e) => {
  console.log(e.target.id)
}

</script> 🚀


<style lang='stylus' scoped  🐯>

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
  height 100%

</style> 🐯