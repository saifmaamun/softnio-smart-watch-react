interface SizeOptionsProps {
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

const sizeOptions = [
  { label: "S", price: 69 },
  { label: "M", price: 79 },
  { label: "L", price: 89 },
  { label: "XL", price: 99 },
];

export default function SizeOptions({
  selectedSize,
  onSizeChange,
}: SizeOptionsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-text-color">Wrist Size</h3>
      <div className="flex space-x-4">
        {sizeOptions.map((size) => (
          <button
            key={size.label}
            className={`px-5 inline-flex items-center gap-2 py-2 border border-border-color rounded transition-all duration-200 ${
              selectedSize === size.label
                ? "border-primary-color text-text-color"
                : "border-border-color  text-gray-500 hover:border-primary-color"
            }`}
            onClick={() => onSizeChange(size.label)}
          >
            <span
              className={`block font-bold ${
                selectedSize === size.label
                  ? "text-purple-600"
                  : "text-gray-700"
              }`}
            >
              {size.label}
            </span>
            <span className="block text-light-text-color">
              ${size.price.toFixed(2)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
