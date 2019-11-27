import React, { Fragment } from 'react'
import { t } from 'ab18n'
import { Icon, Menu } from 'antd'

const NavBar = ({ auth, logout }) => (
  <div className="nav-bar nav-bar-end">
    <Menu mode="horizontal">
      <Menu.SubMenu
        title={(
          <Fragment>
            <span className="user-name">
              <span className="hidden-xs">
                { auth.data && auth.data.username }
              </span>
            </span>
            <Icon type="user" />
          </Fragment>
        )}
      >
        <Menu.Item onClick={logout}>
          <Icon type="close-circle" theme="filled" /> { t('auth.logout') }
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </div>
)

export default NavBar
