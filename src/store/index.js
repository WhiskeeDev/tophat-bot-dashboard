import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { Database, install as dbInstall } from '@vuex-orm/core'

import authentication from './modules/authentication.js'
import ui from './modules/ui.js'

import User from './models/user.js'
import users from './modules/users.js'

Vue.use(Vuex)

const database = new Database()
database.register(User, users)

const store = new Vuex.Store({
  modules: {
    authentication, ui
  },
  plugins: [
    dbInstall(database),
    createPersistedState({
      paths: [
        'authentication', 'ui', 'entities.users.data'
      ]
    })
  ]
})

export default store
