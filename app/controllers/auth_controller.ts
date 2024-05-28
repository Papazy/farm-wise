import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async login({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }

  async signup({ view }: HttpContext) {
    return view.render('pages/auth/signup')
  }

  async create({ request, response }: HttpContext) {
    const body = request.all()
    console.log(body)
    return body
  }
}
