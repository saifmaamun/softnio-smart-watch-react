import { useState } from "react";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import CartModal from "./components/CartModal";

import { CartItem } from "./types/CartItem";
import CheckoutButton from "./components/CheckoutButton";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<
    "purple" | "cyan" | "blue" | "black"
  >("purple");

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 items-center gap-8">
        <ProductImage selectedColor={selectedColor} />
        <ProductInfo
          addToCart={addToCart}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
      <CheckoutButton
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onClick={() => setIsModalOpen(true)}
      />
      <CartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cartItems={cart}
        setCart={setCart}
      />
    </main>
  );
}
