# BeecomingTechnicalTest

Ce projet est un test technique pour l'entreprise [Beecoming](https://beecoming.fr/)

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Lancement du projet

Lancez la commande `ng serve` pour lancer le serveur de dev.

## Description du projet

Le but du projet était de faire une application permettant de voir une carte du monde, de pouvoir ajouter des villes (nom, population) a partir de leur longitude et lattitude pour ensuite voir des marqueur sur la carte.

Pour la visualisation de carte, j'ai choisis Leaflet, un service permettant de faire tout ce que j'avais besoin, c'est a dire avoir une carte, des marqueurs, des légendes en cliquant sur les marqueurs, ainsi que l'option de pouvoir se localiser.
Plus léger et facile d'accès que l'API de GoogleMap par exemple, ca m'as paru etre un bon choix pour ce test

## Problemes rencontrés

Je ne suis pas forcément très doué en design, ce qui donne ce design très sommaire.

J'ai rarement touché aux ReactiveForm de Angular. J'ai essayé de mettre en place des validator, mais je n'ai pas réussi a faire en sorte que les messages d'erreurs s'affichent dynamiquement>.
