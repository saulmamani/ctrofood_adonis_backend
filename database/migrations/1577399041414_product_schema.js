'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.enu('categoria', ['Comida', 'Bebida'])
      table.string('nombre')
      table.decimal('precio', 10, 2)
      table.string('fotografia', 100).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
