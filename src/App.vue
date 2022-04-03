<script setup>
  import Pages from './components/Pages.vue'
  import Menu from './components/Menu.vue'
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
    <Menu class="bg-lavender w-20"/>
    <Pages class="bg-cream w-auto"/>
  </main>

  <footer>
    <!-- ici ton footer -->
  </footer>
</template>
