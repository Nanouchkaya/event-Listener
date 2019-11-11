# Cahier des charges


### Présentation

Le responsable d’une agence événementielle a besoin d’une plateforme pour rassembler à un seul endroit tous les événements (salon, conférence etc) liés à la tech numérique.
Cette plateforme serait d’autant profitable aux particuliers qu'aux entreprises.
Exemple d'utilisation : Un utilisateur se connecte à son compte, il consulte les événements à venir dans sa région (ou ailleurs), sauvegarde ce qui l'intéresse, il a la possibilité de voir quels autres membres de la plateforme sont intéressés par le même événement et donc de communiquer avec eux (indirectement, cela rassemble les développeurs, amoureux de la tech au même endroit).


### Objectif

Créer une plateforme qui rassemble tous les événements liés au domaine de la tech et permettre aux intéressés de se mettre en relation.

### Définitions du MVP (Minimum Viable Product)

- __Barre de navigation__ (Sur toutes les pages)
    - Bouton Connexion-Déconnexion / Inscription
    - Bouton tous les événements

- __Page d'accueil__ :
    - Accroche / Intro (jumbotron)
    - Prochains événements et/ou événements les plus consultés/sauvegardés
    - Barre de recherche d'événement
    - Formulaire de contact


        
- __Espace membre__ :
    - Gestion de suivi d'événements (page dans le profil qui liste les événements suivis)
    - Fonctionnalités de l'utilisateur : gestion des préférences mail, notif, suppression de compte
    
- __Page événement__ :
    - Aimer / Suivre / Participer
    - Statut de l'événement : à venir / en cours / terminé / annulé
    - Redirection vers la plateforme de diffusion du live
    - Préciser si l’événement est en ligne et/ou sur place
    - Tags dynamiques 
    - Infos sur l'événement : 
        - Prix
        - Lieu, horaires
        - Liens externes (site / réseaux sociaux / plateforme du live)
        - Liste des entreprises / conférenciers présents

- __Page recherche__ :    
    - Barre de recherche  
    - Filtrer les résultats de la recherche
    - Grille des résultats de la recherche

- __Pages annexes__ :
    - Mentions légales
    - Politique de confidentialité
    - 404


### Fonctionnalités optionnelles V2

- Pop-up pour inciter à l'inscription après un certains temps passés sur une page événement
- Synchronisation à l'agenda Google
- Une carte avec la localisation de l’événement sur la page d’un événement
- Un sondage de retour sur l'événement terminé
- Gestion de suivi d'autres utilisateurs
- Panneau d’administration
- Fonctionnalités liées au rôle organisateur :
    - Fil d’actualité d’un événement
    - Gestion du rôle organisateur
    - Fil de questions auxquelles les organisateurs peuvent répondre (façon FAQ)
    - Contact par formulaire pour proposer un événement aux admins

### Fonctionnalités optionnelles V3

- Ajout d’un rôle exposant dans la gestion utilisateur.
- Plan du site (où sont placés les exposants / les salles de conférences etc)
- Connexion avec un compte externe (facebook, gmail…) possible
- Un fil de commentaire pour les événements terminés
- Vue modifiable de la page des résultats de recherche : carte - intéractive et/ou calendrier

### Liste des technos utilisées

- React.js
- Node.js
- MySQL

### Le public visé (la cible)

- Les professionnels du milieu
- Les amateurs de nouvelles technologies
- Les curieux
- Les organisateurs d'événements


### L'équipe

__Inès__  
Scrum Master

__Claudine__  
Lead Dev Front

__Guillaume T.__  
Lead Dev Back

__Guillaume E.__  
Référent technique
