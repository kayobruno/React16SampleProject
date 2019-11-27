import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { t } from 'ab18n'

import { actions } from './actions'
import menuItems from './menu-items'

const { SubMenu } = Menu

const mapStateToProps = ({ sideBar, auth }) => ({ sideBar, auth })
const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions,
}, dispatch)

const MenuList = ({
  setSideBarProps,
  sideBar: {
    current,
    collapsed,
  },
  auth,
}) => (
  <Menu theme="light" mode="inline" selectedKeys={[`${current}`]}>
    <Menu.Item
      className="nav-collapse"
      onClick={() => setSideBarProps(current, !collapsed)}
    >
      <Icon type={`menu-${collapsed ? 'unfold' : 'fold'}`} />
      <span>{ t(`menu.${collapsed ? 'expand' : 'collapse'}`) }</span>
    </Menu.Item>
    {
      menuItems(auth).map(menu => (
        menu.children
          ? (
            <SubMenu
              key={menu.key}
              title={(
                <span>
                  {
                    typeof menu.icon === 'string'
                      ? <Icon type={menu.icon} />
                      : <Icon component={() => <menu.icon />} />
                  }
                  <span>{ menu.text }</span>
                </span>
              )}
            >
              {
                menu.children.map(submenu => (
                  <Menu.Item
                    key={submenu.key}
                    onClick={() => setSideBarProps(
                      submenu.key,
                      (window.innerWidth <= 767) ? !collapsed : collapsed
                    )}
                  >
                    <Link to={submenu.router}>
                      <span>{ submenu.text }</span>
                    </Link>
                  </Menu.Item>
                ))
              }
            </SubMenu>
          )
          : (
            <Menu.Item
              key={menu.key}
              onClick={() => setSideBarProps(
                menu.key,
                (window.innerWidth <= 767) ? !collapsed : collapsed
              )}
            >
              <Link to={menu.router}>
                {
                  typeof menu.icon === 'string'
                    ? <Icon type={menu.icon} />
                    : <Icon component={() => <menu.icon />} />
                }
                <span>{ menu.text }</span>
              </Link>
            </Menu.Item>
          )
      ))
    }
  </Menu>
)

export default connect(mapStateToProps, mapDispatchToProps)(MenuList)
