<template lang='pug' 🕷️>

//- nav(@click='navClicked')
//- nav(@click="$emit('navvy', e)")
nav
  .tab#welcome(@click='welcomeClicked') Welcome
  .tab#treatments(@click="$emit('treatClicked')") Treatments
  .tab#training Massage Training
  .tab#yoga Yoga Classes
  .tab#joyful Joyful Living
  .tab#dosha Dosha Principles
  .tab#contact Contact

</template> 🕷️


<script setup 🚀>

const emit = defineEmits(['navvy', 'switchTab', 'welcome', 'treatClicked'])

const navClicked = (e) => {
  console.log('navClicked', e.target.id)
  // emit('navvy', e.target.id)
  emit('navvy')
}

const welcomeClicked = () => {
  console.log('welcome clicked')
  emit('welcome')
}


const changeTab = (tab) => {
  console.log('navClicked', tab)
  emit('switchTab', tab)
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
  // background $green
  // height 100%

</style> 🐯