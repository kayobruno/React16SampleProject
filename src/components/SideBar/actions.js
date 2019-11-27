import { typeActions } from 'state/util'

const { actions, types } = typeActions('sideBar', {
  setSideBarProps: (key, collapsed = false) => ({
    meta: {
      current: key,
      collapsed,
    },
  }),
})

export {
  actions,
  types,
}
