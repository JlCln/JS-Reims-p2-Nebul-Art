import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
        <Login />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
