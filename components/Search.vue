<script lang="ts" setup>
export interface IProps {
  modelValue: string
}
withDefaults(defineProps<IProps>(), {
  modelValue: '',
})
defineEmits(['update:searchText', 'update:modelValue'])
</script>

<template>
  <div class="w-full flex items-center relative rounded-lg shadow-lg cursor-pointer overflow-hidden ">
    <svg class="absolute left-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" /></svg>
    <input
      class="p-4 pl-12 w-full border rounded-lg dark:border-none bg-white dark:bg-darkBlue focus:outline-1 dark:focus:outline-white"
      placeholder="Search for a country..." type="text" :value="modelValue" @input="$emit('update:modelValue', ($event.target as any).value)"
    >
  </div>
</template>

<style scoped></style>
