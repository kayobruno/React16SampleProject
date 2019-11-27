import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import {
  TopBar,
  SideBar,
  Container,
} from 'components'
import asyncPage from './AsyncPage'
import './BaseLayout.sass'

const Home = asyncPage(() => import('./Home/Home'))
const NotFound = asyncPage(() => import('./NotFound/NotFound'))

class BaseLayout extends Component {
  render() {
    return (
      <Fragment>
        <TopBar />
        <Layout className="base-layout">
          <SideBar />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Container>
        </Layout>
      </Fragment>
    )
  }
}

export default (BaseLayout)
