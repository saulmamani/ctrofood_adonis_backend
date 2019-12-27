'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sale extends Model {
    user(){ return this.hasOne('App/Models/User')}
    client(){ return this.hasOne('App/Models/Client')}
    details(){ return this.hasMany('App/Models/Detail')}
}

module.exports = Sale
