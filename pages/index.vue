<script setup lang="ts">
import type { IListFilter } from '~~/types/Input'
import type { ICountry } from '~~/types/Response'
const router = useRouter()

const searchText = ref('')
const countryList = ref<ICountry[]>([])
const filterCountryList = ref<IListFilter[]>([])
const filterCountrySelect = ref<string>('')
const countryListComputed = computed(() => {
  return countryList.value.filter(f =>
    f.name.toLowerCase().includes(searchText.value.toLowerCase()) && f.alpha3Code.toLowerCase().includes(filterCountrySelect.value.toLowerCase()))
})

const { data } = await useFetch<ICountry[]>('/data.json')

async function fetchData() {
  if (data.value) {
    countryList.value = [...data.value]
    filterCountryList.value = [...data.value.map((m) => {
      return {
        text: m.name,
        slug: m.alpha3Code,
      }
    })]
  }
}

function countryInfoClick(code: string) {
  router.push({ path: `country/${code}`, params: { id: code } })
}

function init() {
  fetchData()
}

init()
</script>

<template>
  <div class="max-screen-lg">
    <div class="filter-wrapper flex justify-between flex-col md:flex-row gap-8">
      <div class="w-full md:w-[600px]">
        <Search v-model="searchText" />
      </div>
      <div class="w-[60%] md:w-[200px]">
        <Filter v-model="filterCountrySelect" :list-filter="filterCountryList" />
      </div>
    </div>
    <KeepAlive>
      <TransitionGroup class="flags mt-8 gap-12 grid md:grid-cols-4 grid-cols-1" tag="div" mode="out-in" name="list">
        <CountryCard
          v-for="country in countryListComputed" :key="country.alpha3Code" :img="country.flags.png"
          :name="country.name" :population="country.population" :region="country.region" :capital="country.capital"
          @click="countryInfoClick(country.alpha3Code)"
        />
      </TransitionGroup>
    </KeepAlive>
  </div>
</template>
