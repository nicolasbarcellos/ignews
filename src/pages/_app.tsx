import { AppProps } from "next/app";
import { Header } from "../components/Header";
import "../styles/global.scss";

import { Provider as NextAuthProvider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

// Cada vez que o usuário trocar de tela tudo será recarregado (criado do zero)

export default MyApp;
