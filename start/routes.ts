/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const HomeController = () => import('#controllers/home_controller')
const AuthController = () => import('#controllers/auth_controller')
const BarangsController = () => import('#controllers/barangs_controller')
// router.on('/').render('pages/home')
// router.on('/login').render('pages/auth/login')
// router.on('/signup').render('pages/auth/signup')
// router.on('/shop').render('pages/shop/shop')

router.get('/', [HomeController, 'index'])
router.get('/login', [AuthController, 'login'])
router.get('/signup', [AuthController, 'signup'])
router.get('/shop/category/:name?', [BarangsController, 'index'])
router.get('/shop', [BarangsController, 'index'])

router.get('/shop/items/:name', [BarangsController, 'show'])
router.get('/shop/pay', [BarangsController, 'pay'])

router.get('/schedule', [HomeController, 'schedule'])
router.get('/shop/pay/card', [BarangsController, 'card'])
router.get('/shop/status', [BarangsController, 'status'])

router.post('/user/create', [AuthController, 'create'])
