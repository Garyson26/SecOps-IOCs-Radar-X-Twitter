import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import 'react-phone-input-2/lib/style.css'
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
