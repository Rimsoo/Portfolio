<script setup>
  import Home from './pages/Home.vue'
  import About from './pages/About.vue'
  import Career from './pages/Career.vue'
  import Contact from './pages/Contact.vue'
  import Projects from './pages/Projects.vue'
  import Skills from './pages/Skills.vue'
</script>

<template>
  <div class="w-full h-screen overflow-y-scroll bg-cream scroll-smooth">
    <section class="w-full h-screen" id="home">
      <Home />
    </section>
    <section class="w-full h-screen" id="about">
      <About />
    </section>
    <section class="w-full h-screen" id="career">
      <Career />
    </section>
    <section class="w-full h-screen" id="skills">
      <Skills />
    </section>
    <section class="w-full h-screen" id="projects">
      <Projects />
    </section>
    <section class="w-full h-screen" id="contact">
      <Contact />
    </section>
  </div>
</template>
