import { SWRConfig } from "swr";
import Layout from "../layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CategoryProvider } from "../state-manager/useCategory";
import { AuthProvider, useAuth } from "../state-manager/useAuth";
import { CartProvider } from "../state-manager/useCartState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig>
      <CartProvider>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </CartProvider>
    </SWRConfig>
  );
}

export default MyApp;
