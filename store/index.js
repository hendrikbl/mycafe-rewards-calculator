export const state = () => ({
  mode: parseInt(localStorage.getItem('calc:mode')) || 2,
})

export const mutations = {
  setMode(state, mode) {
    state.mode = mode
    localStorage.setItem('calc:mode', mode)
  },
}
