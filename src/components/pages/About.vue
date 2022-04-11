<template>
    <div class="grid grid-cols-7 h-screen">
        <div class="bg-moi bg-cover bg-center col-span-2 flex flex-col items-end justify-center font-bold text-2xl text-white"></div>
        <section class="col-span-5 p-10 overflow-y-scroll">
            <h2 class="font-black text-3xl mb-5">A PROPOS DE MOI</h2><hr class="mb-5">
            <p class="mb-6">Bienvenue sur mon portfolio ! Je m’appelle Abdel Rahim DEBECHE et je possède un diplôme d’ingénierie informatique en ingenieurie logiciel, obtenu dans l’école supérieure d’ingénierie informatique du groupe ESIEA : IN’TECH . J’ai créé ce portfolio afin de vous offrir une vision détaillée de mon parcours, mes compétences ainsi que de mes réalisations.</p>
            <p class="mb-6">Passionné par les nouvelles technologies depuis mon plus jeune âge, j’ai décidé de poursuivre dans cette voie en pratiquant l’informatique dans ma vie professionnelle. Mon parcours m’a permis de développer des compétences dans des domaines variés de l’informatique. Relever des défis dans ce domaine et répondre aux enjeux offerts par les innovations technologiques, tel est mon objectif dans le monde professionnel.</p>
            <p class="mb-6">Bonne visite !</p>
            <vue-collapsible-panel-group>
                <vue-collapsible-panel>
                    <template #title>
                        Langues
                    </template>
                    <template #content>
                        Panel A Content
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="false">
                    <template #title>
                        Centre d’intérêts
                    </template>
                    <template #content>
                        Panel B Content
                    </template>
                </vue-collapsible-panel>
            </vue-collapsible-panel-group>
        </section>
    </div>
</template>