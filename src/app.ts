'use strict'
import {Request} from "express-serve-static-core";
import {renderToStaticMarkup} from 'react-dom/server';
import React from "react";
import html from "./views/html";
import App from "./views/App";

const express = require('express')
const cors = require('cors')
const compression = require('compression')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const app = express()
const router = express.Router()

if (process.env.NODE_ENV === 'test') {
    router.use('/sam', compression())
} else {
    router.use(compression())
}

router.use(cors())
router.use(awsServerlessExpressMiddleware.eventContext())

router.get('/:name', (req: Request, res: any) => {
    res.send(
        html(renderToStaticMarkup(React.createElement(App, {name: req.params.name})))
    );
})

app.use('/', router)
module.exports = app
