import { useState } from "react";
import { Star } from "lucide-react";
import ColorOptions from "./ColorOptions";
import SizeOptions from "./SizeOptions";
import { CartItem } from "../types/CartItem";
import purple from "../assets/purple.png";
import cyan from "../assets/cyan.png";
import blue from "../assets/blue.png";
import black from "../assets/black.png";

interface ProductInfoProps {
  addToCart: (item: CartItem) => void;
  selectedColor: "purple" | "cyan" | "blue" | "black";
  setSelectedColor: React.Dispatch<
    React.SetStateAction<"purple" | "cyan" | "blue" | "black">
  >;
}

export default function ProductInfo({
  addToCart,
  selectedColor,
  setSelectedColor,
}: ProductInfoProps) {
  // Remove the local selectedColor state
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const prices = {
    S: 69,
    M: 79,
    L: 89,
    XL: 99,
  };

  const handleAddToCart = () => {
    addToCart({
      name: "Classy Modern Smart watch",
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      price: prices[selectedSize as keyof typeof prices],
      image:
        selectedColor === "purple"
          ? purple
          : selectedColor === "cyan"
          ? cyan
          : selectedColor === "blue"
          ? blue
          : selectedColor === "black"
          ? black
          : purple,
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-bold text-text-color">
        Classy Modern Smart watch
      </h1>
      <div className="flex items-center space-x-2">
        <div className="flex text-yellow-400">
          {[...Array(3)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
          {[...Array(2)].map((_, i) => (
            <Star key={i} className="w-5 h-5 stroke-current" />
          ))}
        </div>
        <span className="text-sm text-gray-500">(2 Reviews)</span>
      </div>
      <div className="space-x-2">
        <span className="text-lg text-light-text-color line-through">
          ${(prices[selectedSize as keyof typeof prices] + 20).toFixed(2)}
        </span>
        <span className="text-2xl font-bold text-primary-color">
          ${prices[selectedSize as keyof typeof prices].toFixed(2)}
        </span>
      </div>
      <p className="text-light-text-color">
        I must explain to you how all this mistaken idea of denouncing ple
        praising pain was born and I will give you a complete account of the
        system, and expound the actual teaching.
      </p>
      <div className=" flex justify-start items-center gap-16">
        <div>
          <h1 className="text-sm text-light-text-color">Type</h1>
          <span className="font-semibold text-base text-text-color">Watch</span>
        </div>
        <div className="">
          <h1 className="text-sm text-light-text-color">Model Number</h1>
          <span className="font-semibold text-base text-text-color">
            Forerunner 290XT
          </span>
        </div>
      </div>
      <ColorOptions
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
      />
      <SizeOptions selectedSize={selectedSize} onSizeChange={setSelectedSize} />
      <div className="flex items-center space-x-4">
        <div className="flex items-center border rounded-md">
          <button
            className="px-3 py-2 bg-gray-100"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value) || 0))
            }
            className="w-16 text-center border-0"
          />
          <button
            className="px-3 py-2 bg-gray-100"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </button>
        </div>
        <button
          className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-md"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button className="p-2 border rounded-md">♡</button>
      </div>
    </div>
  );
}
