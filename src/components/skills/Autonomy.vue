<template>
	<p>
		Être autonome est la capacité d'accomplir des tâches sans solliciter constamment l'aide d'autres personnes, et savoir reconnaître un point bloquant pour demander de l'aide à ce moment-là.
		<br>
		Dans le domaine de l'informatique, cette compétence est prisée du fait de son gain de temps en environnement de production.
		<br>
		<br>
		Un exemple de début janvier 2021, j'ai travaillé sur un <Link id="stargate" name="outils de mappage" @redirect="(val) => $emit('redirect', val)" /> et de syncronisation de données d'exigences avec l'outil Polarion, en utilisant des librairies très peu documentées qui étaitent nouvelles pour moi.
		J'ai dû m'informer et me documenter pour prendre en main ces technologies, et demander l'aide de mon maître d'apprentissage, qui était responsable de la création de l'outil, uniquement lors d'absence totale d'information sur internet sur un cas très spécifique.
		<br>
		<br>
		J'ai acquis cette compétence durant mes formations, et ce depuis ma 1ère année de mes études supérieures car elle m'était indispensable et cela m'a permis de la transposer dans ma vie quotidienne.
	</p>
</template>

<script setup>
import Link from '@/components/Link.vue'
</script>