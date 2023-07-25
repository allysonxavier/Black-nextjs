import React from "react";
import { AppProps } from "next/app";

import { GlobalStyles } from "../styles/globals";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
