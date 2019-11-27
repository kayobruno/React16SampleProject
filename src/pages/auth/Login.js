import React, { useEffect } from 'react'
import { Button } from 'antd'
import { t } from 'ab18n'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import oauth from 'services/oauth'
import logo from 'assets/images/logo.png'
import { actions } from './actions'
import './Login.sass'

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

const Login = ({ goHome, setStatus, auth }) => {
  useEffect(() => {
    async function checkIsLoggedIn() {
      const isLoggedIn = await oauth.isLoggedIn()
      if (isLoggedIn) {
        goHome()
      }
    }
    checkIsLoggedIn()
    if (window.gapi) {
      oauth.init()
    }
  }, [goHome])

  const onClick = () => {
    setStatus({
      status: {
        loading: false,
        disabled: true,
        error: null,
      },
    })
  }

  const { loading, disabled, error } = auth.status

  return (
    <div className="login">
      <div className="login-wrapper">
        <img src={logo} alt={t('general.logo')} />
        <h1>{ t('general.logo') }</h1>
        <Button
          block
          shape="round"
          type="primary"
          id="login-btn"
          className="btn-primary"
          disabled={disabled}
          loading={loading}
          onClick={onClick}
        >
          { t('auth.login') }
        </Button>
        { error && <p>{ error }</p> }
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
