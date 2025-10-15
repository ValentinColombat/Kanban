# 1. Route `/auth/me`

Crée une route GET `/auth/me` qui renvoie les informations de l'utilisateur actuellement connecté.

Quelques éléments à considérer :

- Cette route ne doit être accessible que si l'utilisateur est authentifié
  -

- Le token JWT contient les informations nécessaires pour identifier l'utilisateur. Ces informations doivent être accessibles dans la route.
  - Qu'est-ce que c'est ce `token` : c'est un objet que l'on tranforme en string

```js
const tokenObj = {
    id: 3,
    username: 'lorenzo'
}
const tokenStr = JSON.stringify(tokenObj);
console.log(tokenStr);

const token = btoa(tokenStr);
console.log(token);
console.log(atob(token));
```

- Les informations doivent être extraites depuis la base de données pour éviter de renvoyer directement ce qu’il y a dans le token.
  - Le token vient du front, donc on ne lui fait pas confiance, on devra valider avec les data que le token contient les infos correctes (middleware)

Tu devras probablement intervenir dans les fichiers suivants :

- Un middleware d'authentification déjà en place (ou en créer un :) ) (check le répertoire middlewares)
- Un controller (auth controller)
- Le fichier de routes (auth router)

**Tests attendus** :

- Un appel à `/auth/me` avec un token valide retourne un objet représentant l’utilisateur (par exemple : `id`, `username`).
- dans le frontend, on devrait voir apparaître le nom de l'utilisateur dans la navbar

### Syndrome de la page blanche

? Par ou on commence ?
