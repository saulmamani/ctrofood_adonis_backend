'use strict'

/*
|--------------------------------------------------------------------------
| ClientSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ClientSeeder {
  static async run () {
    await Database.table('clients').insert([
      {
        nit: '123456',
        razon_social: 'Saul Mamani',
      },
      {
        nit: '123457',
        razon_social: 'Jose Jordan',
      },
    ])
  }
}

module.exports = ClientSeeder
