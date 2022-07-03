<template>
  <p>
	  	Le SQL (Structured Query Langage) est un langage de base de données relationnelle. Il permet :	
  </p>
  <br>
	<ul class="list-disc">
		<li>La création de base et des tables.</li>
		<li>La gestion de droits d’utilisateurs de la base.</li>
		<li>L’interrogation de la base.</li>
		<li>La mise à jour.</li>
		<li>L’ajout d’enregistrements sous forme de lignes.</li>
		<li>
		Le changement de structure de la table: ajout, suppression de colonnes.
		</li>
	</ul>
	<br>
  <p>
    J’ai fait mes premiers pas en SQL au début de ma formation. C’est un langage
    très puissant qui me permet de dialoguer avec des bases de données.
  </p>
  <br>
  <p>
    Grâce à ces cours dispensés à l’école, j’ai pu rapidement me familiariser
    avec ce langage, je suis à présent capable de concevoir des bases de données
    pour les projets sur lesquels j’interviens. 
    Pour exemple, cette compétence m'a permis de réaliser une <Link id="mysql_to_postgresql" name="migration de base de données" @redirect="(val) => $emit('redirect', val)" /> dans le cadre de mon alternance.
  </p>
  <br>
  <p>
    J’ai encore quelques lacunes sur les aspects d’optimisation de performances
    que je compte combler car la gestion de données est un domaine qui
    m’intéresse.
  </p>
</template>

<script setup>
import Link from '@/components/Link.vue'
</script>
