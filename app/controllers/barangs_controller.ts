import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import Barang from '#models/barang'

export default class BarangsController {
  async index({ view, request }: HttpContext) {
    const type = request.input('c')

    const barangs = await Barang.all()

    //mendapatkan barang sesuai type bila ada type
    const typeIndo = this.translate(type)
    const barangData = typeIndo ? barangs.filter((item) => item.kategori === typeIndo) : barangs

    const categories = await db.from('barangs').select('kategori').distinct('kategori')
    categories.map((item) => {
      switch (item.kategori) {
        case 'sayuran':
          item.kategori = 'Vegetables'
          item.path = 'vegetables'
          item.isActive = type == 'vegetables' ? true : false
          break
        case 'buah':
          item.kategori = 'Fruits'
          item.path = 'fruits'
          item.isActive = type == 'fruits' ? true : false
          break
        case 'alat-bertani':
          item.kategori = 'Farming Tools'
          item.path = 'farming-tools'
          item.isActive = type == 'farming-tools' ? true : false
          break
      }
    })

    categories.push({
      kategori: 'Popular',
      path: '',
      isActive: type ? false : true,
    })
    console.log(categories)
    console.log(barangData)
    return view.render('pages/shop/shop', { barangs: barangData, categories })
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
    const name = params.name

    const barang = await Barang.query().where('key', name).first()

    return view.render('pages/shop/details', { barang })
  }

  async pay({ view, request, response, session }: HttpContext) {
    const { id, total } = request.all()
    console.log(id)
    console.log(total)
    if (total == 0) {
      session.flash('error', {
        message: 'Total tidak boleh 0',
      })
      response.redirect().back()
    }
    const barang = await Barang.find(id)

    return view.render('pages/shop/pay', { barang, total })
  }

  async card({ view, request }: HttpContext) {
    const item = request.input('item')
    const total = request.input('total')

    return view.render('pages/shop/card', { total, item })
  }

  async status({ view, request }: HttpContext) {
    const keyName = request.input('item')
    const total = request.input('total')

    const barang = await Barang.query().where('key', keyName).first()

    // generatelah satu key private yang unik terdiri dari 5 karakter abjad atau lebih
    const key = Math.random().toString(36).substring(2, 7)

    return view.render('pages/shop/status', {barang, total, key})
  }

  async update({ request, response }: HttpContext) {
    const body = request.all()
    console.log(body)
    response.redirect().toRoute('barangs.index')
  }

  async destroy({ response }: HttpContext) {
    response.redirect().toRoute('barangs.index')
  }

  translate = (type: string) => {
    switch (type) {
      case 'vegetables':
        return 'sayuran'
      case 'fruits':
        return 'buah'
      case 'farming-tools':
        return 'alat-bertani'
    }
  }
}
