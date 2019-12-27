'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ProductSeeder {
  static async run () {
    await Database.table('products').insert([
      {
        categoria: 'Comida',
        nombre: 'Pollo a la brasa',
        precio: 19.50,
        fotografia: null
      },
      {
        categoria: 'Bebida',
        nombre: 'Inca Kola',
        precio: 9,
        fotografia: null            
      },
    ])
  }
}

module.exports = ProductSeeder
