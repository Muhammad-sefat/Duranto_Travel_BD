import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import FindInvoice from "./pages/FindInvoice";
import Blog from "./pages/Blog";
import Conditions from "./pages/Conditions";
import Gallary from "./pages/Gallary";
import Account from "./pages/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/find-invoice",
        element: <FindInvoice />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/condition",
        element: <Conditions />,
      },
      {
        path: "/gallary",
        element: <Gallary />,
      },
      {
        path: "/my-account",
        element: <Account />,
      },
    ],
  },
]);

export default router;
