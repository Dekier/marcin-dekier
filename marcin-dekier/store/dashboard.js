export const state = () => ({
  mouseOnCustomerList: false
})

export const getters = {
  mouseOnCustomerList: state => state.mouseOnCustomerList
}

export const actions = {
  mouseOnDiv ({state, commit}) {
    commit('assignMouseOnDiv')
  },
  mouseOutDiv ({state, commit}) {
    commit('assignMouseOutDiv')
  }
}

export const mutations = {
  assignMouseOnDiv (state) {
    state.mouseOnCustomerList = true
  },

  assignMouseOutDiv (state) {
    state.mouseOnCustomerList = false
  }
}
