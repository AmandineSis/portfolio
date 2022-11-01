import { createStore, createLogger } from 'vuex'
import instance from './axios'

const debug = process.env.NODE_ENV !== 'production'
//Initialisation du local storage
// let projects = localStorage.getItem('projects');
// projects = JSON.parse(projects);

export default createStore({
  strict: debug,
  plugins: debug ? [createLogger()] : [],

  state: {
    status: '',
    projects: []
  },
  getters: {
  },
  mutations: {
    SET_STATUS(state, status){
      state.status = status;
    },
    PROJECTS_RESULTS(state, projects){
      state.projects = projects;
    },
  },
  actions: {
    getAllProjects: ({ commit }) => {
      commit('SET_STATUS', 'loading')
      instance
          .get(`/`)
          .then( function (response) {
              console.log(response)
              /*commit('PROJECTS_RESULTS', response.data.results);
              commit('SET_STATUS', 'posts_by_date_loaded', { root: true })*/
          })
          .catch(function () {
              commit('SET_STATUS', 'error_projects')
      });
  },
  },
  modules: {
  }
})
