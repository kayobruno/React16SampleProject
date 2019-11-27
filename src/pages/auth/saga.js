import {
  all, takeLatest, put, call,
} from 'redux-saga/effects'
import { t } from 'ab18n'
import jwtDecode from 'jwt-decode'

import history from 'shared/history'
import api from 'services/api'
import storage from 'services/storage'
import { actions, types } from './actions'

function* loginSaga({ payload: { idToken } }) {
  try {
    const { jwt } = yield call(api.post, '/login/google', { idToken })
    yield storage.save('jwt', jwt)
    yield put(actions.setStatus({
      data: jwtDecode(jwt)
    }))
    yield put(actions.goHome())
  } catch (error) {
    console.error('[LOGIN]', error)
    yield put(actions.setStatus({
      status: {
        error: t('auth.connectionFail'),
        disabled: false,
      },
    }))
  }
}

function* goHome() {
  const path = yield storage.fetch('restoreUrl')

  yield storage.remove('restoreUrl')
  yield history.push(path || '/')
}

function* logoutSaga() {
  yield storage.remove('jwt')
  yield history.push('/login')
}

export default function* () {
  yield all([
    takeLatest(types.LOGIN, loginSaga),
    takeLatest(types.GO_HOME, goHome),
    takeLatest(types.LOGOUT, logoutSaga),
  ])
}
