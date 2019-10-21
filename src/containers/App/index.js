import { GlobalStyle } from '#/components/GlobalStyle';
import Head from '#/components/Head';
import Routes from '#/routes';
import { node } from 'prop-types';
import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';

export function App() {
  return (
    <Fragment>
      <Head titleTemplate="%s - " defaultTitle="" />
      <GlobalStyle />
      <main>
        <Routes />
      </main>
    </Fragment>
  );
}

App.propTypes = {
  children: node
};

export default hot(module)(App);
