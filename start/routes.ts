/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const HomeController = () => import('#controllers/home_controller')
const AuthController = () => import('#controllers/auth_controller')
const BarangsController = () => import('#controllers/barangs_controller')
const EventController = () => import('#controllers/events_controller')
// router.on('/').render('pages/home')
// router.on('/login').render('pages/auth/login')
// router.on('/signup').render('pages/auth/signup')
// router.on('/shop').render('pages/shop/shop')

router
  .group(() => {
    router.get('/shop/category/:name?', [BarangsController, 'index'])
    router.get('/shop', [BarangsController, 'index'])

    router.get('/shop/items/:name', [BarangsController, 'show'])

    router.post('/signup', [AuthController, 'create'])
    router.post('/login', [AuthController, 'signin'])
    router.get('/', [HomeController, 'index'])
    
    router.post('/logout', [AuthController, 'logout'])
    
    router
    .group(() => {
      router.get('/shop/pay/card', [BarangsController, 'card'])
      router.get('/shop/status', [BarangsController, 'status'])
      router.get('/shop/pay', [BarangsController, 'pay'])
      router.get('/schedule', [EventController, 'index'])
      router.get('/profile', [HomeController, 'profile'])
      router.get('/schedule/add-event', [HomeController, 'addEvent'])
      router.post('/addEvent', [EventController, 'create'])
      })
      .use([middleware.authenticate()])

    router
      .group(() => {
        router.get('/login', [AuthController, 'login'])
        router.get('/signup', [AuthController, 'signup'])
      })
      .use([middleware.redirectIfAuthenticated()])
  })
  .use(middleware.checkAuth())
