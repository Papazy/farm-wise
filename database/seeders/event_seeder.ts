import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Event from '#models/event'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Event.createMany([
      {
        judul: 'Pertemuan 1',
        jamMulai: '08:00',
        jamAkhir: '10:00',
        tanggal: '2021-09-01',
        username: 'john_doe',
      },
      {
        judul: 'Pertemuan 2',
        jamMulai: '08:00',
        jamAkhir: '10:00',
        tanggal: '2021-09-02 ',
        username: 'john_doe',
      }
    ])
  }
}