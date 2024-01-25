import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: < HomePage />,
    },
    {
        path: "/products",
        element: <ProductPage />
    },
    {
        path: "/cart",
        element: <CartPage />
    }
]);

export default router;