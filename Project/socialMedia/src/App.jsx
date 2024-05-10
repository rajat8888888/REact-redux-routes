import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { SideBar } from "./component/SideBar";
import { Outlet } from "react-router-dom";
import CreateStoreProvider from "./store/CreateStoreProvider";

function App() {
  return (
    <CreateStoreProvider>
      <div className="app-container">
        <SideBar />

        <div className="context">
          <Header />

          <Outlet />
          <Footer />
        </div>
      </div>
    </CreateStoreProvider>
  );
}

export default App;
