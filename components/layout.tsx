import NavBar from "./navBar";
import Footer from "./footer";
import Banner from "./banner";
import StarList from "./starList";

export default function Layout({ children } : any) {
  return (
    <>
      <div className="container">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
}
