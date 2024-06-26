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
    const { email, password, role } = request.all()

    // const user = await User.query().where('email', email).where('password', password).first()
    try {
      const user = await User.verifyCredentials(email, password)

      if (user?.role !== role) {
        session.flash('error', 'Role tidak sesuai')
        return response.redirect('/login')
      }
      await auth.use('web').login(user)

      return response.redirect('/')
    } catch (error) {
      session.flash('error', 'Email atau password atau role salah')
      return response.redirect('/login')
    }
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()

    return response.redirect('/login')
  }

  async create({ request, auth, response, session }: HttpContext) {
    const { username, email, password, role } = request.all()
    try {
      // periksa apakah ada user dengan email yang sama
      const userEmail = await User.query().where('email', email).first()
      if (userEmail) {
        session.flash('error', 'Email sudah terdaftar')
        return response.redirect('/signup')
      }
      const user = await User.create({ username, email, password, role })
      await auth.use('web').login(user)
      return response.redirect('/')
    } catch (error) {
      console.log(error.errno)
      if (error.code == 'ER_DUP_ENTRY') {
        session.flash('error', 'User sudah ada')
      }else{
        session.flash('error', 'Masukkan email atau password dengan benar')
      }
      return response.redirect('/signup')
    }
  }
}
