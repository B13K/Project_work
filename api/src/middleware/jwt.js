const { auth } = require("express-oauth2-jwt-bearer")

const jwtCheck = auth({
    audience: 'B13k es lo unico que se me ocurrio',
    issuerBaseURL: 'https://dev-l5xbspgssl2tac4r.us.auth0.com/',
    tokenSigningAlg: 'RS256'
})

module.exports = jwtCheck