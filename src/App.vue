<script setup>
  import Menu from '@/components/Menu.vue'
  import Page from '@/components/Page.vue'
</script>

<template>
  <!-- <header>
    <nav class="w-full p-4 bg-blue-700 sticky top-0">
      <div class="text-center text-white text-sm font-semibold">
        Cette page est en cours de construction...
      </div>
    </nav>
  </header> -->

  <main class="w-full h-screen flex">
    <Menu class="bg-menu w-20"/>
    <Page />
  </main>

  <footer>
    <!-- ici ton footer -->
  </footer>
</template>
