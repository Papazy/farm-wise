import type { HttpContext } from '@adonisjs/core/http'

export default class BarangsController {
  async index({ view }: HttpContext) {
    return view.render('pages/shop/shop')
  }

  async create({ view }: HttpContext) {
    return view.render('pages/barang/create')
  }

  async store({ request, response }: HttpContext) {
    const body = request.all()
    console.log(body)
    response.redirect().toRoute('barangs.index')
  }

  async show({ view, params }: HttpContext) {
    const barang = params.name
    return view.render('pages/shop/details', {
      name: barang,
      harga: 10000,
      stok: 10,
      description: `Ini adalah barang ${barang} yang sangat bagus dan berkualitas. Segera dapatkan barang ${barang} ini sebelum kehabisan! Harga hanya Rp. 10.000,- saja!`,
    })
  }

  async pay({ view }: HttpContext) {
    return view.render('pages/shop/pay')
  }

  async card({ view }: HttpContext) {
    return view.render('pages/shop/card')
  }

  async status({ view }: HttpContext) {
    return view.render('pages/shop/status')
  }

  async update({ request, response }: HttpContext) {
    const body = request.all()
    console.log(body)
    response.redirect().toRoute('barangs.index')
  }

  async destroy({ response }: HttpContext) {
    response.redirect().toRoute('barangs.index')
  }
}
