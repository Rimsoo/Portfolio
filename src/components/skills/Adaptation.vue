<template>
	<p>
		Il m'arrive par moments d'être éparpillé. 
		<br>		
		J'ai toujours eu du mal à me concentrer sur une idée, sur un projet, sur une envie. J'aime découvrir et je ne prends pas assez le temps pour chaque information individuellement.
		<br>
		<br>
		En informatique, les technologies sont légion, et des nouveautés ne cessent de voir le jour quotidiennement. Cela demande beaucoup d'investissement, et de savoir s'adapter aux changements, aux nouvelles technologies ou encore aux modifications de dernière minute dans un projet.
		<br>
		<br>
        À INTECH, chaque projet est différent et utilise de nouvelles technologies. Du Node JavaScript au PHP, en passant par le SQL et le Java, on ne cesse d'apprendre et de pratiquer à chaque occasion.
		<br>
		<br>
		Les cours se font sur une petite période au début du semestre, avant d'enchaîner directement sur un projet technique. Cette façon de faire m'a apporté une méthode de travail me permettant de ne pas être perdu lorsque je découvre des nouveautés technologiques.
		<br>
		<br>	
		À l'embauche dans une nouvelle entreprise, nous sommes tous confrontés à un projet sur lequel nous n'avons pas l'habitude de travailler, ou à des choix de technologies dont nous ne savons rien. C'est là qu'intervient cette capacité d'adaptation.
		<br>
		Pour exemple, lors de mon alternance, j'ai été amené à travailler sur différentes technologies du jour au lendemain, passer de d'une <Link id="stargate" name="application Java" @redirect="(val) => $emit('redirect', val)" /> à une <Link id="mysql_to_postgresql" name="migration de base de données" @redirect="(val) => $emit('redirect', val)" />.
	</p>
</template>

<script setup>
import Link from '@/components/Link.vue'
</script>
