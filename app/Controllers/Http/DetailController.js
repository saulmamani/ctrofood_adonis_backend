'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with details
 */
const Detail = use('App/Models/Detail')

class DetailController {
  async index ({ request, response }) {
    return await Detail.all();
  }

  async store ({ request, response }) {
    const input = request.all()
    const detail = await Detail.create(input)
    return {
      res: true,
      detail: detail,
      message: "Creado correctamente"
    }
  }

  async show ({ params, request, response }) {
    return await Detail.findOrFail(params.id)
  }

  async update ({ params, request, response }) {
    const input = request.all()
    const detail = await Detail.query().where('id', params.id).update(input)
    if(detail){
      return {
        res: true,
        detail: await Detail.findOrFail(params.id),
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
    let detail = await Detail.findOrFail(params.id)
    await detail.delete()
    return {
      res: true,
      message: "Eliminado correctamente"
    }
  }

}

module.exports = DetailController
