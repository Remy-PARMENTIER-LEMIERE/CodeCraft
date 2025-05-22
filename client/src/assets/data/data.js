// &#12296;&#10217; : chevrons ouvrant et fermant
// &#171;&#187; : guillemets ouvrants et fermants

export const callbackVerifySolution = {
  correctAnswer() {
    setIsSubmitedAnswer(true);
    setIsGoodAnswer(true);
    setNextQuestUnlocked(true);
    setAnswer(textarea.value);
    setTextareaValue(textarea.value);
  },
  wrongAnswer() {
    setIsSubmitedAnswer(true);
    setIsGoodAnswer(false);
    setTextareaValue(textarea.value);
  },
};

export const data = [
  {
    id: "c1",
    category: "html",
    image: "./images/html.svg",
    quests: [
      {
        id: "html1",
        title: "Créer un Titre",
        paragraph: [
          "Découvrons ensemble le language HTML. Tout d'abord, il faut savoir que le language HTML n'est pas un language de programmation mais plutôt un language de structure. Il sert à construire la page de manière logique et sémantique.",
          "⟪Sémantique vous dites ?⟫ Et bien oui ! Notre code doit avoir du sens par rapport au type de données qu'on veut afficher. Les données affichées seront incluses dans des balises, une ouvrante et une fermante.",
          "Pour un titre principal, le nom de balise est &#171; <em>h1</em> &#187;. Le titre principal d'une page n'est présent qu'une seule fois. On écrira par exemple &#12296;h1&#10217;Voici mon titre&#12296;/h1&#10217;",
          "À ton tour d'essayer !",
        ],
        image: {
          src: "https://www.redacteur.com/blog/wp-content/uploads/sites/6/2022/11/Image-a-la-une-balise-h1.png",
          alt: "Les balises HTML de titres",
        },

        solution: function confirmSolution(textarea) {
          if (
            textarea.value.includes("<h1>") &&
            textarea.value.includes("</h1>")
          ) {
            correctAnswer();
          } else {
            wrongAnswer();
          }
        },
      },
      {
        id: "html2",
        title: "Créer un paragraphe",
        paragraph: [
          "Nous allons maintenant apprendre à rajouter du texte sur notre page! Pour cela, nous devons utiliser la balise , dans laquelle nous pouvons écrire le texte de notre choix.",
          "Cette fois-ci plutôt qu'une balise <em>h1</em> nous allons utiliser une balise <em>p</em>.",
          "Plus qu'à essayer !",
        ],

        confirmSolution(textarea) {
          if (
            textarea.value.includes("<p>") &&
            textarea.value.includes("</p>")
          ) {
            correctAnswer();
          } else {
            wrongAnswer();
          }
        },
      },
      {
        id: "html3",
        title: "Insérer une image",
        paragraph: [
          'Et pour finir, rajoutons une image. Cela rendra notre page bien plus esthétique. Pour cela, il faut utilser la balise image "<img />" &#12296;img/&#10217;.',
          "Attention, celle-ci est dite auto-fermante, nous devons donc la fermer directement.",
          "Mais pour que notre image s'affiche, il faut rajouter un attribut appelé \"src\" dans cette balise, et lui dire qu'il est égal au lien vers ton image.",
          'Dans un but d\'inclusivité, notamment pour les personnes malvoyantes on rajoute un attribut "alt" qui décrit l\'image et sera lu par l\'audio-description. Pour résumer, le format d\'une balise image est : "<img src="" alt="" />"',
          'Essaye avec ce lien : "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"',
        ],
        solution: function confirmSolution(textarea) {
          if (
            textarea.value.includes("<img") &&
            textarea.value.includes("/>") &&
            textarea.value.includes("src=") &&
            textarea.value.includes("alt=")
          ) {
            correctAnswer();
          } else {
            wrongAnswer();
          }
        },
      },
    ],
  },
  {
    ic: "c2",
    category: "CSS",
    image: "./images/css.svg",
    quests: [
      {
        id: "css1",
        title: "Changer la couleur de fond",
        paragraph: [
          "Le CSS est un language permettant de changer le style des éléments de ta page de multiples façons. On peut désigner un élément précis dont on veut changer l'apparence, comme un titre identifié par une balise h1 ou une img par exemple.",
          "On peut entre autres changer la couleur de fond d'une page ou d'un élément en utilisant la propriété background-color: couleur, où le mot couleur désigne celle qu'on souhaite utiliser (du rose, du bleu, tout est possible!)",
        ],
        solution: function confirmSolution(textarea) {
          if (textarea.value.includes("background-color:")) {
            correctAnswer();
          } else {
            wrongAnswer();
          }
        },
      },
      {
        id: "css2",
        title: "Arrondir les bord",
        paragraph: [
          "Pour arrondir les bords, tu peux utiliser la propriété border-radius: « VALEUR » ; pour l'unité de la valeur, tu peux utiliser le pixel par exemple avec son diminutif px.",
          "Tu peux donc écrire 25px, ou choisir des valeur plus petites ou plus grandes pour voir les bords devenir plus ou moins ronds. A toi de jouer !",
        ],
        image: "./images/border-radius.png",

        solution: function confirmSolution(textarea) {
          if (
            textarea.value.includes("border-radius:") &&
            textarea.value.includes("px")
          ) {
            correctAnswer();
          } else {
            wrongAnswer();
          }
        },
      },
      {
        id: "css3",
        title: "Centrer le texte",
        paragraph: [
          "Pour centrer du texte sur une page, tu peux utiliser la propriété text-align: center.",
          "Sache qu'il n'existe pas que la valeur center pour cette propriété, n'hésite surtout pas à chercher et tester d'autres styles si cela t'intéresse.",
        ],

        solution: function confirmSolution(textarea) {
          if (textarea.value.includes("text-align: center")) {
            correctAnswer();
          } else {
            wrongAnswer();
          }
        },
      },
    ],
  },
];
