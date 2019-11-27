import { types } from './actions'

const INITIAL_STATE = {
  current: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_SIDE_BAR_PROPS:
      return {
        ...state,
        ...action.meta,
      }

    default:
      return state
  }
}
