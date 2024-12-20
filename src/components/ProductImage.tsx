import purple from "../assets/purple.png";
import cyan from "../assets/cyan.png";
import blue from "../assets/blue.png";
import black from "../assets/black.png";

const productImages = {
  purple,
  cyan,
  blue,
  black,
};

interface ProductImageProps {
  selectedColor: "purple" | "cyan" | "blue" | "black";
}

const ProductImage = ({ selectedColor }: ProductImageProps) => {
  return (
    <div className="relative aspect-square">
      <img
        src={productImages[selectedColor]}
        alt={`Classy Modern Smart Watch in ${selectedColor}`}
        className="object-cover rounded-lg w-full h-full"
      />
    </div>
  );
};
export default ProductImage;
