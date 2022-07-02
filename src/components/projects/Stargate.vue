<template>
	<p>
		Les équipes de mon entreprise (équipe software, hardware, validation…) ont demandé un moyen plus efficace pour importer des données sur Polarion (outil de gestion d'exigences client).
		<br>La demande a été faite pendant la période de télétravail à 100% dû au COVID-19 ce qui a necéssité d'être suffisamment <Link id="autonomy" name="autonome" @redirect="(val) => $emit('redirect', val)" />
		<br>
		<br>
		Ce projet a eu lieu lors de mon alternance chez Valeo qui utilise Polarion comme gestionnaire d'exigences et de traçabilités. 
		Les exigences sont souvent reçu sous format Excel. Le souci étant que l'import de centaines exigences dans Polarion prend du temps à faire au cas par cas, 
		il nous fallait donc un moyen d'automatiser l'import des données avec des spécification précises.
		Stargate a été développé dans ce but précis, un outils permettant de créer un mappage de données enter un fichier Excel et Polarion afin d'y importer 
		automatiquement son contenu.
		<br>
		<br>
		L'enjeu étant de fluidifier l'importation des exigences et accélérer leur traitement, et donc augmenter la productivité globale des équipes.
		<br>
		<br>
		Objectifs : Une application de bureau permettant de créer son propre template, réutilisable, pour importer/exporter des données de Polarion au format Excel.
		<br>
		<br>	
		<ul class="list-disc">
			<li>Discussion et échanges avec les équipes</li>
			<li>Elaboration d'un plan de développement (use-cases, architecture…)</li>
			<li>Développement avec avis des clients et leurs préférences, tout en restant dans le domaine du possible</li>
			<li>Difficulté lors de la réalisation : ne connaissant pas le fonctionnement de Polarion, il me fallait un temps de documentation considérable afin de créer l'outil.</li>
		</ul>
		<br> 
		Résultats : une première application bureau fonctionnelle en <Link id="oop" name="Java" @redirect="(val) => $emit('redirect', val)" />, répondant aux demandes urgentes des clients, puis des versions ultérieures pour affiner les demandes.
		<br> 
		Critique : L'application a été débuté par mon tuteur pour me faciliter la tâche et j'aurai surement du reprendre depuis le début pour une architecture plus solide permettant une meilleure maintenabilité
	</p>
</template>

<script setup>
import Link from '@/components/Link.vue'
</script>
