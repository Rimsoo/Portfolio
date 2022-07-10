<template>
    <div class="grid grid-cols-7 h-screen">
        <div class="bg-moi bg-cover bg-center col-span-2 flex flex-col items-end justify-center font-bold text-2xl text-white"></div>
        <section class="col-span-5 p-10 overflow-y-scroll">
            <h2 class="font-black text-3xl mb-5">À PROPOS DE MOI</h2>
            <hr class="m-5">
            <p class="mb-6">Je suis étudiant en cinquième année d'ingénierie du logiciel à l'école IN'TECH . J'ai créé ce portfolio afin de vous offrir une vision détaillée de mon parcours, mes compétences ainsi que de mes réalisations.</p>
            <p class="mb-6">Passionné par le developpement depuis que j'ai découvert ce domaine à la fin du lycée, j'ai décidé de poursuivre dans cette voie en pratiquant l'informatique dans ma vie professionnelle. Mon parcours m'a permis de développer des compétences dans des domaines variés de l'informatique. Relever des défis dans ce domaine et répondre aux enjeux offerts par les innovations technologiques, tel est mon objectif dans le monde professionnel.</p>
            <p class="mb-6">Dans la vie j'essaye de prendre un maximum de plaisir dans tout ce que je fais, c'est pourquoi, entre autres, je suis très investis et impliqué dans mes activités.</p>
            
            <vue-collapsible-panel-group>
                <vue-collapsible-panel>
                    <template #title>
                        Langues
                    </template>
                    <template #content>
                        <table class="w-full">
                            <tr class="border-b">
                                <td>Arabe :</td>
                                <td class="text-right">Bilingue</td>
                            </tr>
                            <tr>
                                <td>Anglais :</td>
                                <td class="text-right">Intermédiaire</td>
                            </tr>
                        </table>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="false">
                    <template #title>
                        Centre d'intérêts
                    </template>
                    <template #content>
                        <table class="w-full">
                            <tr class="">
                                <td>Hobbies :</td>
                                <td class="text-right">Skateboard, Randonée, Bivouac</td>
                            </tr>
                        </table>
                    </template>
                </vue-collapsible-panel>
            </vue-collapsible-panel-group>
            <hr class="m-5">
            <button class="bg-menu hover:bg-lightmenu font-bold text-white p-2"><a href="assets/cv.pdf">Télécharger mon CV</a></button>
        </section>
    </div>
</template>