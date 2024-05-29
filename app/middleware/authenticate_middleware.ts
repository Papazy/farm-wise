import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class AuthenticateMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    console.log(ctx)
    try{
      await ctx.auth.check()
    }catch(error){
      console.log(error)
      return ctx.response.redirect('/login')
    }
    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}