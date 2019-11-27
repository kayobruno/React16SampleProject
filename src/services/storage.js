import localForage from 'localforage'

const isDev = process.env.NODE_ENV === 'development'

localForage.config({
  driver: isDev ? localForage.LOCALSTORAGE : localForage.INDEXEDDB,
  name: 'sampleProject',
})

export default {
  fetch: localForage.getItem,
  save: localForage.setItem,
  remove: localForage.removeItem,
}
