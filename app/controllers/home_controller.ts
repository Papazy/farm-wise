import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async index({ view }: HttpContext) {
    return view.render('pages/home')
  }

  async schedule({ view }: HttpContext) {
    return view.render('pages/schedule')
  }

  async about({ view }: HttpContext) {
    return view.render('pages/about')
  }

  async addEvent({ view }: HttpContext) {
    return view.render('pages/add-event')
  }

  async profile({ view }: HttpContext) {
    return view.render('pages/profile')
  }
}
