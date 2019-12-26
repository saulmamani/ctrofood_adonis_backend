'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetailSchema extends Schema {
  up () {
    this.create('details', (table) => {
      table.increments()
      table.decimal('precio', 10, 2);
      table.integer('cantidad');

      table.integer('sale_id').unsigned()
      table.foreign('sale_id').references('id').inTable('sales').onDelete('cascade')
      table.integer('product_id').unsigned()
      table.foreign('product_id').references('id').inTable('products').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('details')
  }
}

module.exports = DetailSchema
