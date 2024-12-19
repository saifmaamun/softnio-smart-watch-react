interface ColorOptionsProps {
  selectedColor: "purple" | "cyan" | "blue" | "black";
  onColorChange: (color: "purple" | "cyan" | "blue" | "black") => void;
}

const colorOptions: Array<{
  name: string;
  value: "purple" | "cyan" | "blue" | "black";
}> = [
  { name: "Purple", value: "purple" },
  { name: "Cyan", value: "cyan" },
  { name: "Blue", value: "blue" },
  { name: "Black", value: "black" },
];

export default function ColorOptions({
  selectedColor,
  onColorChange,
}: ColorOptionsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-text-color">Band Color</h3>
      <div className="flex space-x-4">
        {colorOptions.map((color) => (
          <button
            key={color.value}
            className={`w-10 h-10 rounded-full p-1 ${
              selectedColor === color.value
                ? "ring-2 ring-offset-2 ring-black"
                : ""
            }`}
            style={{ backgroundColor: color.value }}
            onClick={() => onColorChange(color.value)}
          >
            <span className="sr-only">{color.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
