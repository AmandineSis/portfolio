import { createStore, createLogger } from 'vuex'

const debug = process.env.NODE_ENV !== 'production'
//Initialisation du local storage
// let projects = localStorage.getItem('projects');
// projects = JSON.parse(projects);

export default createStore({
  strict: debug,
  plugins: debug ? [createLogger()] : [],

  state: {
    status: '',
    projects: [
      {
        _id: "1",
        status: "active",
        title: "Groupomania",
        subtitle: "Réseau social d'entreprise",
        frame: require('@/assets/images/projects/iphoneframe.png'),
        frameAltTxt: "iphone frame",
        screenshot:  require('@/assets/images/projects/project_preview_groupomania.png'),
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
        frame: require('@/assets/images/projects/iphoneframe.png'),
        frameAltTxt: "iphone frame",
        screenshot: require('@/assets/images/projects/project_preview_piiquante.png'),
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
        frame: require('@/assets/images/projects/iphoneframe.png'),
        frameAltTxt: "iphone frame",
        screenshot: require('@/assets/images/projects/project_preview_kanap.png'),
        altTxt: "aperçu du site Kanap",
        specifications: "",
        codesource: "https://github.com/AmandineSis/Kanap",
        languages: ["#JavaScript", "#Site_dynamique", "#Interaction"],
        description: [
          "Interagir avec un web service avec JavaScript",
          "Valider des données issues de sources externes",
          "Créer un plan de test pour une application",
          "Gérer des événements JavaScript",
        ]
      },
      {
        _id: 4,
        title: "Oh My Food !",
        status: "inactive",
        subtitle: "Site 100% mobile de gastronomie",
        frame: require('@/assets/images/projects/ohmyfood.jpg'),
        frameAltTxt: "aperçu application mobile ohmyfood",
        screenshot: require('@/assets/images/projects/ohmyfood.jpg'),
        altTxt: "aperçu du site OhMyFood",
        specifications: "",
        codesource: "https://github.com/AmandineSis/Oh_my_food",
        languages: ["#HTML", "#Sass", "#Animation_CSS"],
        description: [
          "Mettre en œuvre des effets CSS graphiques avancés",
          "Assurer la cohérence graphique d'un site web",
          "Mettre en place une structure de navigation pour un site web",
          "Utiliser un système de gestion de versions pour le suivi du projet et son hébergement",
        ]
      },
      {
        _id: 5,
        title: "Réservia",
        status: "inactive",
        subtitle: "Intégration d'un site d'hébergement ",
        frame: require('@/assets/images/projects/reservia.jpg'),
        frameAltTxt: "aperçu application mobile ohmyfood",
        screenshot: require('@/assets/images/projects/reservia.jpg'),
        altTxt: "aperçu du site Réservia",
        specifications: "",
        codesource: "https://github.com/AmandineSis/reservia",
        languages: ["#HTML", "#Sass", "#Animation_CSS"],
        description: [
          "Intégrer du contenu conformément à une maquette",
          "Implémenter une interface responsive",
        ]
      },
    ],
    selection: [],
    },
  getters: {
    GetAllProjects(state){
      return state.projects
    },
    GetSelection(state){
      return state.selection
    }
  },
  mutations: {
    SET_STATUS(state, status){
      state.status = status;
    },
    PROJECT_SELECTED(state, selection){
      state.selection = selection;
    },
  },
  actions: {
    getSelectedProject: ({ commit, state }, projId ) => {
      commit('SET_STATUS', 'loading')
      let projectFound = {};
      state.projects.forEach((project) => {
        if(projId == project._id){
          projectFound = project;
        }
      })
      commit('SET_STATUS', 'project loaded')
      commit('PROJECT_SELECTED', projectFound)
  },
  },
  modules: {
  }
})
