const questions = [
    { 
      question: " Qu'est-ce qu'une base de données ?", 
      answers: ["Un programme informatique", "Une collection organisée d'informations", "Une application de messagerie", "Un ensemble d'équipements informatiques"], 
      correct: 1 
    },
    { 
      question: " Quel langage est utilisé pour interroger une base de données relationnelle ?", 
      answers: ["HTML", "SQL", "C++", "JavaScript"], 
      correct: 1 
    },
    { 
      question: " Dans une BD relationnelle, les données sont:", 
      answers: ["Structucées d'une manière hiérachique", "Organisées dans des tableaux à deux dimentions", "Toutes identiques", "Non classifié"], 
      correct: 1 
    },
    { 
      question: "Quel est le role principal d'un SGBD? ", 
      answers: [" Envoyer des emails automatiquement ", " Gérer et manipuler des BDs " , " créer des graphiques ", "créer des sites web"], 
      correct: 1
    },
    { 
      question: " Les objectifs d'un DB sont :", 
      answers: ["l'Accès concurrents + persistance ", "Indépendance données programmes" , "Capacité d’interrogation", "Toutes"], 
      correct: 3 
    },
    { 
      question: "Lequel de ces logiciels est un SGBD ?", 
      answers: [" Microsoft Word ", "Postegres" , "PowerPoint", "Photoshop"], 
      correct: 1
    },
    { 
      question: " Quelle clé garantit l'unicité dans une table relationnelle ?", 
      answers: ["Clé primaire", "Clé étrangère", "Clé Index", "Les trois"], 
      correct: 0
    },
    { 
      question: "Quelle est la commande SQL permettant d'ajouter une colonne à une table :", 
      answers: ["CHANGE", "DROP", "INSERT", "ALTER"], 
      correct: 3
    },
    { 
      question: " Quel est le seul synonyme de la colone ?", 
      answers: [" Un enregistrement", "Tuple", "Propriété", "n-uplet"], 
      correct: 2 
    },
    { 
      question: "Les tables sont aussi appelée :", 
      answers: ["Elément", "Entité", "Tuple", "Array"], 
      correct: 1
    },
    { 
      question: "Parmis les choix quivantes, quelle est l'intrus ?", 
      answers: ["VARCHAR", "INT", "TEXT", "DATETEXT"], 
      correct: 3
    },
    { 
      question: "La contrainte CHECK garatntit : ", 
      answers: ["l'unicité des valeurs", "des certaines conditions de vérification", "la relation entre eux tables", "la suppression des lignes invalides"], 
      correct: 1
    },
    { 
      question: "Que signifie la persistance ?", 
      answers: ["centralisation + mettre à jours", " l'Indépendance structurelle", "résilience + mémorisation", "disponibilité + mémorisation"], 
      correct: 3
    },
    { 
      question: "Quel type de BD organise les données sous forme de tables reliées entre eux ?", 
      answers: ["Base hiérarchique", "Base graphique", "Base sonore", "Base relationelle"], 
      correct: 3
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let jeweb = false;
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
  
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
  
    answersElement.innerHTML = "";
    jeweb = false;
    currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.innerText = answer;
      button.onclick = () => checkAnswer(index, button);
      button.className = ""; 
      answersElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedIndex, button) {
    const correctIndex = questions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
      button.classList.add("correct");
      score++;
    } else {
      button.classList.add("incorrect");
      const correctButton = document.querySelectorAll("#answers button")[correctIndex];
      correctButton.classList.add("correct");
    }
    document.querySelectorAll("#answers button").forEach(btn => btn.disabled = true); // Disable buttons
    jeweb = true;
  }
  function nextQuestion() {
    if(!jeweb){
      alert("Choissir une réponse");
      return false;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      alert("Quizz terminé! vous avez "+score+" sur 14 réponses justes.");
      currentQuestionIndex = 0; 
    }
    loadQuestion();
  }
  
  /* Initialiation de bouheni*/
  document.addEventListener("DOMContentLoaded", loadQuestion);
  score=0;