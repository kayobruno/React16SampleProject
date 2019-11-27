import { t } from 'ab18n'
import jwtDecode from 'jwt-decode'

import store from 'state'
import { actions } from 'pages/auth/actions'
import storage from 'services/storage'

const { REACT_APP_CLIENT_ID: GOOGLE_CLIENT_ID } = process.env

const setLoginStatus = data => store.dispatch(actions.setStatus(data))

const init = () => {
  setLoginStatus({
    status: {
      loading: true,
      disabled: true,
      error: null,
    },
  })

  const loginBtn = document.getElementById('login-btn')

  if (!window.gapi) return

  window.gapi.load('auth2', () => {
    const googleAuth2 = window.gapi.auth2.init({
      client_id: GOOGLE_CLIENT_ID,
      cookiepolicy: 'single_host_origin',
    })

    googleAuth2.then(
      () => setLoginStatus({
        status: {
          loading: false,
          disabled: false,
        },
      }),
      () => setLoginStatus({
        status: {
          loading: false,
          disabled: true,
          error: t('auth.conectionFail'),
        },
      }),
    )

    window.googleAuth2 = googleAuth2

    if (loginBtn) {
      googleAuth2.attachClickHandler(
        loginBtn, {},
        (user) => {
          setLoginStatus({
            status: {
              loading: false,
              error: null,
            },
          })
          store.dispatch(actions.login(user.getAuthResponse().id_token))
        },
        () => setLoginStatus({
          status: {
            loading: false,
            disabled: true,
            error: t('auth.conectionFail'),
          },
        }),
      )
    }
  })
}

const isLoggedIn = async () => {
  const jwt = await storage.fetch('jwt')

  if (jwt) {
    store.dispatch(actions.setStatus({
      data: jwtDecode(jwt)
    }))
  }

  return jwt !== null
}

export default {
  init,
  isLoggedIn,
}
