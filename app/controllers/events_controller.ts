import type { HttpContext } from '@adonisjs/core/http'
import Event from '#models/event'

export default class EventsController {
  async index({ view, auth, request, response }: HttpContext) {
    // console.log(events)
    // dapatkan tanggal hari ini
    let today = new Date()

    if (request.input('d')) {
      today = new Date(request.input('d'))
    } else {
      today = new Date()
      today.setHours(today.getHours() + 7)
      return response.redirect().toPath(`/schedule?d=${today.toISOString().split('T')[0]}`)
    }
    const events = await Event.query()
      .where('username', auth.user?.username)
      .andWhere('tanggal', today.toISOString().split('T')[0])
      .exec()
    const kegiatan = events.map((event) => event.judul.split(', '))

    const dayOfWeek = today.getDay() // 0 (Sunday) to 6 (Saturday)
    const currentDate = today.getDate()

    // Calculate the dates for Monday to Sunday
    const weekDates = []

    for (let i = 1; i <= 7; i++) {
      const firstDayOfWeek = currentDate - dayOfWeek + (i - 1)
      const date = new Date(today)
      date.setDate(firstDayOfWeek)
      weekDates.push(date)
    }

    // week before
    const dayWeekBefore = new Date(weekDates[0])
    dayWeekBefore.setDate(dayWeekBefore.getDate() - 1)
    const dayWeekAfter = new Date(weekDates[6])
    dayWeekAfter.setDate(dayWeekAfter.getDate() + 1)

    const formatDate = (date) => date.toISOString().split('T')[0];


    const selectedDate = today.getDate()
    console.log(selectedDate)

    return view.render('pages/schedule', {
      events,
      kegiatan,
      weekDates,
      selectedDate,
      dayWeekBefore : formatDate(dayWeekBefore),
      dayWeekAfter : formatDate(dayWeekAfter),
    })
  }

  async create({ request, response, auth }: HttpContext) {
    const { judul, jam_mulai, jam_akhir, tanggal } = request.all()
    const kegiatan = judul.join(', ')
    await Event.create({
      judul: kegiatan,
      jam_akhir,
      jam_mulai,
      tanggal,
      username: auth.user?.username,
    })

    return response.redirect('/schedule')
  }
}
