import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class RedirectIfAuthenticatedMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    console.log(ctx)
    try {
      await ctx.auth.check()
      if (ctx.auth.user) {
        return ctx.response.redirect('/')
      }
    } catch (error) {
      console.log(error)
    }
    const output = await next()
    return output

    /**
     * Call next method in the pipeline and return its output
     */
  }
}
