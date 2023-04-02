<script lang="ts" setup>
export interface IProps {
  img: string
  name: string
  population: number
  region: string
  capital: string
}
const props = defineProps<IProps>()
</script>

<template>
  <div class="flex flex-col shadow-md rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:translate-y-2 bg-white dark:bg-darkBlue">
    <div class="h-[200px] w-full border-b dark:border-b-slate-700">
      <img :src="img" class="bg-contain object-fill h-full w-full">
    </div>
    <div class="flex-none px-8 pt-8 py-16">
      <div class="font-extrabold text-lg">
        {{ name || '' }}
      </div>
      <div class="mt-2">
        <span class="font-semibold text-sm">Population:</span> <span>{{ population || '' }}</span>
      </div>
      <div><span class="font-semibold text-sm">Region:</span> <span>{{ region || '' }}</span></div>
      <div><span class="font-semibold text-sm">Capital:</span> <span>{{ capital || '' }}</span></div>
    </div>
  </div>
</template>

<style scoped>
.bg-upload {
    background-position: center;
    background-size: contain;
}
</style>
