# CRUD Express + MySQL

API REST minimale de gestion d'utilisateurs, en Node.js et MySQL, conteneurisée
et déployable sur Kubernetes.

Dépôt volontairement court : il sert de base propre pour un CRUD, du code
applicatif jusqu'au déploiement.

## Points d'entrée

| Méthode | Route | Rôle |
|---|---|---|
| `GET` | `/api/users` | Liste les utilisateurs |
| `POST` | `/api/users` | Crée un utilisateur (`name`, `email` requis) |

Les erreurs de saisie renvoient un `400` avec un message explicite, les erreurs
de base un `500`.

## Pile

- **Node.js** avec Express (modules ES)
- **MySQL** via `mysql2`
- **Docker** et `docker-compose` pour l'exécution locale
- **Kubernetes** : manifestes dans `k8s/`

## Lancer en local

```bash
docker compose up --build
```

Le schéma de la table `users` est créé par `init.sql` au premier démarrage.

## Sans Docker

```bash
npm install
node app.js
```

La connexion à la base se configure dans `db.js`, via des variables
d'environnement. Copiez `.env.example` en `.env` et renseignez vos valeurs.

## Auteur

RAMANATENANIAVO Nasandratra Alfa
