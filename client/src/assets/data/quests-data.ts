// &#12296;&#10217; : chevrons ouvrant et fermant
// &#171;&#187; : guillemets ouvrants et fermants

// import { callbackVerifySolution } from "./callback-verify-solution";

export const questsData = {
  data: [
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
            "« Sémantique vous dites ? » Et bien oui ! Notre code doit avoir du sens par rapport au type de données qu'on veut afficher. Les données affichées seront incluses dans des balises, une ouvrante et une fermante.",
            "Pour un titre principal, le nom de balise est « h1 ». Le titre principal d'une page n'est présent qu'une seule fois. On écrira par exemple : <h1>Voici mon titre</h1>",
            "À ton tour d'essayer ! Attention, il faut que tu crées cette balise dans celle appelée body, et pas en dehors.",
          ],
          image: {
            src: "https://www.redacteur.com/blog/wp-content/uploads/sites/6/2022/11/Image-a-la-une-balise-h1.png",
            alt: "Les balises HTML de titres",
          },
          sandboxUrl:
            "https://codesandbox.io/embed/l3qv4m?view=split&module=%2Findex.html&hidenavigation=1",
          confirmCondition: `textarea.value.includes("<h1>") &&
              textarea.value.includes("</h1>")`,
        },
        {
          id: "html2",
          title: "Créer un paragraphe",
          paragraph: [
            "Nous allons maintenant apprendre à rajouter du texte sur notre page ! Pour cela, nous devons utiliser la balise <p>, dans laquelle nous pouvons écrire le texte de notre choix.",
            "Plus qu'à essayer ! Pense toujours bien à l'écrire dans la balise body.",
          ],
          image: {
            src: "https://cdn.pixabay.com/photo/2015/12/01/03/24/computer-1071537_1280.png",
            alt: "Ordinateur portable rouge",
          },
          sandboxUrl:
            "https://codesandbox.io/embed/5d53cv?view=split&module=%2Findex.html&hidenavigation=1",
          confirmCondition: `textarea.value.includes("<p>") &&
              textarea.value.includes("</p>")`,
        },
        {
          id: "html3",
          title: "Insérer une image",
          paragraph: [
            "Maintenant, rajoutons une image. Cela rendra notre page bien plus esthétique. Pour cela, il faut utilser la balise image <img />.",
            "Attention, celle-ci est dite auto-fermante, elle ne marche pas par paire. Elle doit toujours bien se trouver à l'intérieur de la balise body.",
            "Mais pour que notre image s'affiche, il faut rajouter un attribut appelé \"src\" dans cette balise, et lui dire qu'il est égal au lien vers ton image. Dans un but d'inclusivité, notamment pour les personnes malvoyantes on rajoute un attribut \"alt\" qui décrit l'image et sera lu par l'audio-description.",
            'Pour résumer, le format d\'une balise image est : "<img src="" alt="" />"',
            'Essaye avec ce lien : "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"',
          ],
          image: {
            src: "https://cdn.pixabay.com/photo/2024/05/05/16/30/ai-generated-8741448_1280.jpg",
            alt: "Petit robot utilisant un ordinateur",
          },
          sandboxUrl:
            "https://codesandbox.io/embed/rc86qr?view=split&module=%2Findex.html",
          confirmCondition: `textarea.value.includes("<img") &&
              textarea.value.includes("/>") &&
              textarea.value.includes("src=") &&
              textarea.value.includes("alt=")`,
        },
      ],
    },
    {
      id: "c2",
      category: "css",
      image: { src: "/src/assets/images/css.svg", alt: "Illustration css" },
      quests: [
        {
          id: "css1",
          title: "Changer la couleur de fond",
          paragraph: [
            "Le CSS est un language permettant de changer le style des éléments de ta page de multiples façons. On peut désigner un élément précis dont on veut changer l'apparence, comme un titre identifié par une balise h1 ou une img par exemple, puis on lui attribut un style.",
            "On peut entre autres changer la couleur de fond d'une page ou d'un élément en utilisant la propriété \"background-color: couleur\", où le mot couleur désigne celle que l'on souhaite utiliser (du rose, du bleu, tout est possible !)",
          ],
          image: {
            src: "https://media.istockphoto.com/id/1477243684/fr/vectoriel/illustration-de-dessin-anim%C3%A9-%C3%A0-plat-concept-de-d%C3%A9veloppement-web.jpg?s=2048x2048&w=is&k=20&c=CxNLhatFLdnfczsBpXr5GssJYIxt9D2NpEgoqgvb6Fc=",
            alt: "Illustration CSS",
          },
          sandboxUrl:
            "https://codesandbox.io/embed/h825tj?view=split&module=%2Fstyles.css",
          confirmCondition: `textarea.value.includes("background-color:"`,
        },
        {
          id: "css2",
          title: "Arrondir les bords",
          paragraph: [
            'Pour arrondir les bords, tu peux utiliser la propriété "border-radius: valeur;" pour l\'unité de la valeur, tu peux utiliser le pixel par exemple avec son diminutif px.',
            "Tu peux donc écrire 25px, ou choisir des valeur plus petites ou plus grandes pour voir les bords devenir plus ou moins ronds. A toi de jouer !",
          ],
          image: {
            src: "/src/assets/images/border-radius.png",
            alt: "Illustration css",
          },
          sandboxUrl:
            "https://codesandbox.io/embed/34mf26?view=split&module=%2Fstyles.css",
          confirmCondition: `textarea.value.includes("border-radius:") &&
              textarea.value.includes("px")`,
        },
        {
          id: "css3",
          title: "Centrer le texte",
          paragraph: [
            'Pour centrer du texte sur une page, tu peux utiliser la propriété "text-align: center".',
            "Sache qu'il n'existe pas que la valeur center pour cette propriété, n'hésite surtout pas à chercher et tester d'autres styles si cela t'intéresse.",
          ],
          image: {
            src: "https://cdn.pixabay.com/photo/2022/07/08/05/38/freelance-work-7308505_1280.png",
            alt: "Illustration programmation",
          },
          sandboxUrl:
            "https://codesandbox.io/embed/mnghrp?view=split&module=%2Fstyles.css",
          confirmCondition: `textarea.value.includes("text-align: center"`,
        },
        {
          id: "css4",
          title: "Mettre une hauteur",
        },
        {
          id: "css5",
          title: "Définir une largeur",
        },
        {
          id: "css6",
          title: "Centrer latéralement un élément",
        },
        {
          id: "css7",
          title: "Centrer verticalement un élément",
        },
      ],
    },
  ],
};

export default questsData;
