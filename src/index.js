import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import * as ab18n from 'ab18n'
import 'antd/dist/antd.css'
import 'moment/locale/pt-br'

import locales from 'i18n/locale'
import oauth from 'services/oauth'
import App from './App'

ab18n.onLocaleChange(data => moment.locale(data.locale))
ab18n.config(locales)
ab18n.set('pt-BR')

window.onGapiLoad = oauth.init

ReactDOM.render(<App />, document.getElementById('root'))
