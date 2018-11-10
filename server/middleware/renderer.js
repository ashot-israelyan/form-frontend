import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';

import App from '../../src/App';

import manifest from '../../build/asset-manifest.json';

const extractAssets = (assets, chunks) => Object.keys(assets)
  .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
  .map(k => assets[k]);

const path = require('path');
const fs = require('fs');

export default store => (req, res, next) => {
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).send();
    }

    const modules = [];
    const routerContext = {};

    const html = ReactDOMServer.renderToString(
      <Loadable.Capture report={m => modules.push(m)}>
        <ReduxProvider store={store}>
          <StaticRouter location={req.baseUrl} context={routerContext}>
            <App/>
          </StaticRouter>
        </ReduxProvider>
      </Loadable.Capture>
    );

    const reduxState = JSON.stringify(store.getState());

    const extraChunks = extractAssets(manifest, modules)
      .map(c => `<script type="text/javascript" src="/${c}"></script>`);

    const helmet = Helmet.renderStatic();

    return res.send(
      htmlData
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace('__REDUX_STATE__={}', `__REDUX_STATE__=${reduxState}`)
        .replace('</body>', extraChunks.join('') + '</body>')
        .replace('<title></title>', helmet.title.toString() + helmet.meta.toString())
    );
  });
};