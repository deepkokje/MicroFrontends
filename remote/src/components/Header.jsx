const Header = () => {
  return (
    <header className="bg-purple-600 p-4 flex justify-between items-center">
    <div className="text-white text-xl">My Shop</div>
    <div className="relative">
      <span className="w-6 h-6 text-white">Cart</span>
      <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">3</span> {/* Example badge for cart items count */}
    </div>
  </header>
  )
}

export default Header