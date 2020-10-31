require('c4console')

const dev = module.exports = !process.env.PORT
const port = dev ? 3000 : process.env.PORT
if (dev) require = require('up2require')(require)

const http = require('http')


const handleRequest = require('./reqHan.cjs', dev)

const server = http.createServer(handleRequest)


server.listen(port, reportStart)


function reportStart() {
  if (dev) c(`HTTP Server started at http://localhost:${port}`)
  else c('===== server started =====')
}
