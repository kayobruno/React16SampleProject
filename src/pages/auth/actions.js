import { typeActions } from 'state/util'

const { actions, types } = typeActions('auth', {
  login: idToken => ({ payload: { idToken } }),
  goHome: () => ({ }),
  setStatus: data => ({ payload: data }),
  logout: () => ({ }),
})

export {
  actions,
  types,
}
