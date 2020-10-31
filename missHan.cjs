module.exports = handleMiss


async function handleMiss(request, response) {
  const {method, url} = request
  const html = buildHTML(method, url)

  "sending response".c()
  response.writeHead(404, {"content-type": "text/html"}).end(html)
}


function buildHTML(method, url) {
  return /* html */ `
    <style>${style}    </style>

    <body>
      <div class="wrapper">
        <h1 class="code404">404</h1>
        <h4 class="issue">${method.toUpperCase()}: &nbsp ${url}</h4>
        <h2 class="problem">page not found</h2>
      </div>
    </body>
  `
}

const style = /* css */ `
      * {
        padding: 0;
        margin: 0;
      }
      body {
        font: large Trebuchet MS, Helvetica, sans-serif;
        text-align: right;
        display: flex;
        height: 100vh;
        filter: blur(0.7px);
      }
      .wrapper {
        margin: auto;
        width: 100%;
      }
      .code404 {
        font-size: 40vw;
        margin-right: 2vw;
        line-height: 0.8;
        text-align: right;
        opacity: .5;
        animation: focus 7s ease-in-out infinite alternate; }
        @keyframes focus { from { filter: blur(4vw) }
      }
      .issue {
        text-align: left;
        width: 64vw;
        margin: 1vw 0 1vw auto;
        font-size: 2.5vw;
        opacity: 0.8;
      }
      .problem {
        text-align: center;
        font-size: 5.3vw;
        opacity: .7;
      }
`
