import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Shop from "./Pages/Shop";
import Checkout from "./Pages/Checkout";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => setOrderPopup((prev) => !prev);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />} />
        <Route path="/blogs" element={<Blog orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />} />
        <Route path="/blogs/:id" element={<Blog orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />} />
        <Route path="/shop" element={<Shop orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />} />
        <Route path="/checkout" element={<Checkout orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;