import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Layout } from 'antd'

import { actions } from 'pages/auth/actions'
import NavBar from './Navbar'
import TopMenu from './TopMenu'
import Logo from '../Logo/Logo'
import './TopBar.sass'

const { Header } = Layout

const mapStateToProps = ({ auth }) => ({ auth })
const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions,
}, dispatch)

const TopBar = ({
  auth,
  logout,
}) => (
  <Header className="top-bar">
    <div className="top-bar-wrap">
      <div className="top-bar-logo">
        <Logo icon />
      </div>
      <TopMenu />
      <NavBar auth={auth} logout={logout} />
    </div>
  </Header>
)

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
