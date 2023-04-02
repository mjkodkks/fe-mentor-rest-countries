<script setup lang="ts">
import type { ICountry } from '~~/types/Response'

const route = useRoute()
const router = useRouter()

const { data, pending } = await useFetch<ICountry[]>('/data.json')
const selectedCountry = computed<ICountry | undefined>(() => data.value?.find(f => f.alpha3Code === route.params.id))
</script>

<template>
  <div>
    <div>
      <button class="flex gap-2 border dark:border-none rounded-lg shadow-lg px-4 py-2 bg-white dark:bg-darkBlue" @click="router.push('/')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m8.3 17.3l-4.6-4.6q-.15-.15-.213-.325T3.426 12q0-.2.063-.375T3.7 11.3l4.625-4.625Q8.6 6.4 9 6.4t.7.3q.275.275.275.7t-.275.7L6.8 11H20q.425 0 .713.288T21 12q0 .425-.288.713T20 13H6.8l2.925 2.925Q10 16.2 10 16.6t-.3.7q-.275.275-.7.275t-.7-.275Z" /></svg>
        <span>Back</span>
      </button>
    </div>
    <template v-if="pending">
      Loading...
    </template>
    <div v-else>
      <CountryDetail :country-obj="selectedCountry" />
    </div>
  </div>
</template>
