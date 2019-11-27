import { types } from './actions'

const INITIAL_STATE = {
  data: null,
  status: {
    loading: false,
    disabled: false,
    error: false,
  },
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_STATUS:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}
