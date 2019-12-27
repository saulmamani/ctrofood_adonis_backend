'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class UserSeeder {
  static async run () {
    await Database.table('users').insert([
      {
        username: 'saul mamani',
        email: 'luas0_1@yahoo.es',
        password: '123456',
        rol: 'Administrador'
      }
    ])
  }
}

module.exports = UserSeeder
