const dev = require('./index.cjs')
if (dev) require = require('up2require')(require)

const handleMiss = require('./missHan.cjs', dev)


module.exports = handleRequest


async function handleRequest(request, response) {
  'handling request'.c()
  return handleMiss(request, response)
}
