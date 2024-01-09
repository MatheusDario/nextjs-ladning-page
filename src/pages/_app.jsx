import MyThemeProvider from "../styles/MyThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <MyThemeProvider>
      <Component {...pageProps} />
    </MyThemeProvider>
  );
}

export default MyApp;
