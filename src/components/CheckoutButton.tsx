interface CheckoutButtonProps {
  cartCount: number;
  onClick: () => void;
}

export default function CheckoutButton({
  cartCount,
  onClick,
}: CheckoutButtonProps) {
  return (
    <div className="container mx-auto mt-32 flex justify-center">
      <button
        className=" px-4 py-2 bg-checkout-color rounded-full flex items-center space-x-2 shadow-lg"
        onClick={onClick}
      >
        <span className="text-text-color text-sm font-bold">Checkout</span>
        <span className="bg-white text-text-color rounded-lg w-6 h-6 flex items-center justify-center text-sm font-bold">
          {cartCount}
        </span>
      </button>
    </div>
  );
}
