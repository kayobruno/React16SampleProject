import React from 'react'
import { t } from 'ab18n'
import { Empty } from 'antd'

import NotFoundSvg from 'assets/images/notFoundSvg.svg'

const NotFound = () => (
  <Empty
    image={NotFoundSvg}
    description={t('general.notification.pageNotFound')}
  />
)

export default NotFound
