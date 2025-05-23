import "./App.css";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout/>
      {/* <Navbar /> */}
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
