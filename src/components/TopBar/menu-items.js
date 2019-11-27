import { t } from 'ab18n'

const menuItems = () => ([
  {
    key: 1,
    icon: 'pushpin',
    text: t('menu.exampleOne'),
    router: '/',
  },
  {
    key: 2,
    icon: 'pushpin',
    text: t('menu.exampleTwo'),
    router: '/',
  },
  {
    key: 3,
    icon: 'pushpin',
    text: t('menu.exampleThree'),
    router: '/',
  },
  {
    key: 4,
    icon: 'pushpin',
    text: t('menu.exampleFour'),
    children: [
      {
        key: 4.1,
        text: t('menu.exampleChildren'),
        router: '/',
      },
    ],
  },
])

export default menuItems
