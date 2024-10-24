import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
