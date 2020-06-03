'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("react-dom/server");
var react_1 = __importDefault(require("react"));
var html_1 = __importDefault(require("./views/html"));
var App_1 = __importDefault(require("./views/App"));
var express = require('express');
var cors = require('cors');
var compression = require('compression');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
var app = express();
var router = express.Router();
if (process.env.NODE_ENV === 'test') {
    router.use('/sam', compression());
}
else {
    router.use(compression());
}
router.use(cors());
router.use(awsServerlessExpressMiddleware.eventContext());
router.get('/:name', function (req, res) {
    res.send(html_1.default(server_1.renderToStaticMarkup(react_1.default.createElement(App_1.default, { name: req.params.name }))));
});
app.use('/', router);
module.exports = app;
//# sourceMappingURL=app.js.map