import NavBar from "./navBar";
import Footer from "./footer";

export default function Layout({ children } : any) {
  return (
    <>
      <div className="container">
        <NavBar />
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  );
}
