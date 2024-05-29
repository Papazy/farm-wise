import Barang from '#models/barang'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Barang.createMany([
      {
        nama: 'Tomat',
        deskripsi: 'Tomat segar dari kebun sendiri',
        path_gambar: 'tomat.png',
        harga: 15000,
        satuan: 'kg',
        kategori: 'sayuran',
        key: 'tomat',
      },
      {
        nama: 'Brokoli',
        deskripsi: 'Brokoli adalah sayuran yang kaya akan nutrisi',
        path_gambar: 'brokoli.png',
        harga: 3000,
        satuan: 'gram',
        kategori: 'sayuran',
        key: 'brokoli',
      },
      {
        nama: 'Bawang Merah',
        deskripsi: 'Bawang merah yang segar dan berkualitas',
        path_gambar: 'bawang.png',
        harga: 21000,
        satuan: 'kg',
        key: 'bawang-merah',
        kategori: 'sayuran',
      },
      {
        nama: 'Pisang',
        deskripsi: 'Pisang segar dari kebun sendiri',
        path_gambar: 'pisang.png',
        harga: 12000,
        satuan: 'kg',
        key: 'pisang',
        kategori: 'buah',
      },
      {
        nama: 'Jeruk',
        deskripsi: 'Jeruk segar dari kebun sendiri',
        path_gambar: 'jeruk.png',
        harga: 25000,
        satuan: 'kg',
        key: 'jeruk',
        kategori: 'buah',
      },
      {
        nama: 'Apel',
        deskripsi: 'Apel segar dari kebun sendiri',
        path_gambar: 'apel.png',
        harga: 20000,
        satuan: 'kg',
        key: 'apel',
        kategori: 'buah',
      },
      // alat bertani
      {
        nama: 'Humus De Lombriez',
        deskripsi: 'Humus yang kaya akan nutrisi',
        path_gambar: 'humus.png',
        harga: 50000,
        satuan: 'sak',
        key: 'humus',
        kategori: 'alat-bertani',
      },
      {
        nama: 'Urea',
        deskripsi: 'Pupuk yang kaya akan nitrogen',
        path_gambar: 'urea.png',
        harga: 40000,
        satuan: 'sak',
        key: 'urea',
        kategori: 'alat-bertani',
      },
      {
        nama: 'Phonska',
        deskripsi: 'Pupuk yang kaya akan fosfor',
        path_gambar: 'phonskaalam.png',
        harga: 30000,
        satuan: 'sak',
        key: 'phonskaalam',
        kategori: 'alat-bertani',
      },
    ])
  }
}
