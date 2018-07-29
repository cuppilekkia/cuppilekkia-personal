import Vue from 'vue'
import Vuex from 'vuex'
import works from './data/works'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version: window.version,
    ui: {
      breakpoints: {},
      innerWidth: 0,
      menuOpen: false
    },
    works
  },
  mutations: {
    closeMenu (state) {
      state.ui.menuOpen = false
    },
    toggleMenu (state) {
      state.ui.menuOpen = !state.ui.menuOpen
    },
    setBreakpoints (state, obj) {
      state.ui.breakpoints = obj
    },
    changeWidth (state, value) {
      state.ui.innerWidth = value
    }
  },
  getters: {
    uiIS: state => {
      return {
        xs: state.ui.innerWidth >= state.ui.breakpoints.xs,
        sm: state.ui.innerWidth >= state.ui.breakpoints.sm,
        md: state.ui.innerWidth >= state.ui.breakpoints.md,
        lg: state.ui.innerWidth >= state.ui.breakpoints.lg,
        xl: state.ui.innerWidth >= state.ui.breakpoints.xl
      }
    },
    menuState: state => state.ui.menuOpen,
    works: state => state.works
  },
  actions: {

  }
})
