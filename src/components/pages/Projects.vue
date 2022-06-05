<template>
    <div class="grid grid-cols-7 h-screen">
        <div class="bg-code bg-cover bg-center col-span-2 flex flex-col items-end justify-center font-bold text-2xl text-white"></div>
        <section class="col-span-5 p-10 overflow-y-scroll">
            <h2 class="font-black text-3xl mb-5">RÉALISATIONS</h2><hr class="m-5">
            <div class="grid grid-cols-3 ">
                <div class="place-content-center" :key="i" v-for="(project, i) in state.projects">
                    <a :href="'#'+project.id" @click.prevent="state.current=project.id">
                        <div class="flex flex-col items-center hover:bg-gray-200 transition duration-150 ease-out">
                            <img :src="project.image" :alt="project.title" class="h-20 w-60 object-contain">
                            <p>{{ project.title }}</p>
                        </div>
                    </a>
                    <div class="w-screen h-screen fixed inset-0 flex items-center justify-center" v-if="state.current === project.id">
                        <div class="bg-black absolute inset-0 opacity-50" @click="state.current = ''"></div>
                        <div class="relative max-w-screen-md z-10 bg-white rounded" >
                            <div class="flex items-center justify-between px-8 py-2 shadow">
                                <h3 class="font-bold text-xl">{{ project.title }}</h3>
                                <button class="p-2 hover:bg-red-200 transition duration-100 rounded" @click="state.current = ''">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div class="px-8 pt-4 pb-8 max-h-[70vh] overflow-y-auto">
                                <component :is="project.modal"></component>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { shallowRef, reactive } from 'vue'
import stargate from "@/assets/stargate.jpg";
import mysql_to_postgresql from "@/assets/mysql_to_postgresql.png";
import clonewars from "@/assets/clonewars.webp";

import Mysql_to_postgresql from "@/components/projects/Mysql_to_postgresql.vue";
import Stargate from "@/components/projects/Stargate.vue";
import Clonewars from "@/components/projects/Clonewars.vue";

const Mysql_to_postgresqlRef = shallowRef(Mysql_to_postgresql)
const StargateRef = shallowRef(Stargate)
const ClonewarsRef = shallowRef(Clonewars)

const projects = [
    {
        id: 'stargate',
        title: 'Stargate',
        image: stargate,
        modal: StargateRef
    },
    {
        id: 'Mysql_to_postgresql',
        title: 'Migration MySQL vers PostgreSQL',
        image: mysql_to_postgresql,
        modal: Mysql_to_postgresqlRef
    },
    {
        id: 'clonewars',
        title: 'CloneWars',
        image: clonewars,
        modal: ClonewarsRef
    }
]
const state = reactive({ current: '', projects })

</script>