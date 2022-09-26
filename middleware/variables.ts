

export function varMiddleware(req, res, next):void {
  res.locals.isAuth = req.session.isAuthenticated
  next()
}