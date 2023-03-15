// import "./wdyr"; // <--- first import

import ProgressBar from "@badrap/bar-of-progress";
import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { AlertProvider } from "react-with-native-alert";
import { ModalProvider } from "react-with-native-modal";
import { ToastContainer } from "react-with-native-notification";

import { StoreProvider } from "../util/store";
import { MyLayout } from "../components/MyLayout";

import "../globals.css";
import "explorer-ui/css.css";
import "apps-menu/css.css";
import "authentication/css.css";
import "big-button/css.css";
import "context-menu/css.css";
import "fancy-loader/css.css";
import "layout/css.css";
import "markdown/css.css";
import "rc-time-picker/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datetime/css/react-datetime.css";
import "react-toastify/dist/ReactToastify.css";
import "react-with-native-alert/css.css";
import "react-with-native-form-inputs/css.css";
import "react-with-native-form/css.css";
import "react-with-native-modal/css.css";
import "react-with-native-notification/css.css";
import "react-with-native-router/css.css";
import "react-with-native-select/css.css";
import "react-with-native-store/css.css";
import "react-with-native-ui/css.css";
import "react-with-native/css.css";
import "share/css.css";
import "tooltip/css.css";
import "big-button/css.css";
import "file-tabs/css.css";
import "function-form/css.css";
import "labeled-button/css.css";
import "simplified-schema-form/css.css";
import "writer-input/css.css";

import "generative-ui/css.css";
import "labeled-button/css.css";
import "menu/css.css";
import "rc-time-picker/assets/index.css";
import "react-datetime/css/react-datetime.css";
import "tooltip/css.css";

const progress = new ProgressBar();

//Binding events.
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

        <meta
          name="description"
          content="Clarity AI is a search engine that helps you automate parts of your workflow"
        />
        <meta
          name="keywords"
          content="ai, search engine, artificial intelligence"
        />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />

        <title>Clarity AI</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        />

        {/* NB: for CODE syntax highlighting of "markdown" markdown-parser */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/default.min.css"
        />
      </Head>
      <ToastContainer />
      <AlertProvider>
        <StoreProvider>
          <ModalProvider>
            <MyLayout NextPage={Component} pageProps={pageProps} />
          </ModalProvider>
        </StoreProvider>
      </AlertProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
