const projects = [
  {
    _id: "1",
    status: "active",
    title: "Groupomania",
    subtitle: "Réseau social d'entreprise",
    frame: "iphoneframe.png",
    frameAltTxt: "iphone frame",
    screenshot: "project_preview_groupomania.png",
    altTxt: "aperçu du site Groupomania",
    codesource: "https://github.com/AmandineSis/Groupomania.git",
    languages: ["#VueJs", "#MySQL", "#JavaScript", "#HTML", "#SCSS"],
    description: [
      "Authentifier un utilisateur et maintenir sa session",
      "Gérer un stockage de données à l'aide de SQL",
      "Implémenter un stockage de données sécurisé en utilisant SQL",
      "Personnaliser le contenu envoyé à un client web",
    ],
  },
  {
    _id: 2,
    status: "inactive",
    title: "Piiquante",
    subtitle: "API sécurisée pour une application d'avis gastronomiques",
    frame: "iphoneframe.png",
    frameAltTxt: "iphone frame",
    screenshot: "project_preview_piiquante.png",
    altTxt: "aperçu du site Piiquante",
    specifications: "",
    codesource: "https://github.com/AmandineSis/Piiquante",
    languages: ["#API_REST", "#Express", "#MongoDB"],
    description: [
      "Mettre en œuvre des opérations CRUD de manière sécurisée",
      "Implémenter un modèle logique de données conformément à la réglementation",
      "Stocker des données de manière sécurisée",
    ],
  },
  {
    _id: 3,
    title: "Kanap",
    status: "inactive",
    subtitle: "Site e-commerce en JavaScript",
    frame: "iphoneframe.png",
    frameAltTxt: "iphone frame",
    screenshot: "project_preview_kanap.png",
    altTxt: "aperçu du site Kanap",
    specifications: "",
    codesource: "https://github.com/AmandineSis/Kanap",
    languages: ["#JavaScript", "#Site_dynamique", "#Interaction"],
    description: [
      "Interagir avec un web service avec JavaScript",
      "Valider des données issues de sources externes",
      "Créer un plan de test pour une application",
      "Gérer des événements JavaScript",
    ],
  },
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(projects))));
};

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(projects)).find((project) => project._id == id))
  );
};
