/**
 *
 * @param req
 * @param res
 * @param next
 */
export function flashMiddleware (req, res, next) {
  res.locals.flash = req.cookies.flash || null
  if (req.cookies.flash) res.clearCookie('flash')
  next()
}
