<template>
	<p>
		Je suis très curieux et j'ai toujours envie d'apprendre et de comprendre.
		<br>C'est cette constante curiosité qui me pousse à découvrir de nouvelles choses et à comprendre leurs fonctionnements.
		<br>
		<br>
		Un bon exemple est mon utilisation de Linux. Pour comprendre le fonctionnement de ce système il faut passer par l'utilisation de la ligne de commande (CLI). 
		L'utilisation de cette dernière est disruptive par rapport à l'utilisation que la plupart des gens ont de leurs ordinateurs. 
		Bien que j'ai rencontré beaucoup de difficultés à mes débuts, je ne m'y suis pas attardé et j'ai persévéré pour arriver à comprendre au mieux le fonctionnement de cet outil.
		<br>
		J'y ai particulièrement passé du temps à découvrir tout type de serveur (cloud, <Link id="teeworlds" name="jeux" @redirect="(val) => $emit('redirect', val)" />, caméra de surveillance...).
		<br>
		<br>
		Dans le but d'aller toujours plus loin dans le fonctionnement de Linux, je ne me suis pas arrêté à une utilisation de cet outil. J'ai cherché à comprendre son fonctionnement plus en profondeur.
		<br>
		<br>
		C'est à travers mon caractère curieux et de toujours vouloir arriver à mon but que je suis devenu autodidacte et persévérant.
	</p>
</template>

<script setup>
import Link from '@/components/Link.vue'
</script>