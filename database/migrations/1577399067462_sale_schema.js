'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SaleSchema extends Schema {
  up () {
    this.create('sales', (table) => {
      table.increments()
      table.integer('numero_ticket').comment("numero generado por dia");
      table.dateTime('fecha');
      table.text('concepto').nullable();
      table.string('nit', 20).nullable();
      table.string('razon_social', 100).nullable();
      table.boolean('estado');

      table.integer('user_id').unsigned()
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.integer('client_id').unsigned()      
      table.foreign('client_id').references('id').inTable('clients').onDelete('CASCADE')     
      table.timestamps()
    })
  }

  down () {
    this.drop('sales')
  }
}

module.exports = SaleSchema
