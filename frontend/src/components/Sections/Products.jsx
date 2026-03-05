import Heading from "../Shared/Heading";
import ProductCards from "../Shared/ProductCards";

const Products = () => {
  return (
    <div>
      <div className="sm:p-12 p-4 mt-6">
        
        {/* Header Section Here */}
        <Heading
          title={"Featured Products"}
          subtitle={"Check out most popular products"}
        ></Heading>

        {/* Body Section Here */}
        <ProductCards></ProductCards>
      </div>
    </div>
  );
};

export default Products;
