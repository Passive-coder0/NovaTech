const CartItem = ({ product, quantity, onQuantityChange }) => {
  const decrement = () => onQuantityChange(Math.max(1, quantity - 1));
  const increment = () => onQuantityChange(quantity + 1);

  const handleChange = (e) => {
    const parsed = parseInt(e.target.value, 10);
    if (!isNaN(parsed) && parsed >= 1) onQuantityChange(parsed);
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-[2fr_1.5fr_1fr_1fr] md:items-center mb-6 gap-3 border-b border-gray-100 dark:border-gray-700 pb-4 md:border-none md:pb-0">
      {/* Product Info */}
      <div className="flex items-center gap-3">
        <img
          className="aspect-square w-16 md:w-20 bg-gray-100 rounded-md shrink-0"
          src={product.img}
          alt="Product Img"
        />
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-base/4 lg:text-lg">{product.title}</h2>
          <p className="text-sm lg:text-base text-red-500/90">{product.subtitle}</p>
          <p className="text-sm text-gray-500 hover:text-red-500 cursor-pointer active:text-red-600">
            Remove
          </p>
        </div>
      </div>

      {/* Mobile: Qty + Price + Total in one row */}
      <div className="flex items-center justify-between md:contents gap-4 text-sm md:text-base">
        {/* Number Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={decrement}
            className="w-6 md:w-7 aspect-square rounded-md bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 font-bold text-base leading-none cursor-pointer"
          >
            −
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleChange}
            className="w-8 md:w-9 text-sm aspect-square text-center bg-gray-100 dark:bg-gray-700 rounded-md py-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <button
            onClick={increment}
            className="w-6 md:w-7 aspect-square rounded-md bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 font-bold text-base leading-none cursor-pointer"
          >
            +
          </button>
        </div>

        <div className="flex gap-6 md:contents">
          <span className="md:block"><span className="md:hidden text-gray-400 mr-1">Price:</span>${product.price}</span>
          <span className="md:block font-semibold"><span className="md:hidden text-gray-400 mr-1">Total:</span>${product.price * quantity}</span>
        </div>
      </div>
    </div>
  );
};

const CartItems = ({ products, quantities, setQuantities }) => {
  return (
    <>
      {products.map((product, index) => (
        <CartItem
          key={index}
          product={product}
          quantity={quantities[index] ?? 1}
          onQuantityChange={(newQty) =>
            setQuantities((prev) => ({
              ...prev,
              [index]: newQty,
            }))
          }
        />
      ))}
    </>
  );
};

export default CartItems;
