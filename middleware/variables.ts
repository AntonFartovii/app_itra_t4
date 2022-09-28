export function authMiddleware(req, res, next) {
    let cookieToken = {}
    res.setHeader('Authorization', `Bearer ${cookieToken['AuthToken']}`);
    res.locals.isAuth = req.cookies['AuthToken'] ? true : false;
    next()
  }