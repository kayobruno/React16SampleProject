import React from 'react'
import { Icon, Menu, Dropdown } from 'antd'
import { Link } from 'react-router-dom'

import menuItems from './menu-items'

const { SubMenu } = Menu

const NavMenu = (mode = 'horizontal') => (
  <Menu mode={mode}>
    {
      menuItems().map(menu => (
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

const TopMenu = () => (
  <div className="nav-bar">
    <div className="nav-mobile">
      <Dropdown trigger={['click']} overlay={NavMenu('vertical')}>
        <Icon type="menu" />
      </Dropdown>
    </div>
    <div className="top-menu">
      { NavMenu() }
    </div>
  </div>
)

export default TopMenu
