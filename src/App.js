import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { Router, Switch, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale-provider/pt_BR'

import oauth from 'services/oauth'
import store from 'state'
import history from 'shared/history'
import Login from 'pages/auth/Login'
import BaseLayout from 'pages/BaseLayout'

const App = () => {
  useEffect(() => {
    async function checkIsLoggedIn() {
      const isLoggedIn = await oauth.isLoggedIn()
      if (!isLoggedIn) {
        history.push('/login')
      }
    }
    checkIsLoggedIn()
  }, [])

  return (
    <ConfigProvider locale={ptBR}>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={BaseLayout} />
          </Switch>
        </Router>
      </Provider>
    </ConfigProvider>
  )
}

export default App
