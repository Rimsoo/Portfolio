<template>
	<p>
		Teeworlds est un jeu est un jeu de tir TPS multijoueur en 2D. Le joueur y incarne une petite créature ronde, le tee. 	
		À l'aide de plusieurs armes différentes, le joueur doit parcourir les différentes cartes à la recherche de ses adversaires.
		<br>
		C'est un jeu libre en développement, dans un état suffisamment avancé pour pouvoir y jouer, et y apporter ses propres modifications, autant côté client que serveur.
		<br>
		<br>
		Le jeu étant libre, la communauté a créé plusieurs mode de jeu, et un de ses mode m'interessait particulièrement, DDRace :
		vous devez achever un parcours en un minimum de temps, mais la collaboration avec d'autres joueurs est indispensable pour la finir.
		<br>
		Cependant je trouvais interessant d'ajouter une fonctionalité (administrable) pour proposer au joueur des sauvetages dans certains cas, et pourquoi pas corriger certains bugs.
		<br>
		<br>
		<Link id="curiosity" name="Curieux" @redirect="(val) => $emit('redirect', val)" />, j'ai donc récupéré le code source de ce mode qui est en C++, et ajouté une fonctionalité :
		permettre aux joueurs de réaparaitre au dernier endroit où ils se trouvaient avant de mourir.
		<br>
		J'ai également corriger les bugs connu à ce moment là.
		<br>
		<br>
		Possedant un Raspberry Pi (un micro ordinateur), j'ai décidé d'héberger le mode de jeu modifié dessus en juillet 2020.
		Et depuis, le serveur est accessible au joueurs du monde entier.
	</p>
</template>

<script setup>
import Link from '@/components/Link.vue'
</script>