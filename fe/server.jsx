import express from 'express';
import cookieParser from 'cookie-parser';
import favicon from 'serve-favicon';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { RouterContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from './shared/routes';
import { Provider } from 'react-redux';
import reducers from './shared/reducers';
import promiseMiddleware from './shared/lib/promiseMiddleware';
import fetchComponentData from './shared/lib/fetchComponentData';
import { createStore,
         combineReducers,
         applyMiddleware } from 'redux';
import path from 'path';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('./webpack.dev.config').default(app);
}

const renderPage = (res, initialState) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Modulator</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon">
        <link rel="icon" href="/assets/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="/assets/bootstrap/dist/css/bootstrap.css">
        <link rel="stylesheet" href="/assets/font-awesome/css/font-awesome.css">
        <script type="application/javascript">
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
      </head>
      <body>
        <div id="react-view"></div>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
    </html>
  `);
}

app.use(cookieParser());
app.use(favicon(__dirname + '/assets/favicon.ico'));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use( (req, res, next) => {
  const location = createLocation(req.url);
  const reducer  = combineReducers(reducers);
  const store    = applyMiddleware(promiseMiddleware)(createStore)(reducer);

  // Not doing serverside rendering to reduce complexity for now
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if(err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    } else if(!renderProps) {
      return res.status(404).end('Not found');
    }

    const initialState = store.getState();

    renderPage(res, initialState)
  });
});

export default app;