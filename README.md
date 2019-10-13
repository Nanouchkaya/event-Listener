# Projet Event Listener

c'est le début mais on est chaud bouillant ! =D 

## Liens :

Google Drive. 
-> https://drive.google.com/drive/folders/10hzqNPelAM3UF2mvsa1fHGnqWUyh9rgB

Trello.
-> https://trello.com/b/B5jzEjFq/event-listener


## Arborescence :

Voici l'Arborescence de notre projet.

<a href="medias/Arborescence.png" target="_blank"><img src="medias/Arborescence.png"></a>

## /!\ AIDE -> GitHub 

### Gestion des fichiers

- `git add [filename]` : ajoute les modifications faites dans le fichier à l'index
- `git add .`, _alias, technique du bourrin_ : ajoute les modifs de tous les fichiers dans le dossier  
/!\ à n'utiliser si on est sûr de n'avoir fait QUE des modifs liées au commit en cours !
- `git reset HEAD` : annule les `add` déjà faits
- `git commit [-m "message de commit"]` : enregistre les modifs indexées dans le commit
- `git push` : envoie tous les commits locaux sur le repo  
- `git pull` : récupère en local un projet depuis le repo, pour un projet déjà en cours (au contraire de clone qu'on utiliser uniquement pour un nouveau projet)  
- `git rm --cached <file(s)>` : **supprimer des fichiers suivis du repo** qui auraient été ajoutés par erreur OU **ajoutés dans le .gitignore par la suite** (ne supprime pas le fichier lui-même en local, bien entendu, uniquement dans le dépôt).

### Branches

- `git branch nomDeLaBranche` : crée une nouvelle branche (nouvelle version du projet) identique à la version HEAD - permet de tester des développements (réparer un bug, expérimenter une nouvelle fonctionnalité...) et commiter sans affecter la branche principale
- `git checkout nomDeLaBranche` : bascule sur la branche nomDeLaBranche
- :bulb: `git checkout -b nomDeLaBranche` : permet de réaliser les deux opérations du dessus (création de la branche & migration sur celle-ci)
- Tu envoies tes modifications sur le remote `origin`, sur GitHub. Ou tout du moins tu essayes :
    1. Non, ça ne va pas fonctionner tout de suite ! Eh oui, ta nouvelle branche n'existe pas sur le remote `origin`…
    2. mais **git** est intelligent et te donne la ligne de commande à exécuter pour créer la branche distante sur `origin` et faire un _push_ qui fonctionne !
- `git merge nomDeLaBranche` : rattache ma branche au master de la branche principale (master) ==> nécessite de résoudre les conflits !
