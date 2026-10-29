# Motoquiz — Bounsy & Yoann

## Présentation du quiz

Voici un quiz composé de <b>10 questions à choix multiples sur le thème de la moto</b>.

Le quiz s'ouvre sur un écran d'accueil et se lance directement en utilisant le bouton `"DÉMARRER LE QUIZ 🏍️"` qui s'y trouve.

Les questions se succèdent les unes après les autres, après validation de la réponse (1 seule bonne réponse par question).

Des anecdotes en lien avec chaque question sont proposées juste après avoir répondu afin de préciser la réponse et d'enrichir ta culture moto.

Les boutons `"ANECDOTE"` et `"QUESTION SUIVANTE"` deviennent accessibles uniquement après avoir sélectionné la réponse à la question, et ne sont cliquables qu'une seule fois.

Ton score est affiché à l'issue sur l'écran de résultats, avec un commentaire personnalisé en fonction du nombre de points que tu as validé.

Sur ce même écran, le bouton `"REJOUER"` permet de recommencer le quiz à volonté !


## Rejoindre le projet 

Dépôt distant GitHub : https://github.com/anyonym/adaquiz.git

Branche `main` : <b>version mise à jour et fonctionnelle uniquement</b>

Branches `data`, `personnalisation`, `modif-todo` : branches de développement / tests fonctionnalités

### Contenu du repository :
```
.gitignore
`README.md`
`index.html`
`style.css`
`script.js`
`questions.json`
/images --- contient les illustrations
/maquettes --- contient les wireframes
```
### Ajouter une question :

1. Ouvrir le fichier `questions.json` dans un éditeur de code, copier le bloc suivant et le coller à la suite de la dernière question du fichier ; puis compléter les champs "..." correspondants :
```bash
{
    "id": "...",
    "question": "...",
    "reponses": ["...", "...", "...", "..."],
    "bonne_reponse": "...",
    "anecdote": "...",
    "image": "images/..."
}
```
<b>⚠️ ATTENTION</b> : penser à ajouter la <b>,</b> après l'accolade fermante <b>}</b> du bloc de la question précédente. -> <b>},</b>

2. Ouvrir le fichier `index.html` ; dans la partie <b>ÉCRAN 1 — ACCUEIL</b> modifier le bloc <span id="nbQuestions"> "..." </span> en fonction du nombre total de questions ainsi que <p id="descriptionQuiz"> les "..." prochains checkpoints </p>

3. Penser à ajouter le fichier image d'illustration dans le dossier images, en respectant la convention de nommage avec le numéro de question correspondant.

### Reste à améliorer :

Le nombre de questions qui s'incrémente directement grâce au `script.js` si le fichier `questions.json` est modifié.


## Ce qui est déjà fait

- `index.html` — la structure de base avec les 3 sections à compléter
- `style.css` — uniquement la classe .cache (permettant de cacher des écrans dynamiquement grâce au JS)
- `script.js` — le chargement du JSON et la navigation entre écrans

## Ce que vous devez faire

1. **Compléter `index.html` et `style.css`** pour créer le squelette du site, sans JavaScript
2. **Compléter `questions.json`** avec au moins 5 questions (voir le brief pour le format)
3. **Compléter les fonctions** marquées `TODO` dans `script.js` :
   - `afficherQuestion()`
   - `verifierReponse(indexChoisi)`
   - `afficherResultats()`
   - Les écouteurs d'événements en bas du fichier

## Lancer le projet en local

```bash
npx live-server
```

Ouvrir ensuite `http://localhost:8080`.

> ⚠️ Ne pas ouvrir `index.html` directement dans le navigateur — `fetch` ne fonctionne pas sans serveur local.