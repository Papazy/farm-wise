import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {
  async login({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }

  async signup({ view }: HttpContext) {
    return view.render('pages/auth/signup')
  }
  async signin({ request, response, auth, session }: HttpContext) {
    const { email, password } = request.all()

    // const user = await User.query().where('email', email).where('password', password).first()

    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)

    return response.redirect('/')
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()

    return response.redirect('/login')
  }

  async create({ request, auth, response }: HttpContext) {
    const { username, email, password, role } = request.all()

    const user = await User.create({ username, email, password, role })

    await auth.use('web').login(user)

    return response.redirect('/')
  }
}
