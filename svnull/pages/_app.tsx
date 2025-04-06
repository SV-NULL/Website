import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
