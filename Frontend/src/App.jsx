import { Outlet } from "react-router";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
