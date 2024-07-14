/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Modal = ({ showModal, setShowModal, products, clearCart }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>
        <div>
          {products.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {products.map((product, index) => (
                <li key={index} className="flex justify-between items-center border-b py-2">
                  <span>{product.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-4 flex justify-end">
        <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-10"
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
