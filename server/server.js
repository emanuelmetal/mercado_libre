/* eslint-disable */
require("babel-polyfill")
require('babel-register')

const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const url = require('url')
const axios = require('axios')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const ServerRouter = ReactRouter.ServerRouter
const getResultItems = require('./controllers/itemsController')
const getItem = require('./controllers/productController')
// const App = require('../app/App').default

// const cssRequireHook = require('css-modules-require-hook');
// const sass = require('node-sass');
// cssRequireHook({
//     generateScopedName: '[name]__[local]___[hash:base64:5]',
//     extensions: [ '.scss', '.css' ],
//     preprocessCss: data => sass.renderSync({
//         data,
//         includePaths: [path.resolve(__dirname, '../app/styles')]
//     }).css
// });

app.set('port', (process.env.PORT || 3000))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*')

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache')
    next()
})

app.get('/api/items?', function(req, res) {
  getResultItems(req.query)
  .then(( response )=> {
    res.json(response)
  })
  .catch(error => res.json(error))
})

app.get('/api/items/:id', function(req, res) {
  getItem(req.params.id)
  .then(( response )=> {
    res.json(response)
  })
  .catch(error => res.json(error))
})

app.get(['/'], function(req, res) {
  // const context = ReactRouter.createServerRenderContext()
  // const body = ReactDOMServer.renderToString(
  //   React.createElement(ServerRouter, {location: req.url},
  //     React.createElement(App)
  //   )
  // )
  //
  // res.write(template({body: body}))
  // res.end()
})

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/')
})
