require('c4console')

const dev = module.exports = !process.env.PORT
const port = dev ? 3000 : process.env.PORT
if (dev) require = require('up2require')(require)

const fs = require('fs')
const https = require('https')

const options = {
  key:  fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};

const handleRequest = require('./reqHan.cjs', 0, dev)

const server = https.createServer(options, handleRequest)


server.listen(port, reportStart)


function reportStart() {
  if (dev) c(`HTTPS Server started at https://localhost:${port}`)
  else c('===== server started =====')
}
