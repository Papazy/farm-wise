import type { HttpContext } from '@adonisjs/core/http'
import Event from '#models/event'

export default class EventsController {
  async index({ view, auth }: HttpContext) {
    const events = await Event.findManyBy('username', auth.user?.username)
    console.log(events)
    return view.render('pages/schedule', { events })
  }

  async create({ request, response, auth }: HttpContext) {
    const { judul,  jam_mulai, jam_akhir, tanggal } = request.all()

    await Event.create({ judul, jam_akhir, jam_mulai, tanggal, username: auth.user?.username })

    return response.redirect('/schedule')
  }
}