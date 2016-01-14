// Vue
import Vue from 'vue'

// Components
import App from './components/App.vue'
import Home from './components/Home.vue'
import SecretQuote from './components/SecretQuote.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'
import Lessons from './components/Lessons.vue'

// Plugins
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

// Modules
import auth from './auth'

Vue.config.debug = true;

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

// Check the user's auth status when the app starts
auth.checkAuth()

export var router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/secretquote': {
    component: SecretQuote
  },
  '/login': {
    component: Login
  },
  '/signup': {
    component: Signup
  },
  '/profile': {
    component: Profile
  },
  '/lessons': {
    component: Lessons
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
