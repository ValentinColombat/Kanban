# O'Kanban

O'Kanban est une application de gestion de tâches inspirée des tableaux Kanban. Elle permet de créer, organiser et gérer des listes et des cartes. Ce projet est divisé en deux parties : une API backend et un client frontend.

## 📝 Description du projet

### API Backend

L'API backend est construite avec **Node.js**, **Express** et **Sequelize** pour gérer les données dans une base de données PostgreSQL. Elle expose des endpoints pour gérer les listes, les cartes et les tags.

### Client Frontend

Le client est développé avec **Svelte** et utilise **Vite** comme outil de build. Il offre une interface utilisateur intuitive pour interagir avec les données fournies par l'API.

---

## 🚀 Objectifs

- Connaître et savoir se prémunir des failles de sécurité les plus courantes
- Implémenter un système d'authentification
- Mettre en place un système de rôles (admin, utilisateur).

---

## 🛠️ Technologies utilisées

### Backend

- **Node.js**
- **Express**
- **Sequelize** (ORM)
- **PostgreSQL**
- **Joi** (validation des données)
- **dotenv** (gestion des variables d'environnement)

### Frontend

- **Svelte**
- **Vite**
- **Tailwind CSS** (avec DaisyUI pour les composants)
- **svelte-dnd-action** (pour le drag-and-drop)
- **svelte-exmarkdown** (pour le rendu Markdown)

---

## 📂 Structure du projet

- **`api/`** : Contient le code backend (API).
- **`client/`** : Contient le code frontend (interface utilisateur).
- **`énoncés/`** : Contient les exercices quotidiens à réaliser.

---

## ⚙️ Installation et lancement

### Prérequis

- **Node.js** (version 22 ou supérieure)
- **PostgreSQL** (base de données)

### Étapes

1. **Cloner le dépôt**

2. **Configurer les variables d'environnement**

- Backend : Copier le fichier `.env.example` dans `api/.env` et configurer les valeurs (notamment PG_URL pour la base de données PostgreSQL).

- Frontend : Copier le fichier `.env.example` dans `client/.env` et configurer l'URL de l'API (`VITE_API_URL`).

3. **Installer les dépendances et lancer les projets**

- Backend & Frontend

```bash
npm i
# Installation des modules bnack et front en même temps grâce à concurrently
npm run app:install
# Réinitialisation de ls BDD
npm run db:reset
# Démarre les serveurs de dèv front et back, avec concurrently
npm run dev
```

## PostgreSQL

### Astuce

Si on a une table "user" au singulier et en minusucule, il faudra faire attention à mettre des doubles guillemets quand on fait des requêtes à la main, sinon psql ira demander le nom de l'utilisateur de la BDD.
