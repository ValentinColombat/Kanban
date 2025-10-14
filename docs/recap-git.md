# Commandes de base de Git et Github

| Commande                                                             | Action                                                                                                                  |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| git init                                                             | Créér un nouveau repository                                                                                             |
| git clone                                                            | clone un repo distant situé a                                                                                           |
| git status                                                           | Voir différentes infos concernant les fichiers modifiés.                                                                |
| git add index.html                                                   | Ajoute le fichier index.html à notre historique.                                                                        |
| git add .                                                            | Ajoute tous les fichiers à notre historique                                                                             |
| git rm --cached index.html                                           | Efface le fichier index.html de notre historique                                                                        |
| git branch -M main                                                   | Renommer la branche principale.                                                                                         |
| git remote add origin <URL>                                          | Ajouter l'url github de notre repository                                                                                |
| git push -u origin main                                              | Premier push sur une branche distante (qui est ailleurs qu'en local)                                                    |
| git push                                                             | Commande pour envoyer le code sur github : commande disponible après la commande précédente.                            |
| git commit -m 'Add README'                                           | Effectuer un commit avec un message (Message obligatoire)                                                               |
| git log                                                              | Afficher l'historique des commits                                                                                       |
| git --help                                                           | Afficher toutes les commandes git                                                                                       |
| git checkout -b test                                                 | Créer une branche de travail et basculer dessus : raccourci pour git branch nomBranche suivi de git checkout nomBranche |
| git push --set-upstream origin test                                  | Envoie la branche test sur github.                                                                                      |
| git branch -a                                                        | Liste toutes les branches et indique celle sur laquelle on se trouve.                                                   |
| git branch -d test                                                   | Efface la branche test                                                                                                  |
| git push origin --delete test                                        | Efface la branche distante test                                                                                         |
| git pull                                                             | Récupérer des modifications faites par d'autres.                                                                        |
| git remote set-url 'branch' 'URL'                                    | Changer l'URL distante pour les push sur github                                                                         |
| git merge nomBranche                                                 | Récupérer une branche local et les merger                                                                               |
