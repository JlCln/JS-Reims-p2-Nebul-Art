import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";

import Login from "./components/Login";
import About from "./pages/About";
import Account from "./pages/Account";
import Browse from "./pages/Browse";
import ContactForm from "./pages/ContactForm";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "browse", element: <Browse /> },
      { path: "search", element: <Search /> },
      { path: "account", element: <Account /> },
      { path: "about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "contact", element: <ContactForm /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
