
import { useState } from "react";
import {useCartStore} from "store/store"
import Modal from "./Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const {cart, clearCart} = useCartStore();
  console.log('cart remote', cart);
  return (
    <header className="bg-purple-600 p-4 flex justify-between items-center">
    <div className="text-white text-xl">My Shop</div>
    <div className="relative">
      <span className="w-6 h-6 text-white" onClick={() => setShowModal(true)}>Cart</span>
      <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">{cart.length}</span>
      <Modal showModal={showModal} clearCart={clearCart} setShowModal={setShowModal} products={cart} /> {/* Example badge for cart items count */}
    </div>
  </header>
  )
}

export default Header