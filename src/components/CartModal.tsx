import { CartItem } from "../types/CartItem";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartModal = ({ isOpen, onClose, cartItems, setCart }: CartModalProps) => {
  if (!isOpen) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCartItems = () => {
    setCart([]);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-2"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Color: {item.color}, Size: {item.size}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p>Qty: {item.quantity}</p>
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-gray-200 rounded" onClick={onClose}>
              Continue Shopping
            </button>
            <button
              className="px-4 py-2 bg-button-color text-white rounded"
              onClick={() => handleCartItems()}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartModal;
