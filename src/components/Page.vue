<script setup>
    import Home from '@/components/pages/Home.vue'
    import About from '@/components/pages/About.vue'
    import Career from '@/components/pages/Career.vue'
    import Contact from '@/components/pages/Contact.vue'
    import Projects from '@/components/pages/Projects.vue'
    import Skills from '@/components/pages/Skills.vue'
</script>

<template>
    <div class="w-full h-screen overflow-y-hidden scroll-smooth">
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
