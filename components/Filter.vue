<script lang="ts" setup>
import type { IListFilter } from '~~/types/Input'

export interface IProps {
  modelValue: string
  listFilter: IListFilter[]
}
withDefaults(defineProps<IProps>(), {
  modelValue: '',
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="relative">
    <select :value="modelValue" class="p-4 w-full border dark:border-none shadow-lg rounded-lg bg-white appearance-none dark:bg-darkBlue" @change="$emit('update:modelValue', ($event.target as any).value)">
      <option value="" selected class="text-grey-400">
        Filter by Region
      </option>
      <option v-for="{ slug, text } in listFilter" :key="slug" :value="slug">
        {{ text || '' }}
      </option>
    </select>
    <svg class="absolute top-0 right-4 h-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14.975q-.2 0-.388-.075t-.312-.2l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z" /></svg>
  </div>
</template>

<style scoped></style>
