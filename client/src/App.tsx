import { Outlet } from "react-router";
import "./App.css";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
