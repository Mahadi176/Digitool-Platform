import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Banner2 from './Components/Banner2'
import Footer from './Components/Footer'
import GetStarted from './Components/GetStarted'
import Pricing from './Components/Pricing/Pricing'
import Products from './Components/Products/Products'
import Cart from './Components/Carts/Cart'
import { Suspense } from 'react'
import { useState } from 'react'

const getPricing = async() => {
  const res = await fetch('/Pricing.json');
  return res.json();
}

const pricingPromise = getPricing();

const GetProduct = async() =>{
  const res = await fetch('/ProductData.json');
  return res.json();
}

const productPromise = GetProduct();

function App() {

   const [activeTab,setActiveTab] = useState("product")
  const [carts,setCarts] = useState([])
 
  return (
    <>
      <Navbar/>
      <Banner/>
      <Banner2/>
      {/* <Products productPromise={productPromise}/> */}
<div className='mx-auto max-w-7xl'>
    <div className='text-center my-10'>
    <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
    <p className='my-5'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
    </div>

    <div className="tabs tabs-box justify-center bg-transparent">
  <input type="radio" name="my_tabs_1"  aria-label="Product" onClick={()=> setActiveTab("product")} defaultChecked   className={`tab rounded-full w-40 transition-all
      ${activeTab === "product"
        ? "bg-violet-700 text-white"
        : "bg-white text-black"}
    `}/>
  <input type="radio" name="my_tabs_1" aria-label={`Cart (${carts.length})`} onClick={()=> setActiveTab("cart")}  className={`tab rounded-full w-40 transition-all
      ${activeTab === "cart"
        ? "bg-violet-700 text-white"
        : "bg-white text-black"}
    `} />
</div>
</div>
   {activeTab ==="product" && <Products productPromise={productPromise} carts={carts} setCarts={setCarts}/>}
   {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}/>}

      <GetStarted/>
     <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
       <Pricing pricingPromise={pricingPromise}/>
     </Suspense>
      <Footer/>
    </>
  )
}

export default App
