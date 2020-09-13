const dotEnv = require('dotenv')
const dotEnvFound = dotEnv.config();

if(!dotEnvFound) throw new Error("Could not find dotEnv file")

module.exports = {
    port: process.env.PORT,
    localdatabaseURI :process.env.localDATABASE_URI,
    atlasdatabaseURI :process.env.atlasDATABASE_URI,
    publicKey: process.env.public_key,
    JwtStrategy: process.env.jwtSecret, 
}