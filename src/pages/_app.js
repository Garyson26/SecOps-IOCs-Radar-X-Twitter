import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import "react-phone-input-2/lib/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import AdminLayout from "@/components/AdminLayout/Layout";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      {router.pathname === "/login" ||
      router.pathname === "/register" ||
      router.pathname === "/aboutus" ||
      router.pathname === "/" ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      )}
    </>
  );
}
