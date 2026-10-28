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
const btnSuivant = document.getElementById("btn-suivant");

const feedbackReponse = document.getElementById("feedback-reponse");
const btnAnecdote = document.getElementById("btn-anecdote");
const zoneAnecdote = document.getElementById("zone-anecdote");
const texteAnecdote = document.getElementById("texte-anecdote");

const scoreFinal = document.getElementById("score-final");
const messageFin = document.getElementById("message-fin");
const nbQuestion = document.getElementById("nb-question");
const btnRejouer = document.getElementById("btn-rejouer");

// ── État du quiz ─────────────────────────────
// Ces variables stockent les données en cours de partie.
// Tu n'as pas besoin de les modifier.

let questions = []; // tableau des questions chargées depuis le JSON
let indexCourant = 0; // numéro de la question en cours (commence à 0)
let score = 0; // nombre de bonnes réponses

// // ── Chargement du JSON ───────────────────────
// // Cette fonction est déjà écrite.
// // Elle charge le fichier questions.json et remplit l'écran d'accueil.

// fetch("questions.json")
//   .then((response) => response.json())
//   .then((data) => {
//     questions = data;
//     titreQuiz.textContent = "Motoquiz";
//     descriptionQuiz.textContent =
//       "Que tu sois pilote passionné.e de routes à virages, ou simplement amateur.ice de belles machines et de puissance, aligne toi sur la ligne de départ, accélère fort, prends la plus belle trajectoire et valide les 10 prochains checkpoints pour atteindre le meilleur score !";
//     nbQuestions.textContent = questions.length + " questions";
//   });

fetch("questions.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Impossible de charger questions.json");
    }

    return response.json();
  })
  .then((data) => {
    // Stocker les questions chargées
    questions = data;

    // Mettre à jour le nombre de questions
    nbQuestions.textContent = questions.length + " questions prêtes";
    //change le texte du bouton de demarrage une fois le chargement fini
    btnCommencer.textContent = "Démarrer le quiz 🏍️";
    // Autoriser le démarrage du quiz
    btnCommencer.disabled = false;
  })
  .catch((erreur) => {
    console.error("Erreur de chargement du quiz :", erreur);
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

let reponseValidee = false;
const afficherQuestion = () => {
  reponseValidee = false;
  // 1. Récupérer la question courante
  const q = questions[indexCourant];
  // 2. Mettre à jour la barre de progression
  barreProgression.max = questions.length;
  barreProgression.value = indexCourant + 1;
  // 3. Mettre à jour le compteur
  compteurQuestion.textContent = `Question ${indexCourant + 1} / ${questions.length}`;
  // 4. Afficher le texte de la question
  texteQuestion.textContent = q.question;
  // Afficher l'image associée à la question
  imageQuestion.src = q.image;
  imageQuestion.alt = `Illustration de la question ${indexCourant + 1}`;
  // 5. Cacher le bouton "Question suivante"
  btnSuivant.hidden = true;
  // Vider la liste des réponses
  listeReponses.innerHTML = "";
  // 6. Créer un bouton pour chaque réponse
  q.reponses.forEach((reponse, index) => {
    const btn = document.createElement("button");

    btn.type = "button";
    btn.textContent = reponse;
    btn.classList.add("btn-reponse");
    // Appeler verifierReponse() au clic
    btn.addEventListener("click", () => {
      verifierReponse(index);
    });

    listeReponses.appendChild(btn);
  });
};

// ── TODO : verifierReponse ───────────────────
// Cette fonction est appelée quand une apprenante clique sur une réponse.
// Elle reçoit en paramètre l'index de la réponse choisie (0, 1, 2 ou 3).

const verifierReponse = (indexChoisi) => {
  // 1. Récupérer la question courante
  const q = questions[indexCourant];
  // Empêcher de répondre plusieurs fois à la même question
  if (reponseValidee) {
    return;
  }

  reponseValidee = true;
  // 2. Désactiver tous les boutons de réponse
  const boutons = listeReponses.querySelectorAll(".btn-reponse");

  boutons.forEach((bouton) => {
    bouton.disabled = true;
  });
  // 3. Colorier en vert la bonne réponse
  boutons[q.bonne_reponse].classList.add("correcte");
  // 4. Si la réponse choisie est mauvaise, la colorier en rouge
  if (indexChoisi !== q.bonne_reponse) {
    boutons[indexChoisi].classList.add("incorrecte");
  } else {
    // 5. Si la réponse est bonne, incrémenter le score
    score++;
  }
  // 6. Afficher le bouton "Question suivante"
  btnSuivant.hidden = false;
};

// ── TODO : afficherResultats ─────────────────
// Cette fonction est appelée quand toutes les questions ont été répondues.
const afficherResultats = () => {
  // Ce qu'elle doit faire :
  //   1. Afficher le score dans #score-final (ex. "4 / 7")
  scoreFinal.textContent = `${score} / ${questions.length}`;
  //   2. Afficher un message dans #message-fin selon le score
  if (score === questions.length) {
    messageFin.textContent =
      "Incroyable ! Un sans-faute parfait, tu es un pilote de légende ! 🏆";
  } else if (score >= 7) {
    messageFin.textContent =
      "Excellente performance ! Ta culture moto est impressionnante ! 🏍️";
  } else if (score >= 5) {
    messageFin.textContent =
      "Tu as la moyenne, pas mal ! Encore quelques réglages au garage à faire... 🛵";
  } else {
    messageFin.textContent =
      "Aïe, chute collective ! Retourne au stand pour une révision. 🛠️";
  }
  //   3. Appeler afficher(ecranResultats) pour passer à l'écran résultats
  // Écris ton code ici
  afficher(ecranResultats);
};

// ── TODO : écouteurs d'événements ───────────
// Branche les boutons sur les bonnes fonctions.
//   - btn-commencer → afficher l'écran question + appeler afficherQuestion()
btnCommencer.addEventListener("click", () => {
  //securité au cas Json n'est pas completement chargé
  if (questions.length === 0) return;
  afficher(ecranQuestion);
  afficherQuestion();
});

//   - btn-suivant   → passer à la question suivante ou aux résultats
btnSuivant.addEventListener("click", () => {
  indexCourant++;
  if (indexCourant < questions.length) {
    afficherQuestion();
  } else {
    afficherResultats();
  }
});

//   - btn-rejouer   → remettre indexCourant et score à 0, revenir à l'accueil
btnRejouer.addEventListener("click", () => {
  indexCourant = 0; // remet le compteur des question à zéro.
  score = 0; // remet le score à zéro.
  afficher(ecranAccueil); // Retourne à l'écran de départ.
});

if (btnAnecdote) {
  btnAnecdote.addEventListener("click", () => {
    zoneAnecdote.hidden = false;
  });
}
