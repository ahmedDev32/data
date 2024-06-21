import Footer from "@/components/footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
   
    <Navbar/>
    
    <Component {...pageProps} />
    </>
  );
}
