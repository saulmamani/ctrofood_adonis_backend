'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
const Product = use('App/Models/Product')

class ProductController {

  async index ({ request, response }) {
    return await Product.all();
  }

  async store ({ request, response }) {
    const input = request.all()
    const product = await Product.create(input)
    return {
      res: true,
      product: product,
      message: "Creado correctamente"
    }
  }

  async show ({ params, request, response }) {
    return await Product.findOrFail(params.id)
  }

  async update ({ params, request, response }) {
    const input = request.all()
    const product = await Product.query().where('id', params.id).update(input)
    if(product){
      return {
        res: true,
        product: await Product.findOrFail(params.id),
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
    let product = await Product.findOrFail(params.id)
    await product.delete()
    return {
      res: true,
      message: "Eliminado correctamente"
    }
  }
  
}

module.exports = ProductController
