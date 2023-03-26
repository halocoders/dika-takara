export const state = () => ({
  modal: null,
})

export const mutations = {
  SET_MODAL(state, data) {
    if (data == 'reset') {
      state.modal = null;
      return
    }

    state.modal = data;
  },
};
