import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Barang extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nama: string

  @column()
  declare deskripsi: string

  @column()
  declare path_gambar: string

  @column()
  declare harga: number

  @column()
  declare satuan: string

  @column()
  declare kategori: string

  @column()
  declare key: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
