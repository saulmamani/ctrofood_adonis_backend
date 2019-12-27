'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Detail extends Model {
    
    sale(){ return this.hasOne('App/Models/Sale')}
    product(){ return this.hasOne('App/Models/Product')}
}

module.exports = Detail
