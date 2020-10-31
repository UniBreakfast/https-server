require('c4console')

const dev = module.exports = !process.env.PORT
const port = dev ? 3000 : process.env.PORT
if (dev) require = require('up2require')(require)

const fs = require('fs')
const https = require('https')

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const handleRequest = require('./reqHan.cjs', dev)

const server = https.createServer(options, handleRequest)


server.listen(port, reportStart)


function reportStart() {
  if (dev) `HTTPS Server started at https://localhost:${port}`.c()
  else '===== server started ====='.c()
}
