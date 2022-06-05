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
            <Skills @project="goToProject" ref="skills"/>
        </section>
        <section class="w-full h-screen" id="projects">
            <Projects @skill="goToSkill" ref="projects"/>
        </section>
        <section class="w-full h-screen" id="contact">
            <Contact />
        </section>
    </div>
</template>

<script setup>
    import { onMounted, ref, toRaw } from 'vue'
    import Home from '@/components/pages/Home.vue'
    import About from '@/components/pages/About.vue'
    import Career from '@/components/pages/Career.vue'
    import Contact from '@/components/pages/Contact.vue'
    import Projects from '@/components/pages/Projects.vue'
    import Skills from '@/components/pages/Skills.vue'

    const projects = ref(null)
    const skills = ref(null)

    function goToProject(project) {
        location.hash = '#projects'
        projects.value.state.current = project
    }

    function goToSkill(skill) {
        location.hash = '#skills'
        skills.value.state.current = skill
    }

</script>
