const http = require("http");
const path = require("path");
const staticFile = require("./appModules/http-utils/static-file")
const mimeTypes = require("./appModules/http-utils/mime-types.js")
const mainRouteController = require("./controllers/main.js")
const defaultRouteController = require("./controllers/default.js")
const gameRouteController = require("./controllers/game.js")
const voteRouteController = require("./controllers/vote.js")

const PORT = 3005;

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
      case "/":
        mainRouteController(res, "/index.html", ".html");
        break;
        case "/game":
            gameRouteController(res);
        break;
        case "/vote":
          voteRouteController(req, res);
        break;
        default:
          defaultRouteController(res, url);
        }
})

server.listen(PORT);