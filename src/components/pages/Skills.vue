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
                            <div class="flex flex-col items-center">
                                <img :src="skill.image" :alt="skill.title" class="h-20 w-20">
                                <p>{{ skill.title }}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>   
        </section>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import oop from "@/assets/oop.svg";
import bdd from "@/assets/bdd.svg";
import git from "@/assets/git.svg";
import autonomy from "@/assets/autonomy.svg";
import perseverance from "@/assets/perseverance.svg";
import polyvalent from "@/assets/polyvalent.svg";

const skills = [
    {
        title: 'Compétences Techniques',
        items: [
            {
                id: 'oop',
                title: 'Programmation Orientée Objet',
                image: oop,
            },
            {
                id: 'bdd',
                title: 'Gestion de base de données',
                image: bdd,
            },
            {
                id: 'git',
                title: 'Git',
                image: git,
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
            },
            {
                id: 'perseverance',
                title: 'Persévérance',
                image: perseverance,
            },
            {
                id: 'polyvalent',
                title: 'Polyvalent',
                image: polyvalent,
            },
        ]
    }
]
const state = reactive({ current: '', skills })

</script>