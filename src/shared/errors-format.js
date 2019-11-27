import React from 'react'
import { notification, Icon } from 'antd'
import { t } from 'ab18n'

import history from 'shared/history'

const setNotification = (message, duration, onClose) => (
  notification.error({
    message,
    duration,
    onClose: () => {
      if (onClose) {
        history.push(onClose)
      }
    }
  })
)

const setForbiddenNotification = () => {
  const btn = (
    <Icon
      onClick={() => {
        notification.close('forbidden')
        history.push('/store/kits')
      }
      }
      type="close"
    />
  )

  notification.error({
    key: 'forbidden',
    message: t('general.notification.forbidden'),
    duration: null,
    className: 'forbidden-notification',
    icon: <Icon type="warning" />,
    btn,
  })
}

export default function errorsFormat(
  error,
  message,
  duration = null,
  onClose = null,
) {
  if (error.response && error.response.status !== 401) {
    if (error.response.status >= 500) {
      setNotification(message, duration, onClose)
    } else if (error.response.status === 404) {
      setNotification(t('general.notification.error'), duration, onClose)
    } else if (error.response.status === 403) {
      setForbiddenNotification()
    } else {
      const { response: { data: { errors } } } = error
      let customErrors = []

      if (Array.isArray(errors)) {
        customErrors = errors
      } else {
        customErrors = Object.values(errors)
      }

      setNotification(
        error.response.data.errors !== undefined
          ? customErrors.map(item => (
            <div className="custom-error">{ item }</div>
          ))
          : message,
        duration,
        onClose,
      )
    }
  }
}
