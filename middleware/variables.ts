export function authMiddleware(req, res, next) {
    let cookieToken = {}

    req.headers.cookie.split(' ').forEach( item => {
      cookieToken = item.split('=')[0] === 'AuthToken'
        ? {AuthToken: item.split('=')[1]} : {}
    })

    res.setHeader('Authorization', `Bearer ${cookieToken['AuthToken']}`)
    res.locals.isAuth = cookieToken['AuthToken'] ? true : false

    next()
  }