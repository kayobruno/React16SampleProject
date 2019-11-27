import { combineReducers } from 'redux'

import auth from 'pages/auth/reducer'
import sideBar from 'components/SideBar/reducer'

export default combineReducers({
  auth,
  sideBar,
})
