'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    Details(){ return this.hasMany('App/Models/Detail')}
}

module.exports = Product
