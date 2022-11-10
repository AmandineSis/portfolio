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
        subtitle: "Company social network",
        frame: require('@/assets/images/projects/iphoneframe.png'),
        frameAltTxt: "iphone frame",
        screenshot:  require('@/assets/images/projects/project_preview_groupomania.png'),
        altTxt: "Groupomani preview",
        codesource: "https://github.com/AmandineSis/Groupomania.git",
        languages: ["#VueJs", "#MySQL", "#JavaScript", "#HTML", "#SCSS"],
        description: [
          "Allow users to share content and interact with each-other",
          "Authenticate a user and keep is session alive for a given-time",
          "Implement a secure data storage using SQL",
          "Enable user to get personalized content",
        ],
      },
      {
        _id: 2,
        status: "inactive",
        title: "Piiquante",
        subtitle: "Secure API for a food review application",
        frame: require('@/assets/images/projects/iphoneframe.png'),
        frameAltTxt: "iphone frame",
        screenshot: require('@/assets/images/projects/project_preview_piiquante.png'),
        altTxt: "Piiquante preview",
        specifications: "",
        codesource: "https://github.com/AmandineSis/Piiquante",
        languages: ["#API_REST", "#Express", "#MongoDB"],
        description: [
          "Implement CRUD operations in a secure way",
          "Implement a logical relational data model",
          "Secure data storage",
        ],
      },
      {
        _id: 3,
        title: "Kanap",
        status: "inactive",
        subtitle: "E-commerce website in JavaScript",
        frame: require('@/assets/images/projects/iphoneframe.png'),
        frameAltTxt: "iphone frame",
        screenshot: require('@/assets/images/projects/project_preview_kanap.png'),
        altTxt: "Kanap preview",
        specifications: "",
        codesource: "https://github.com/AmandineSis/Kanap",
        languages: ["#JavaScript", "#Site_dynamique", "#Interaction"],
        description: [
          "Interact with a web servive using JavaScript",
          "Ensure data validation from external sources",
          "Create an acceptance test",
          "Handle JavaScript events",
        ]
      },
      {
        _id: 4,
        title: "Oh My Food !",
        status: "inactive",
        subtitle: "100% mobile food app",
        frame: require('@/assets/images/projects/ohmyfood.jpg'),
        frameAltTxt: "aperçu application mobile ohmyfood",
        screenshot: require('@/assets/images/projects/ohmyfood.jpg'),
        altTxt: "OhMyFood preview",
        specifications: "",
        codesource: "https://github.com/AmandineSis/Oh_my_food",
        languages: ["#HTML", "#Sass", "#Animation_CSS"],
        description: [
          "Implement advanced CSS effects",
          "Ensure coherence and consistency of a web application",
          "Set up a web navigation structure",
          "Use a version control system to follow up the project "
        ]
      },
      {
        _id: 5,
        title: "Reservia",
        status: "inactive",
        subtitle: "Hospitality website integration ",
        frame: require('@/assets/images/projects/reservia.jpg'),
        frameAltTxt: "aperçu application mobile ohmyfood",
        screenshot: require('@/assets/images/projects/reservia.jpg'),
        altTxt: "Reservia preview",
        specifications: "",
        codesource: "https://github.com/AmandineSis/reservia",
        languages: ["#HTML", "#Sass", "#Animation_CSS"],
        description: [
          "Integrate content from a designated mockup",
          "Implement a responsive interface",
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
