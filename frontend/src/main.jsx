import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Home, Analyzer, Results, Auth } from "./pages/index.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import "./index.css";
import App from "./App.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/analyzer" element={<Analyzer />} />
                <Route path="/results" element={<Results />} />
            </Route>
        </Route>,
    ),
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
