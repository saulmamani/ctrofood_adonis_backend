'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with clients
 */
const Client = use('App/Models/Client')

class ClientController {
  async index ({ request, response }) {
    return await Client.all();
  }

  async store ({ request, response }) {
    const input = request.all()
    const client = await Client.create(input)
    return {
      res: true,
      client: client,
      message: "Creado correctamente"
    }
  }

  async show ({ params, request, response }) {
    return await Client.findOrFail(params.id)
  }

  async update ({ params, request, response }) {
    const input = request.all()
    const client = await Client.query().where('id', params.id).update(input)
    if(client){
      return {
        res: true,
        client: await Client.findOrFail(params.id),
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
    let client = await Client.findOrFail(params.id)
    await client.delete()
    return {
      res: true,
      message: "Eliminado correctamente"
    }
  }

}

module.exports = ClientController
