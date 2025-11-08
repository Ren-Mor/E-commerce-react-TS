import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Product } from "./Types/Product";
import MyNav from "./Components/MyNav";
import LoginPersist from "./Components/LoginPersist";
import YouBetterRun from "./Components/YouBetterRun";
import Hero from "./Components/Hero";
import Cart from "./Components/Cart";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Checkout from "./Components/Checkout";
import UserProfile from "./Components/UserProfile";
import ConfirmLogout from "./Components/ConfirmLogout";
import ProtectionRoute from "./Components/ProtectionRoute";
import AdminProfile from "./Components/AdminProfile";
import BackOffice from "./Components/BackOffice";
import UpdateProduct from "./Components/UpdateProduct";
import VisualizeUsers from "./Components/VisualizeUsers";
import UpdateUser from "./Components/UpdateUser";
import MyFooter from "./Components/MyFooter";
import "./App.css";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>("all");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`http://localhost:8080/products/category/${category}`, {
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log("Errore nel recupero dei prodotti:", error);
      }
    }
    fetchProducts();
  }, [category]);

  return (
    <>
      <BrowserRouter>
        <LoginPersist />
        <MyNav />
        <Routes>
          <Route path="/youbetterrun" element={<YouBetterRun />} />
          <Route path="/" element={<Hero />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/prodotti/:category" element={<ProductList categoria={products} setCategory={setCategory} />} />
          <Route path="/products/all" element={<ProductList categoria={products} setCategory={setCategory} />} />
          <Route path="/details/:productId" element={<ProductDetails />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart/checkout" element={<Checkout />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/confirm-logout" element={<ConfirmLogout />} />
          <Route
            path="/adminprofile"
            element={
              <ProtectionRoute>
                <AdminProfile />
              </ProtectionRoute>
            }
          />
          <Route
            path="/backoffice"
            element={
              <ProtectionRoute>
                <BackOffice />
              </ProtectionRoute>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectionRoute>
                <UpdateProduct />
              </ProtectionRoute>
            }
          />
          <Route
            path="/visualizeusers"
            element={
              <ProtectionRoute>
                <VisualizeUsers />
              </ProtectionRoute>
            }
          />
          <Route path="/updateuser" element={<UpdateUser />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
