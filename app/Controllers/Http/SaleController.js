'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with sales
 */
const Sale = use('App/Models/Sale')

class SaleController {
  async index ({ request, response }) {
    return await Sale.all();
  }

  async store ({ request, response }) {
    const input = request.all()
    const sale = await Sale.create(input)
    return {
      res: true,
      sale: sale,
      message: "Creado correctamente"
    }
  }

  async show ({ params, request, response }) {
    return await Sale.findOrFail(params.id)
  }

  async update ({ params, request, response }) {
    const input = request.all()
    const sale = await Sale.query().where('id', params.id).update(input)
    if(sale){
      return {
        res: true,
        sale: await Sale.findOrFail(params.id),
        message: "Modificado correctamente"
      }
    }
    else{
      return {
        res: false,
        message: "Ha ocurrido un error"
      }
    }
  }

  async destroy ({ params, request, response }) {
    let sale = await Sale.findOrFail(params.id)
    await sale.delete()
    return {
      res: true,
      message: "Eliminado correctamente"
    }
  }

}

module.exports = SaleController
