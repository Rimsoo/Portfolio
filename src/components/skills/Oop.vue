<template>
	<p>
		La <b>P</b>rogrammation <b>O</b>rientée <b>O</b>bjet (POO) est un concept de programmation permettant de structurer et de transiter des données par "bloc" désignant un concept, une idée ou toute autre entité, ces blocs sont nommés Objets. Ce concept repose sur 3 principes : l'encapsulation, le polymorphisme et l'héritage.
		<br> 
		<br>
		La POO est implémenté dans plusieurs langages très utilisés dans le monde professionnel (Java, C++, Python, PHP…). Ce concept optimise la structure d'un programme afin de le rendre plus logique, maintenable et modulable, tout en simplifiant la programmation.
		<br> 
		<br>
		Mon dernier projet en la matière, d'avril à mai 2021, j'ai développé “<Link id="stargate" name="Stargate" @redirect="(val) => $emit('redirect', val)" />” un outil d'import et d'exigence client depuis Polarion (application de gestion d'exigences) codé en Java, ce qui m'a permis de mettre en œuvre mes connaissances sur la POO et notamment l'abstraction et les type génériques.
		<br>
		<br>
		J'ai été introduit à ce concept dès ma 2ème année d'études supérieures et je continue à en apprendre, car les langages qui implémentent ce concept évoluent.
	</p>
</template>

<script setup>
import Link from '@/components/Link.vue'
</script>