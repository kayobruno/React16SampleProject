import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Layout, Button } from 'antd'

import { actions } from 'components/SideBar/actions'
import history from 'shared/history'
import menuItems from './menu-items'
import MenuList from './MenuList'
import './SideBar.sass'

const { Sider } = Layout

const menuKey = location => {
  if (location.pathname === '/') return 0

  const menus = menuItems().flatMap(menu => {
    if (menu.children) {
      return menu.children.flatMap(children => ({
        key: children.key,
        router: children.router,
      }))
    }
    return {
      key: menu.key,
      router: menu.router,
    }
  })

  const menuList = menus.find(menu => menu.router === location.pathname)
  return menuList ? menuList.key : 0
}

const mapStateToProps = ({ sideBar }) => ({ collapsed: sideBar.collapsed })
const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions,
}, dispatch)

class SideBar extends Component {
  componentDidMount() {
    this.handleCollapsed()
    window.addEventListener('resize', this.handleCollapsed)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleCollapsed)
  }

  handleCollapsed = () => {
    const { setSideBarProps } = this.props
    const { location } = history
    setSideBarProps(menuKey(location), (window.innerWidth <= 767))
  }

  render() {
    const { collapsed, setSideBarProps } = this.props
    const { location } = history

    return (
      <Sider
        collapsible
        breakpoint="lg"
        collapsedWidth={(window.innerWidth <= 767) ? '0' : '80'}
        className="side-bar"
        trigger={null}
        width={220}
        collapsed={collapsed}
      >
        <MenuList />
        <div className="nav-mobile">
          <Button
            onClick={() => (
              setSideBarProps(menuKey(location), !collapsed)
            )}
            shape="circle"
            size="large"
            icon={`menu-${collapsed ? 'unfold' : 'fold'}`}
          />
        </div>
      </Sider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
