<script setup>
const router = useRouter()
</script>

<template>
  <Navbar @on-click-logo="router.push('/')" />
  <main class="max-w-screen-xl mx-auto py-12 px-8 md:px-4 mt-[60px]">
    <slot />
  </main>
</template>
