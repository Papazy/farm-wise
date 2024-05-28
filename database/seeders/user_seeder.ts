import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        username: 'john_doe',
        email: 'john@gmail.com',
        role: 'petani',
        password: 'password',
      },
      {
        username: 'jane_doe',
        email: 'jane@gmail.com',
        role: 'user',
        password: 'password',
      },
    ])
  }
}
