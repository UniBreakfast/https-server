module.exports = handleMiss


async function handleMiss(request, response) {
  const {method, url} = request
  const html = buildHTML(method, url)

  response.writeHead(404, {"content-type": "text/html"}).end(html)
}


function buildHTML(method, url) {
  return /* html */ `
    <style>${style}</style>
    <body>
      <h1 class="xxl">404</h1>
      <h4>${method.toUpperCase()}: ${url}</h4>
      <h2 class="xl">page not found</h2>
    </body>
  `
}

const style = /* css */ `
  body {
    font: large Trebuchet MS, Helvetica, sans-serif;
  }
  .xxl {
    /* font-size:  */
  }

`
