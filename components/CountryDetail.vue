<script lang="ts" setup>
import type { ICountry } from '~~/types/Response'

interface IProps {
  countryObj: ICountry
}

const props = defineProps<IProps>()
const {
  name, nativeName,
  capital, topLevelDomain,
  flags, regionalBlocs, population,
  region, subregion, currencies,
  languages,
} = toRefs(props.countryObj)
</script>

<template>
  <div class="mt-8">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
      <div class="md:p-8 md:pl-0">
        <img :src="flags.png" alt="flag_logo" class="w-full">
      </div>
      <div class="grid md:place-content-center">
        <div class="font-bold text-2xl">
          {{ name || '' }}
        </div>
        <div class="md:columns-2 columns-1 mt-8 leading-loose">
          <div>
            <span class="font-semibold">Native Name: </span> <span class="">{{ nativeName || '-' }}</span>
          </div>
          <div><span class="font-semibold">Population: </span> <span>{{ population || '-' }}</span></div>
          <div><span class="font-semibold">Region: </span> <span>{{ region || '-' }}</span></div>
          <div><span class="font-semibold">Sub Region: </span> <span>{{ subregion || '-' }}</span></div>
          <div><span class="font-semibold">Capital: </span> <span>{{ capital || '-' }}</span></div>
          <div class="md:break-before-column md:mt-0 mt-8">
            <span class="font-semibold">Top Level Domain: </span>
            <span v-for="item in topLevelDomain" :key="item">{{ item || '-' }}</span>
          </div>
          <div>
            <span class="font-semibold">Currencies: </span>
            <span v-for="cur in currencies" :key="cur.code">{{ cur.name || '-' }}</span>
          </div>
          <div>
            <span class="font-semibold">Languages: </span>
            <span v-for="lang in languages" :key="lang.name">{{ lang.name || '-' }}</span>
          </div>
        </div>
        <div v-if="regionalBlocs" class="flex gap-2 flex-col md:flex-row mt-16">
          <div class="font-bold flex items-center">
            Border Countries: {{ regionalBlocs.length === 0 ? '-' : '' }}
          </div>
          <div class="chip flex gap-2 text-sm">
            <div v-for="chip in regionalBlocs" :key="chip.acronym" class="font-light px-2 py-1 border rounded-md dark:bg-darkBlue dark:border-none shadow-lg">
              {{ chip.name || '-' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
