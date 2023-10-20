import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import "react-phone-input-2/lib/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";
import AdminLayout from "@/components/AdminLayout/Layout";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {

  
  const router = useRouter();
  useEffect(() => {
    // Load the tawk.to script
    const tawkToScript = document.createElement('script');
    tawkToScript.async = true;
    tawkToScript.src = 'https://embed.tawk.to/64f404e7b2d3e13950ed98d4/1h9cj6b3h';
    document.head.appendChild(tawkToScript);

    return () => {
      // Clean up when the component unmounts
      document.head.removeChild(tawkToScript);
    };
  }, []);
  return (
    <>
      {router.pathname === "/login" ||
      router.pathname === "/register" ||
      router.pathname === "/verification" ||
      router.pathname === "/aboutus" ||
      router.pathname === "/information" ||
      router.pathname === "/privacy-policy" ||
      router.pathname === "/contactus" ||
      router.pathname === "/faqs" ||
      router.pathname === "/services" ||
      router.pathname === "/marketplace" ||
      router.pathname === "/" ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) 
      : (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      )}
    </>
  );
}
