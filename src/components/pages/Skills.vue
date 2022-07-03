<template>
    <div class="grid grid-cols-7 h-screen">
        <div class="bg-skill bg-cover bg-center col-span-2 flex flex-col items-end justify-center font-bold text-2xl text-white"></div>
        <section class="col-span-5 p-10 overflow-y-scroll divide-y">
            <h2 class="font-black text-3xl mb-5">COMPÉTENCES</h2>
            <div class="py-6" :key="i" v-for="(category, i) in state.skills">
                <h3 class="font-black text-2xl mb-5">{{ category.title }}</h3>
                <div class="grid grid-cols-3 ">
                    <div class="place-content-center" :key="j" v-for="(skill, j) in category.items">
                        <a :href="'#'+skill.id" @click.prevent="state.current=skill.id">
                            <div class="flex flex-col items-center hover:bg-gray-200 transition duration-150 ease-out">
                                <img :src="skill.image" :alt="skill.title" class="h-20 w-20">
                                <p>{{ skill.title }}</p>
                            </div>
                        </a>
                        <div class="w-screen h-screen fixed inset-0 flex items-center justify-center" v-if="state.current === skill.id">
                            <div class="bg-black absolute inset-0 opacity-50" @click="state.current = ''"></div>
                            <div class="relative max-w-screen-md z-10 bg-white rounded" >
                                <div class="flex items-center justify-between px-8 py-2 shadow">
                                    <h3 class="font-bold text-xl">{{ skill.title }}</h3>
                                    <button class="p hover:bg-red-200 transition duration-100 rounded" @click="state.current = ''">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="px-8 pt-4 pb-8 max-h-[70vh] overflow-y-auto">
                                    <component :is="skill.modal" @redirect="(value) => {state.current = ''; $emit('project', value)}"></component>
                                </div>
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
import oop from "@/assets/oop.svg";
import bdd from "@/assets/bdd.svg";
import vue from "@/assets/vue.svg";
import autonomy from "@/assets/autonomy.svg";
import curiosity from "@/assets/perseverance.svg";
import polyvalent from "@/assets/polyvalent.svg";

import Oop from "@/components/skills/Oop.vue";
import Vue from "@/components/skills/Vue.vue";
import Sql from "@/components/skills/Sql.vue";
import Autonomy from "@/components/skills/Autonomy.vue";
import Curiosity from "@/components/skills/Curiosity.vue";
import Adaptation from "@/components/skills/Adaptation.vue";

const OopRef = shallowRef(Oop)
const VueRef = shallowRef(Vue)
const SqlRef = shallowRef(Sql)
const AutonomyRef = shallowRef(Autonomy)
const CuriosityRef = shallowRef(Curiosity)
const AdaptationRef = shallowRef(Adaptation)

const skills = [
    {
        title: 'Compétences Techniques',
        items: [
            {
                id: 'oop',
                title: 'Programmation Orientée Objet',
                image: oop,
                modal: OopRef
            },
            {
                id: 'sql',
                title: 'SQL',
                image: bdd,
                modal: SqlRef
            },
            {
                id: 'vue',
                title: 'Vue JS',
                image: vue,
                modal: VueRef
            }
        ]
    },
    {
        title: 'Compétences Humaines',
        items: [
            {
                id: 'autonomy',
                title: 'Autonomie',
                image: autonomy,
                modal: AutonomyRef
            },
            {
                id: 'curiosity',
                title: 'Curiosité',
                image: curiosity,
                modal: CuriosityRef
            },
            {
                id: 'adaptation',
                title: 'Adaptation',
                image: polyvalent,
                modal: AdaptationRef
            },
        ]
    }
]
const state = reactive({ current: '', skills })
defineExpose({
  state
})
</script>