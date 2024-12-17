import { useEffect, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SplashScreen from "./components/SplashScreen";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AppContent showSplash={showSplash} />
    </ThemeProvider>
  );
}

const AppContent = ({ showSplash }: { showSplash: boolean }) => {
  return (
    <div className="app-container">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <header>
            <NavBar />
          </header>
          <main className="main-content">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
