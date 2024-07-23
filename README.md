# BeecomingTechnicalTest

Ce projet est un test technique pour l'entreprise. [Beecoming](https://beecoming.fr/)

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Lancement du projet

Lancez la commande `ng serve` pour lancer le serveur de dev.

## Description du projet

Le but du projet était de faire une application permettant de voir une carte du monde, de pouvoir ajouter des villes (nom, population) à partir de leur longitude et latitude pour ensuite voir des marqueur sur la carte.

Pour la visualisation de carte, j'ai choisi Leaflet, un service permettant de faire tout ce que j'avais besoin, c'est-à-dire avoir une carte, des marqueurs, des légendes en cliquant sur les marqueurs, ainsi que l'option de pouvoir se localiser.
Plus léger et facile d'accès que l'API de GoogleMap par exemple, ça m'a paru entre un bon choix pour ce test

## Problèmes rencontrés

Je ne suis pas forcément très doué en design, ce qui donne ce design très sommaire.

J'ai rarement touché aux ReactiveForm d'Angular. J'ai essayé de mettre en place des validator, mais je n'ai pas réussi a faire en sorte que les messages d'erreurs s'affichent dynamiquement.

Mes lacunes sur Angular que je n'ai pas pratiqué depuis longtemps m'ont aussi empêché de pouvoir faire la modification des données des villes, ainsi que la synchronisation entre le deuxième écran et le premier.
