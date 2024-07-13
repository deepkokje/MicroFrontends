import { lazy, Suspense} from 'react';
import ProductCard from "./components/ProductCard"
const Header =  lazy(() => import('remoteApp/Header'));

function App() {
  return (
    <>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
        <Header/>
        </Suspense>
        <ProductCard/>
      </div>
    </>
  )
}

export default App
