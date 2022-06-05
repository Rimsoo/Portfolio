<template>
	<p>
		Les flux de données circulant sur le web sont principalement stockés dans des “bases de données” (BDD), et ces bases de données fonctionnent sur des serveurs. 
		<br>
		<br>
		Des serveurs de BDD il en existe plusieurs, et il n'est pas rare de devoir migrer nos BDD d'un serveur à l'autre, ce qui cause beaucoup de soucis de compatibilité, notamment la notion de ‘schema' sous Postgres inexistante sur MySQL.
		<br>
		<br>
		Dans le cadre de mon expérience chez Valeo Siemens eAutomotive j'ai été amené à migrer une BDD d'un serveur MySQL à PostgreSQL, cette migration s'est faite en plusieurs étapes : 
		<ul class="list-disc">
			<li>Création de sauvegarde des BDD du serveur MySQL par mesure de sécurité</li>
			<li>Recherche d'outil de migration adéqua</li>
			<li>Utilisation de FromMySqlToPostgreSql :</li>
			<ul class="list-disc ml-6">
				<li>Edition du fichier du fichier de configuration (adresses des deux serveurs)</li>
				<li>Création des modèles de données sur le serveur Postgres</li>
				<li>Migration des données</li>
			</ul>
			<li>Adaptation des jobs SQL pour Postgres, qui sont des lancements programmés de script SQL</li>
			<li>Mise à jour de la syntax des requêtes SQL ainsi que les fonction d'appel dans les 3 sites qui se connecte au serveur</li>
		</ul>
		<br>
		Le but de cette migration était d'utiliser un serveur plus récent et sécurisé que la version MySQL de 2015 et être conforme aux exigences du service informatique.
	</p>
</template>