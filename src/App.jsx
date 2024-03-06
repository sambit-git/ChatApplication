import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chat from "./pages/Chat";
import LoginPage, { action as loginAction } from "./pages/Login";
import { getSelf } from "./services/auth.services";

const router = createBrowserRouter([
  { path: "/", element: <Chat /> },
  { path: "/login", element: <LoginPage />, action: loginAction },
]);

function App() {
  getSelf();
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
