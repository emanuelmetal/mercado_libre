/* eslint-disable */

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const url = require('url')
const axios = require('axios')
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const getResultItems = require('./controllers/itemsController')
const getItem = require('./controllers/productController')

require('babel-register')({
  presets: [ 'react', 'stage-2', 'es2017' ]
});

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/items?', function(req, res) {
  getResultItems(req.query)
  .then(( response )=> {
    res.json(response)
  })
  .catch(error => res.json(error))
});

app.get('/api/items/:id', function(req, res) {
  getItem(req.params.id)
  .then(( response )=> {
    console.log(response)
    res.json(response)
  })
  .catch(error => res.json(error))
});

app.get(['/', '/another-page'], function(req, res) {
  var ReactRouter = require('react-router');
  var match = ReactRouter.match;
  var RouterContext = React.createFactory(ReactRouter.RouterContext);
  var Provider = React.createFactory(require('react-redux').Provider);
  var routes = require('./public/routes.js').routes
  var store = require('./public/redux-store');

  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);

    var initialState = {
      data: comments,
      url: "/api/comments",
      pollInterval: 2000
    }

    store = store.configureStore(initialState);

    match({routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        res.send("<!DOCTYPE html>"+
          ReactDOMServer.renderToString(
            Provider({store: store}, RouterContext(renderProps))
          )
        );
      } else {
        res.status(404).send('Not found')
      }
    });

  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
