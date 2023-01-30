import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="w-full h-full xl:w-full" data-theme="cmyk">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
