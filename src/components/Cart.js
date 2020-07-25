import React, { useState } from "react";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";

const ProductCard = ({
  img,
  name,
  price,
  originalPrice,
  increment,
  decrement,
  quantity,
}) => {
  // const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex mb-6 md:min-w-350">
      <img
        className="rounded-12 object-cover w-32 h-32 mr-4"
        src={img}
        alt="Kabang"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-gray1 text-sm font-semibold mb-2">{name}</h3>
          <div>
            <span className="text-orange text-base font-semibold mr-4">
              ${price}
            </span>
            <span className="text-sm text-gray2 line-through">
              ${originalPrice}
            </span>
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center justify-around rounded-12 border border-gray3 px-2 py-3">
          <div
            onClick={decrement}
            // onClick={() =>
            //   quantity > 1 ? setQuantity((quantity) => quantity - 1) : null
            // }
            className="flex items-center justify-center text-lg h-6 w-6 bg-gray5 rounded-4 p-1"
          >
            -
          </div>
          <input
            value={quantity}
            onChange={(e) => console.log(`Ok`)}
            // onChange={(e) => setQuantity(e.target.value)}
            style={{ outlineColor: "#828282" }}
            className="font-semibold text-lg w-5 bg-transparent"
          />
          <div
            onClick={increment}
            className="flex items-center justify-center text-lg h-6 w-6 bg-gray5 rounded-4 p-1"
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const shipping = 19;
  const [products, setProducts] = useState([
    {
      img: photo1,
      name: "Vintage Backbag",
      price: 54.99,
      originalPrice: 94.99,
      quantity: 1,
    },
    {
      img: photo2,
      name: "Levi Shoes",
      price: 74.99,
      originalPrice: 124.99,
      quantity: 1,
    },
  ]);

  const increment = (product) => {
    console.log(`Increment`, product);
    const index = products.findIndex((p) => p.name === product.name);
    if (index !== -1) {
      const newProduct = {
        ...products[index],
        quantity: products[index].quantity + 1,
      };
      setProducts(
        products.map((p) => (p.name === newProduct.name ? newProduct : p))
      );
    }
  };
  const decrement = (product) => {
    const index = products.findIndex((p) => p.name === product.name);
    if (index !== -1) {
      if (products[index].quantity > 1) {
        const newProduct = {
          ...products[index],
          quantity: products[index].quantity - 1,
        };
        setProducts(
          products.map((p) => (p.name === newProduct.name ? newProduct : p))
        );
      }
    }
  };
  const total = () => {
    const productPrice = products.reduce(
      (prev, next) => prev.price * prev.quantity + next.price * next.quantity
    );
    return Math.round((productPrice + shipping + Number.EPSILON) * 100) / 100;
  };

  return (
    <div className="flex flex-col rounded-12 mt-4 bg-gray6 p-6">
      <div className="mb-8">
        {products.map((product, i) => (
          <ProductCard
            increment={() => increment(product)}
            decrement={() => decrement(product)}
            key={i}
            {...product}
          />
        ))}
      </div>

      <hr className="border-gray4 mb-4" />
      <div className="flex justify-between">
        <span className="text-gray1 text-lg font-semibold">Shipping</span>
        <span className="text-gray1 text-lg font-semibold">$19</span>
      </div>
      <hr className="border-gray4 mt-3 mb-6" />
      <div className="flex justify-between">
        <span className="text-gray1 text-lg font-semibold">Total</span>
        <span className="text-gray1 text-lg font-semibold">${total()}</span>
      </div>
    </div>
  );
};

export default Cart;
