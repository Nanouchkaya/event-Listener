# Cahier des charges


### Présentation

Il s’agit d’une application qui réunit les différents événement lié à la tech
numérique (Développement, intelligence artificielle, blockchain, etc).
L’application propose une recherche simple et avancée, d’avoir un compte
pour suivre les différent événements.
Cette application serait d’autant profitable aux particuliers qu&#39;aux
entreprises.


### Public visé

La plateforme vise les professionnels du milieu, les amateurs de nouvelles
technologies, les organisateurs d&#39;événements et les curieux.

### Définitions du MVP (Minimum Viable Product)

- _Accessible pour un visiteur (tout utilisateur)_

__* :__ S’inscrire ou se connecter au site.  
__Page d&#39;accueil :__ Présente les événements en cours et les 5 prochains à venir, un
moyen de contact.  
__Page recherche :__ Liste des différents événements avec la possibilité
d’effectuer une recherche, avec différents filtres ainsi qu’un carte interactive.  
__Page événement :__ Accède aux informations détaillés de l’événement (Statut de l’événement, lieu, tags, …) avec une carte interactive sur le lieu de l’événement.

__Pages annexes :__ Mentions légales, politique de confidentialité, page non trouvé
(404).  

- _Accessible pour un membre (utilisateur connecté)_

__Page événement :__ S’intéresser à l’événement / Participer à l’événement / Aimer
l’événement.  
__Page profil :__ Modifier ses informations, newsletters, supprimer son compte, voir
ses différents événements qu’il a aimé ou/et auquel il a participé.


### Fonctionnalités optionnelles V2

- _Accessible pour un visiteur (tout utilisateur)_

__* :__  

Oublie de mot de passe.  
Connexion avec un compte externe (facebook, gmail …) possible.  

__Page événement :__
Ajouter l’événement à un agenda Google (ou autre).  
Plan du site (où sont placés les exposants / les salles de conférences, etc).  
Fil d’actualité d’un événement.

__Page recherche :__  
Vue modifiable de la page des résultats de recherche : carte intéractive et/ou calendrier.  

- _Accessible pour un membre (utilisateur connecté)_

__Page événement :__  
Un sondage de retour sur l&#39;événement terminé.  
Un fil de commentaire pour les événements terminés. 

__Page profil :__ 
Gestion de suivi d&#39;autres utilisateurs. 

- _Accessible pour un Organisateur (utilisateur connecté et avec un rôle admin)_

__Panel organisateur :__  
Créer ses événements, les modifier, les supprimer.  
Ajouter des actualités à ses événements.  
Accessible pour un Administrateur (utilisateur connecté et avec un rôle admin)  

__Panel admin :__  
Créer / Modifier / Supprimer des événements.  
Créer / Supprimer des utilisateurs.  
Supprimer des commentaires.  

### Technologies Utilisées

- Côté Front : ReactJS
    - Redux
    - React-router
    - Axios
    - Leaflet
- Côté Back : NodeJS
    - Express
    - JsonWebToken
    - MySQL


### L'équipe

__[Inès](https://github.com/Daenerys95)__  
Scrum Master

__[Claudine](https://github.com/Nanouchkaya)__  
Lead Dev Front

__[Guillaume T.](https://github.com/Guillaume-TR)__  
Lead Dev Back

__[Guillaume E.](https://github.com/JoK3R59)__  
Référent technique
