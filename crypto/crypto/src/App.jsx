import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Transaction from "./Components/Transaction";
import Dashboard from "./Components/Dashboard";
import Support from "./Components/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
