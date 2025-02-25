/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import App from 'next/app';
import React from 'react';
import { PageTransition } from 'next-page-transitions';

/* -------------------------- Internal Dependencies -------------------------- */

import AppContext from '../components/Utils/context';
import {
  loadState,
  clearState,
  saveState,
} from '../components/Utils/localstorage';

export default class MyApp extends App {
  constructor() {
    super();
    this.state = {
      show: false,
      theme: loadState() ? true : false,
    };

    // Bind methods
    this.loadTheme = this.loadTheme.bind(this);
    this.handleopen = this.handleopen.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.closeShow = this.closeShow.bind(this);
  }

  loadTheme() {
    const { theme } = this.state;
    if (!theme) {
      clearState();
    } else {
      saveState(1);
    }
  }

  handleopen() {
    this.setState({ show: !this.state.show });
  }

  setTheme() {
    this.setState({ theme: !this.state.theme });
  }

  closeShow() {
    this.setState({ show: false });
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <PageTransition
          timeout={200}
          classNames="page-transition"
          loadingDelay={100}
        >
          <AppContext.Provider
            key={Math.floor(Math.random() * Math.floor(20))}
            value={{
              show: this.state.show,
              theme: this.state.theme,
              loadTheme: this.loadTheme,
              setTheme: this.setTheme,
              handleopen: this.handleopen,
              closeShow: this.closeShow,
            }}
          >
            <Component {...pageProps} />
          </AppContext.Provider>
        </PageTransition>
      </>
    );
  }
}
