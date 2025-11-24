# O'Kanban

Application de gestion de tâches de type Kanban (inspirée de Trello) avec système d'authentification et gestion des rôles. Projet pédagogique axé sur la sécurité web et les bonnes pratiques de développement.

## 🎯 Objectifs du projet

- Implémenter un système d'authentification sécurisé avec JWT
- Mettre en place un système de rôles (admin, membre)
- Se prémunir des failles de sécurité les plus courantes (XSS, injection, etc.)
- Créer une application full-stack moderne et fonctionnelle

## ✨ Fonctionnalités

### Gestion de tâches Kanban

- **Listes** : Créer, modifier, supprimer et réorganiser des listes (colonnes) par drag-and-drop
- **Cartes** : Ajouter des cartes dans les listes, les déplacer entre listes, personnaliser leur couleur
- **Tags** : Catégoriser les cartes avec des tags personnalisables (nom et couleur)
- **Drag & Drop** : Interface intuitive pour réorganiser listes et cartes

### Authentification et sécurité

- **Inscription/Connexion** : Système d'authentification avec JWT (expiration après 1h)
- **Rôles utilisateur** :
  - **Admin** : Accès complet (CRUD sur les listes, cartes et tags)
  - **Membre** : Accès lecture seule (visualisation uniquement)
- **Protection** :
  - Hashage des mots de passe avec Argon2
  - Protection XSS sur les entrées utilisateur
  - Validation des données avec Joi
  - CORS configuré
  - Middleware d'autorisation sur les routes sensibles

## 🛠️ Technologies

### Backend

- **Node.js** + **Express** : Serveur API REST
- **PostgreSQL** : Base de données relationnelle
- **Sequelize** : ORM pour la gestion de la base de données
- **JWT** : Authentification par tokens
- **Argon2** : Hashage sécurisé des mots de passe
- **Joi** : Validation des requêtes
- **express-xss-sanitizer** : Protection contre les attaques XSS

### Frontend

- **Svelte 5** : Framework JavaScript réactif
- **Vite** : Build tool et serveur de développement
- **Tailwind CSS** + **DaisyUI** : Styles et composants UI
- **SortableJS** : Drag-and-drop des listes et cartes
- **Lucide Icons** : Icônes modernes

## 📂 Structure du projet

```
SB07-okanban/
├── api/                    # Backend (API REST)
│   ├── controllers/        # Logique métier
│   ├── models/            # Modèles Sequelize
│   ├── routes/            # Définition des endpoints
│   ├── middlewares/       # Auth, validation, erreurs
│   └── app.js             # Configuration Express
├── client/                # Frontend (Svelte)
│   ├── src/
│   │   ├── components/    # Composants Svelte
│   │   ├── stores/        # Gestion d'état (auth, kanban)
│   │   └── services/      # Appels API
│   └── vite.config.js
└── énoncés/              # Exercices du projet
```

## 🚀 Installation et lancement

### Prérequis

- **Node.js** v22 ou supérieur
- **PostgreSQL** installé et en cours d'exécution

### Étapes d'installation

1. **Cloner le dépôt**

2. **Configurer les variables d'environnement**

   Créer les fichiers `.env` à partir des `.env.example` :

   - **Backend** (`api/.env`) : Configurer `PG_URL` avec vos identifiants PostgreSQL
   - **Frontend** (`client/.env`) : Définir `VITE_API_URL` (par défaut `http://localhost:3000`)

3. **Installer et démarrer**

   ```bash
   # Installation des dépendances front + back
   npm run app:install

   # Réinitialisation de la base de données (avec données de seed)
   npm run db:reset

   # Démarrage des serveurs de développement (front + back)
   npm run dev
   ```

4. **Accéder à l'application**

   - **Frontend** : http://localhost:5173
   - **Backend** : http://localhost:3000

### Comptes de test

Après `npm run db:reset`, deux utilisateurs sont disponibles :

- **Admin** : `lorenzo` / mot de passe dans le seeder
- **Membre** : `André` / mot de passe dans le seeder

## 📊 Base de données

### Modèle de données

- **users** : Utilisateurs avec mots de passe hashés
- **role** : Rôles (admin, member)
- **list** : Listes Kanban avec position
- **card** : Cartes avec contenu, couleur et position
- **tag** : Tags avec nom et couleur
- **card_has_tag** : Table de liaison cartes ↔ tags (many-to-many)

### Astuce PostgreSQL

Si vous utilisez une table nommée `user` en minuscules, pensez à utiliser des guillemets doubles dans vos requêtes SQL manuelles :

```sql
SELECT * FROM "user";
```

## 🔒 Sécurité

Ce projet met l'accent sur les bonnes pratiques de sécurité :

- ✅ Authentification JWT avec expiration
- ✅ Hashage Argon2 (résistant aux rainbow tables)
- ✅ Protection XSS sur toutes les entrées
- ✅ Validation stricte des données (Joi schemas)
- ✅ Autorisation basée sur les rôles (RBAC)
- ✅ CORS restreint au domaine du frontend
- ✅ Gestion appropriée des erreurs HTTP

## 🎓 Contexte pédagogique

Ce projet est un exercice de formation O'clock Dundee axé sur :

- L'apprentissage des vulnérabilités web courantes (OWASP Top 10)
- L'implémentation d'un système d'authentification moderne
- La création d'une architecture frontend/backend complète
- Les bonnes pratiques de développement et de sécurité

## 📝 API Endpoints

### Authentication
- `POST /auth/register` - Inscription
- `POST /auth/login` - Connexion (retourne un JWT)
- `GET /auth/me` - Informations utilisateur connecté

### Lists (admin uniquement pour POST/PATCH/DELETE)
- `GET /lists` - Toutes les listes
- `GET /lists/expanded` - Listes avec cartes et tags
- `POST /lists` - Créer une liste
- `PATCH /lists/:id` - Modifier une liste
- `DELETE /lists/:id` - Supprimer une liste

### Cards
- `GET /cards` - Toutes les cartes
- `POST /cards` - Créer une carte
- `PATCH /cards/:id` - Modifier une carte
- `DELETE /cards/:id` - Supprimer une carte

### Tags
- `GET /tags` - Tous les tags
- `POST /tags` - Créer un tag
- `PATCH /tags/:id` - Modifier un tag
- `DELETE /tags/:id` - Supprimer un tag

## 📄 Licence

Projet éducatif O'clock
