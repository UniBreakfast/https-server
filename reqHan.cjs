const dev = require('./index.cjs')
if (dev) require = require('up2require')(require)

const handleMiss = require('./missHan.cjs', dev)


module.exports = handleRequest

"exporting handleRequest function".c()

async function handleRequest(request, response) {
  'handling request, am I not?'.c()
  return handleMiss(request, response)
}
