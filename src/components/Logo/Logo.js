import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { t } from 'ab18n'

import logo from 'assets/images/logo.png'
import { actions } from '../SideBar/actions'
import './Logo.sass'

const mapStateToProps = ({ sideBar }) => ({ collapsed: sideBar.collapsed })
const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions,
}, dispatch)

const Logo = ({
  abbreviation,
  icon,
  collapsed,
  setSideBarProps,
}) => (
  <Link to="/" onClick={() => setSideBarProps(null, collapsed)}>
    <div className="logo">
      <img src={logo} alt={t('general.logo')} />
      {
        !icon
        && (
          <h3>
            {
              abbreviation
                ? t('general.abbreviationLogo')
                : t('general.logo')
            }
          </h3>
        )
      }
    </div>
  </Link>
)

export default connect(mapStateToProps, mapDispatchToProps)(Logo)
