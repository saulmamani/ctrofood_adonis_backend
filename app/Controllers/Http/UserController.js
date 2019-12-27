'use strict'
const User = use('App/Models/User')

class UserController {

  async autenticar({request, auth}){
    const {email, password} = request.all()
    const token = await auth.attempt(email, password);
    return {
      token: token,
      user: await User.query().where('email', email).first()
    };
  }

  async index ({ request, response }) {
    return await User.all();
  }

  async store ({ request, response }) {
    const input = request.all()
    const user = await User.create(input)
    return {
      res: true,
      user: user,
      message: "Creado correctamente"
    }
  }

  async show ({ params, request, response, auth }) {
    if (auth.user.id !== Number(params.id)) {
      return "Este no es tu perfil, no puedes verlo"
    }
    return auth.user
  }

  async update ({ params, request, response }) {
    const input = request.all()
    const user = await User.query().where('id', params.id).update(input)
    if(user){
      return {
        res: true,
        user: await User.findOrFail(params.id),
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
    let user = await User.findOrFail(params.id)
    await user.delete()
    return {
      res: true,
      message: "Eliminado correctamente"
    }
  }

}

module.exports = UserController
