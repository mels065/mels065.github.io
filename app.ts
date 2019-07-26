import bodyParser = require("body-parser");
import express = require("express");
import helmet = require("helmet");
import http = require("http");
import path = require("path");

const app: express.Application = express();
const server: http.Server = http.createServer(app);

app.use(helmet());

app.use(express.static(path.join(__dirname, "dist")));

const port: (string | number) = process.env.SERVER_PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}`));
