# DevOps Mini-Projet 2
Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations
- N° de groupe : 38
- Membres du groupe : 
    - DE VREESE Anthony,
    - TOPET Bastien
- lien vers le repo : https://github.com/bastien-topet-vinci/devops-mini-proj-tdd-greetings
## Énoncé

### Pré-requis :
- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests


### Ajouter ce fichier MD à votre mini-projet-1
Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue
L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request
Ouvrez une Pull Request / Merge Request 
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.


Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
Le fichier YML effectue les githubs actions lors d'une pull request, ce sont linstallation des dépendences, formattage avec Prettier et Eslint, un test coverage, build avec webpack et une heure indiquant le début et la fin de la pipeline avec avertissement du succès
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
Le "on" permet de définir l'évenement qui exécute l'action.
La différence entre "on push" et "on pull request" est ce après quel évenement l'action s'exécute
pour un "on push" c'est après un push vers la branche main, et uniquement cette branche.
pour un "on pull request" c'est après un pull request, lorsqu'elle est ouverte ou modifiée.
A un développeur junior nous conseillerions d'utiliser "on pull request", pour éviter les erreurs après un merge dans la main.
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
"run" exécute une commande dans l'environnement d'exécution
"runs_on" spécifie l'environnement dans lequel les autres commandes vont être executés
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
"use" sert a définir l'action qui doit être lancé
"run" execute une commande dans l'environnement d'exécution
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
Oui et non a la fois, pour Install all dependencies avec Build on ne peut intervertir tout comme les tests Pretier, Eslint et test coverage si l'on veut un formattage correcte, mais des affichages tel que "Starting time" et "End time" peuvent être replacés a d'autres endroits sans que ça pose de réelle problème, cependant il pourrait y avoir des problèmes de cohérence.
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
Pour l'executér il suffirait de l'ajouter dans le dossier du projet. Les questions a se poser sont:
- Quelles sont les dépendances nécessaires au bon déroulement du programme?
- Quelles sont les différents tests que nous devrons ajouter pour ce programme?
- Est-ce qu'il est compatible avec notre version actuelle?
- Quels tests de sécurités ajoute t-il?
```

