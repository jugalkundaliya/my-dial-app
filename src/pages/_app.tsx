import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../app/store";
// import "antd/dist/antd.css"; // Import Ant Design styles
import { createGlobalStyle } from "styled-components";
import useAuth from "@/hooks/useAuth";
import AuthProvider from "@/features/auth/AuthProvider";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
