<script setup lang="ts">
defineEmits(['onClickLogo'])
</script>

<template>
  <header class="shadow-lg fixed w-full left-0 top-0 right-0 z-40 h-[60px] bg-vlightGray dark:bg-vdarkBlue">
    <div class="flex p-4 justify-between max-w-screen-xl mx-auto">
      <div class="font-bold text-lg cursor-pointer" @click="$emit('onClickLogo', $event)">
        Where in the world?
      </div>
      <div><DarkToggle /></div>
    </div>
  </header>
</template>
