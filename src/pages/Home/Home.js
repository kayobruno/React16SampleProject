import React, { Component, Fragment } from 'react'
import { t } from 'ab18n'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>{ t('home.title') }</h1>
      </Fragment>
    )
  }
}

export default Home
