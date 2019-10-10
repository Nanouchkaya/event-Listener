# Cahier des charges du blog

## Contexte

### Présentation

Le responsable d'une agende évènementielle a besoin d'une plateforme pour rassembler à un seul endroit, tous les événements (salon, conférence etc) liés à la Tech. Cette plateforme serait autant profitable aux particuliers qu'aux entreprises.
Exemple d'utilisation : Un utilisateur se connecte à son compte, il consulte les événements à venir dans sa région (ou ailleurs), sauvegarde ce qui l'intéresse, il a la possibilité de voir quels autres membres de la plateforme sont intéressés par le même événement et donc de communiquer avec eux (indirectement, cela rassemble les développeurs, amoureux de la tech au même endroit);

### Objectif

Créer une plateforme qui rassemble tous les événements liés au domaine de la tech et permettre aux intéressés de se mettre en relation.

### Définitions du MVP (Minimum Viable Product)

- Page d'accueil

    - Header :
        - Barre de navigation
            - Bouton Connexion / Déconnexion
        - accroche / intro (jumbotron ?)
    
    - Main :
        - Prochains événements et/ou événements les plus consultés/sauvegardés

    - Footer 
        
- Espace membre
    - Connexion / Inscription
    - Déconnexion
    - Dashboard (espace utilisateur)
    - Gestion de suivi d'autres utilisateurs
    - Gestion de suivi d'événements (page dans le profil qui liste les événements suivis)
    - Fonctionnalités de l'utilisateur : gestion des préférences mail, notif, suppression de compte
    
- Page événement :
    - Aimer / Suivre / Participer
    - Fil d'actu de l'événements par les organisateurs
    - Un sondage de retour sur l'événement terminé
    - Statut de l'événement : à venir / en cours / terminé
    - Préciser si événement en ligne ou sur place
    - Redirection vers la plateforme de diffusion du live
    - Infos sur l'événement : 
        - Prix
        - Lien site / facebook
    - Liste des entreprises / conférenciers présents

- Page recherche :    
    - Calendrier de tous les événements à venir
    - Carte géographique

- Gestion des rôles utilisateurs : admin, organisateur et exposant, simple membre visiteur de l'événement
- Contact par formulaire pour proposer un événement aux admins
- Page contact générale



Optionnel :
    - Fil questions auxquel les organisateurs peuvent répondre (façon FAQ)
    - Pop-up pour inciter à l'inscription au bout d'une durée donnée passée sur le site
    - Un fil de commentaire pour les événements terminés
    - Plan du site (où sont placés les exposants / les salles de conférences etc)
    - Synchronisation à l'agenda Google
    - Connexion / Inscription (compte externe facebook, gmail... possible)


## Spécifications fonctionnelles

> Rappel : qu'est-ce qui est attendu comme fonctionnement.

### Apparence

Ambiance graphique sur le thème de l'espace.

### Navigation

- Menu de navigation
- Barre de recherche

### Templates de pages

#### Gabarit global

- Header
    - Navigation
    - Image d'en-tête
    - Titre
    - Slogan
- Sidebar
    - Champ de recherche
    - Catégories
    - Auteurs
- Pied de page
    - Liens vers les réseaux sociaux

#### Pages

- Liste d'articles
- Détail article
- Mentions légales
- Contact
- Plan du site

## Spécifications techniques

> Rappel : comment ça marche (quelles technos, architecture logicielle, etc.).

### Les données

- Articles
- Catégories
- Auteurs

### Architecture logicielle choisie

- HTML5
- CSS3 (Bootstrap 4)
- JS (jQuery)
- MySQL

## Notre proposition


### Délai

10 jours à réception de la commande.
Prochaine disponibilité le 21 octobre 2018.
Livraison possible le 07 novembre 2019.