import  { useState } from "react";
import { Search } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Slim Fit Jeans",
    category: "jeans",
    price: "$59.99",
    description:
      "Stay connected, motivated, and healthy with the latest Apple Watch.",
  },
  {
    id: 2,
    name: "Bootcut Jeans",
    category: "jeans",
    price: "$64.99",
    description:
      "Stay connected, motivated, and healthy with the latest Apple Watch.",
  },
  {
    id: 3,
    name: "Chino Trousers",
    category: "trousers",
    price: "$49.99",
    description:
      "Stay connected, motivated, and healthy with the latest Apple Watch.",
  },
  {
    id: 4,
    name: "Dress Trousers",
    category: "trousers",
    price: "$69.99",
    description:
      "Stay connected, motivated, and healthy with the latest Apple Watch.",
  },
  {
    id: 5,
    name: "Cargo Pants",
    category: "pants",
    price: "$54.99",
    description:
      "Stay connected, motivated, and healthy with the latest Apple Watch.",
  },
  {
    id: 6,
    name: "Sweatpants",
    category: "pants",
    price: "$39.99",
    description:
      "Stay connected, motivated, and healthy with the latest Apple Watch.",
  },
  {
    id: 7,
    name: "Skinny Jeans",
    category: "jeans",
    price: "$54.99",
    description:
      "Stay connected, motivated, and healthy with the latest Apple Watch.",
  },
  {
    id: 8,
    name: "Pleated Trousers",
    category: "trousers",
    price: "$59.99",
    description:
      "Stay connected, motivated, and healthy with the latest Apple Watch.",
  },
  {
    id: 9,
    name: "Khaki Pants",
    category: "pants",
    price: "$44.99",
    description:
      "Stay connected, motivated, and healthy with the latest Apple Watch.",
  },
];

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-4">
      <form className="relative mb-8">
        <input
          type="text"
          className="input   focus:border-sky-500"
          aria-label="search"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="relative" type="submit">
          <Search className="absolute right-1 -top-4.5" size={24} />
        </button>
      </form>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((product) => (
            <div key={product.id} className="flex justify-center">
              <div className="card sm:max-w-sm">
                <figure>
                  <img
                    src="https://cdn.flyonui.com/fy-assets/components/card/image-9.png"
                    alt="Watch"
                  />
                </figure>
                <div className="card-body">
                  <h5 className="card-title mb-2.5">{product.name}</h5>
                  <p className="mb-4">{product.description}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    <button className="btn btn-secondary btn-soft">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Hero;
