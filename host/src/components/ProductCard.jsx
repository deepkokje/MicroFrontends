import products from "../data";
import { useCartStore } from "../store";
const ProductCard = () => {
  const addToCart = useCartStore((state) => state.addProducts);
    return (
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map(product => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-700 text-base">{product.description}</p>
                </div>
                <div className="p-4 mt-1 mb-1">
                    <button onClick={() =>addToCart(product)} 
                      className="bg-purple-400 text-white px-4 py-2 rounded hover:bg-purple-500">
                      Add to Cart
                    </button>
                  </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default ProductCard