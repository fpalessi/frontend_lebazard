import { Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext";
import Nav from "./components/Nav";
import CartPage from "./pages/CartPage";
import ProductList from "./components/ProductList";
import Footer from "./components/footer";
import WishlistPage from "./pages/WishlistPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import AdminProductsList from "./components/Admin/Lists/AdminProductsList";
import AdminUsersList from "./components/Admin/Lists/AdminUsersList";
import AdminOrdersList from "./components/Admin/Lists/AdminOrdersList";

function App() {
  return (
    <>
      <AuthProvider>
        <SkeletonTheme>
          <Nav />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/access" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/products" element={<AdminProductsList />} />
            <Route path="/admin/users" element={<AdminUsersList />} />
            <Route path="/admin/orders" element={<AdminOrdersList />} />
          </Routes>
          <Footer />
          <Toaster theme="dark" position="top-center" />
        </SkeletonTheme>
      </AuthProvider>
    </>
  );
}

export default App;
