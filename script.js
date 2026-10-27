// ════════════════════════════════════════════
//   ADAQUIZ — script.js
//   Certaines fonctions sont déjà écrites.
//   Les fonctions marquées TODO sont à compléter.
// ════════════════════════════════════════════

// ── Sélection des éléments DOM ──────────────
// Ces lignes récupèrent les éléments HTML par leur id.
// Tu n'as pas besoin de les modifier.

const btnCommencer = document.getElementById("btn-commencer");
const ecranAccueil = document.getElementById("ecran-accueil");
const ecranQuestion = document.getElementById("ecran-question");
const ecranResultats = document.getElementById("ecran-resultats");

const titreQuiz = document.getElementById("titre-quiz");
const descriptionQuiz = document.getElementById("description-quiz");
const nbQuestions = document.getElementById("nb-questions");

const texteQuestion = document.getElementById("texte-question");
const listeReponses = document.getElementById("liste-reponses");
const compteurQuestion = document.getElementById("compteur-question");
const barreProgression = document.getElementById("barre-progression");
const imageQuestion = document.getElementById("image-question");

const feedbackReponse = document.getElementById("feedback-reponse");
const btnAnecdote = document.getElementById("btn-anecdote");
const zoneAnecdote = document.getElementById("zone-anecdote");
const texteAnecdote = document.getElementById("texte-anecdote");

const scoreFinal = document.getElementById("score-final");
const messageFin = document.getElementById("message-fin");

// ── État du quiz ─────────────────────────────
// Ces variables stockent les données en cours de partie.
// Tu n'as pas besoin de les modifier.

let questions = []; // tableau des questions chargées depuis le JSON
let indexCourant = 0; // numéro de la question en cours (commence à 0)
let score = 0; // nombre de bonnes réponses

// // ── Chargement du JSON ───────────────────────
// // Cette fonction est déjà écrite.
// // Elle charge le fichier questions.json et remplit l'écran d'accueil.

fetch("questions.json")
  .then((response) => response.json())
  .then((data) => {
    questions = data;
    titreQuiz.textContent = "Motoquiz";
    descriptionQuiz.textContent =
      "Que tu sois pilote passionné.e de routes à virages, ou simplement amateur.ice de belles machines et de puissance, aligne toi sur la ligne de départ, accélère fort, prends la plus belle trajectoire et valide les 10 prochains checkpoints pour atteindre le meilleur score !";
    nbQuestions.textContent = questions.length + " questions";
    //change le texte du boutun de demarrage une fois le chargement finis
    btnCommencer.textContent = "Démarer le quiz 🏍️"; 
  });

// ── Navigation entre les écrans ──────────────
// Cette fonction est déjà écrite.
// Elle cache tous les écrans puis affiche celui qu'on lui donne.

const afficher = (ecran) => {
  ecranAccueil.classList.add("cache");
  ecranQuestion.classList.add("cache");
  ecranResultats.classList.add("cache");
  ecran.classList.remove("cache");
};

// ════════════════════════════════════════════
//   TODO — Fonctions à compléter
// ════════════════════════════════════════════

// ── TODO : afficherQuestion ──────────────────
// Cette fonction doit afficher la question en cours.
// Elle est appelée au début de chaque nouvelle question.
//
// Ce qu'elle doit faire :
//   1. Récupérer la question courante : questions[indexCourant]
//   2. Mettre à jour la barre de progression
//   3. Mettre à jour le compteur ("Question X / Y")
//   4. Afficher le texte de la question dans #texte-question
//   5. Cacher le bouton "Question suivante"
//   6. Vider #liste-reponses, puis créer un bouton pour chaque réponse
//      Chaque bouton doit appeler verifierReponse() au clic

// écris ton code ici
const afficherQuestion = () => {
  const q = questions[indexCourant];

  texteQuestion.textContent = q.texte; // modifier

  listeReponses.innerHTML = ""; // vider

  q.reponses.forEach((reponse, index) => {
    const btn = document.createElement("button"); // créer
    btn.textContent = reponse;
    btn.classList.add("btn-reponse"); // modifier
    btn.addEventListener("click", () => {
      // écouter
      verifierReponse(index);
    });
    listeReponses.appendChild(btn); // insérer
  });
};

// ── TODO : verifierReponse ───────────────────
// Cette fonction est appelée quand une apprenante clique sur une réponse.
// Elle reçoit en paramètre l'index de la réponse choisie (0, 1, 2 ou 3).
//
// Ce qu'elle doit faire :
//   1. Récupérer la question courante
//   2. Désactiver tous les boutons de réponse
//   3. Colorier en vert la bonne réponse (ajouter la classe "correcte")
//   4. Si la réponse choisie est mauvaise, la colorier en rouge ("incorrecte")
//   5. Si la réponse est bonne, incrémenter le score
//   6. Afficher le bouton "Question suivante"

const verifierReponse = (indexChoisi) => {
  // Écris ton code ici
};

// ── TODO : afficherResultats ─────────────────
// Cette fonction est appelée quand toutes les questions ont été répondues.
//
// Ce qu'elle doit faire :
//   1. Afficher le score dans #score-final (ex. "4 / 7")
//   2. Afficher un message dans #message-fin selon le score
//   3. Appeler afficher(ecranResultats) pour passer à l'écran résultats

const afficherResultats = () => {
  // Écris ton code ici
};

// ── TODO : écouteurs d'événements ───────────
// Branche les boutons sur les bonnes fonctions.
//
// À faire :
//   - btn-commencer → afficher l'écran question + appeler afficherQuestion()
//   - btn-suivant   → passer à la question suivante ou aux résultats
//   - btn-rejouer   → remettre indexCourant et score à 0, revenir à l'accueil

// Écris ton code ici
