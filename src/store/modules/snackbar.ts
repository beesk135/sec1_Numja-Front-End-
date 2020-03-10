import { StoreOptions } from 'vuex'
import { SnackbarState, SnackbarActions, SnackbarMutations, SnackbarPayload } from '@/types/snackbar'

const store: StoreOptions<SnackbarState> = {
  state: {
    isOpen: false,
    color: '',
    message: '',
  },
  mutations: {
    [SnackbarMutations.set]: (state, payload: SnackbarPayload) => {
      state.isOpen = true
      state.message = payload.message
      state.color = payload.color
    },
    [SnackbarMutations.reset]: (state) => {
      state.isOpen = false
      state.message = ''
      state.color = ''
    },
  },
  actions: {
    [SnackbarActions.push]: ({ commit }, payload: SnackbarPayload) => {
      commit(SnackbarMutations.set, payload)
    },
    [SnackbarActions.reset]: ({ commit }) => {
      commit(SnackbarMutations.reset)
    },
  },
}

export default store
