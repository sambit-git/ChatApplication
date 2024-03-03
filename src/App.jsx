import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chat from "./pages/Chat";
import LoginPage, { action as loginAction } from "./pages/Login";

const router = createBrowserRouter([
  { path: "/", element: <Chat /> },
  { path: "/login", element: <LoginPage />, action: loginAction },
]);

function App() {
  // login("sambit", "pass");
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
