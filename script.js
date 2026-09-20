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
    ```javascript
    { 
      question: "Quelle clause permet de sélectionner uniquement les lignes qui respectent une condition ?", 
      answers: ["SELECT", "WHERE", "ORDER BY", "GROUP BY"], 
      correct: 1 
    },

    { 
      question: "Quelle clause permet de trier les résultats d'une requête ?", 
      answers: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"], 
      correct: 2 
    },

    { 
      question: "Quel mot-clé permet d'éviter les doublons dans le résultat d'une requête ?", 
      answers: ["UNIQUE", "DISTINCT", "ONLY", "DIFFERENT"], 
      correct: 1 
    },

    { 
      question: "Quelle fonction permet de compter le nombre de lignes ?", 
      answers: ["SUM()", "COUNT()", "AVG()", "TOTAL()"], 
      correct: 1 
    },

    { 
      question: "Quelle fonction permet de calculer la moyenne d'une colonne numérique ?", 
      answers: ["SUM()", "COUNT()", "AVG()", "MOY()"], 
      correct: 2 
    },

    { 
      question: "Quelle fonction permet d'obtenir la plus grande valeur d'une colonne ?", 
      answers: ["MAX()", "HIGH()", "TOP()", "UP()"], 
      correct: 0 
    },

    { 
      question: "Quelle fonction permet d'obtenir la plus petite valeur d'une colonne ?", 
      answers: ["MIN()", "LOW()", "SMALL()", "BOTTOM()"], 
      correct: 0 
    },

    { 
      question: "Quelle fonction permet de calculer la somme des valeurs d'une colonne ?", 
      answers: ["TOTAL()", "ADD()", "SUM()", "COUNT()"], 
      correct: 2 
    },

    { 
      question: "Quelle clause permet de regrouper les lignes ayant une même valeur ?", 
      answers: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"], 
      correct: 0 
    },

    { 
      question: "Quelle clause permet de filtrer les groupes obtenus avec GROUP BY ?", 
      answers: ["WHERE", "HAVING", "FILTER", "ORDER BY"], 
      correct: 1 
    },

    { 
      question: "Quelle commande permet d'insérer une nouvelle ligne dans une table ?", 
      answers: ["ADD", "INSERT INTO", "UPDATE", "CREATE"], 
      correct: 1 
    },

    { 
      question: "Quelle commande permet de modifier des données existantes ?", 
      answers: ["ALTER", "CHANGE", "UPDATE", "MODIFY TABLE"], 
      correct: 2 
    },

    { 
      question: "Quelle commande permet de supprimer certaines lignes d'une table ?", 
      answers: ["REMOVE", "DELETE", "DROP", "CLEAR"], 
      correct: 1 
    },

    { 
      question: "Quelle commande permet de créer une nouvelle table ?", 
      answers: ["NEW TABLE", "CREATE TABLE", "MAKE TABLE", "ADD TABLE"], 
      correct: 1 
    },

    { 
      question: "Quelle commande permet de supprimer complètement une table ?", 
      answers: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "CLEAR TABLE"], 
      correct: 2 
    },

    { 
      question: "Quelle contrainte interdit l'utilisation de la valeur NULL dans une colonne ?", 
      answers: ["UNIQUE", "CHECK", "NOT NULL", "DEFAULT"], 
      correct: 2 
    },

    { 
      question: "Quelle contrainte permet de garantir que les valeurs d'une colonne sont différentes ?", 
      answers: ["CHECK", "UNIQUE", "DEFAULT", "NOT NULL"], 
      correct: 1 
    },

    { 
      question: "Quelle contrainte permet de vérifier qu'une valeur respecte une condition ?", 
      answers: ["CHECK", "UNIQUE", "DEFAULT", "FOREIGN KEY"], 
      correct: 0 
    },

    { 
      question: "Quel est le rôle d'une clé étrangère ?", 
      answers: [
        "Identifier obligatoirement chaque ligne",
        "Créer une relation entre deux tables",
        "Trier les données",
        "Supprimer les doublons"
      ], 
      correct: 1 
    },

    { 
      question: "Dans une requête utilisant plusieurs tables, où place-t-on généralement les conditions de liaison entre les tables avec la méthode étudiée ?", 
      answers: ["SELECT", "FROM", "WHERE", "ORDER BY"], 
      correct: 2 
    },

    { 
      question: "Quelle requête permet de relier les tables CLIENT et COMMANDE par l'identifiant du client ?", 
      answers: [
        "SELECT * FROM CLIENT C, COMMANDE CO WHERE C.id = CO.id_client",
        "SELECT * FROM CLIENT C, COMMANDE CO ORDER BY C.id = CO.id_client",
        "SELECT CLIENT + COMMANDE WHERE id",
        "SELECT * FROM CLIENT WHERE COMMANDE"
      ], 
      correct: 0 
    },

    { 
      question: "Si une requête contient FROM CLIENT C, COMMANDE CO, cela signifie que :", 
      answers: [
        "Une seule table est utilisée",
        "Deux tables sont utilisées dans la requête",
        "Une nouvelle table est créée",
        "Les deux tables sont supprimées"
      ], 
      correct: 1 
    },

    { 
      question: "Dans une requête SQL, quelle partie indique les tables utilisées ?", 
      answers: ["SELECT", "FROM", "WHERE", "HAVING"], 
      correct: 1 
    },

    { 
      question: "Dans une requête SQL, quelle partie indique les colonnes à afficher ?", 
      answers: ["FROM", "WHERE", "SELECT", "GROUP BY"], 
      correct: 2 
    },

    { 
      question: "Que signifie SELECT * ?", 
      answers: [
        "Sélectionner uniquement la première colonne",
        "Sélectionner toutes les colonnes",
        "Sélectionner uniquement les lignes vides",
        "Supprimer toutes les colonnes"
      ], 
      correct: 1 
    },

    { 
      question: "Que signifie l'opérateur SQL BETWEEN ?", 
      answers: [
        "Tester si une valeur est comprise dans un intervalle",
        "Comparer deux tables",
        "Chercher une valeur NULL",
        "Supprimer un intervalle de valeurs"
      ], 
      correct: 0 
    },

    { 
      question: "Quel opérateur permet de rechercher plusieurs valeurs possibles ?", 
      answers: ["LIKE", "IN", "BETWEEN", "IS"], 
      correct: 1 
    },

    { 
      question: "Quel opérateur permet de rechercher une chaîne correspondant à un modèle ?", 
      answers: ["LIKE", "MATCH", "SEARCH", "PATTERN"], 
      correct: 0 
    },

    { 
      question: "Dans une condition LIKE 'A%', que représente le symbole % ?", 
      answers: [
        "Un seul caractère",
        "Zéro ou plusieurs caractères",
        "Uniquement un chiffre",
        "Une valeur NULL"
      ], 
      correct: 1 
    },

    { 
      question: "Que permet de tester l'expression IS NULL ?", 
      answers: [
        "Si une valeur est égale à zéro",
        "Si une valeur est vide ou NULL",
        "Si une valeur est négative",
        "Si une valeur est unique"
      ], 
      correct: 1 
    }
```
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
