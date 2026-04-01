import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Banner2 from './Components/Banner2'
import Footer from './Components/Footer'
import GetStarted from './Components/GetStarted'
import Pricing from './Components/Pricing/Pricing'
import { Suspense } from 'react'

const getPricing = async() => {
  const res = await fetch('../public/Pricing.json');
  return res.json();
}

const pricingPromise = getPricing();


function App() {
 
  return (
    <>
      <Navbar/>
      <Banner/>
      <Banner2/>
      <GetStarted/>
     <Suspense fallback={<span class="loading loading-spinner loading-xl"></span>}>
       <Pricing pricingPromise={pricingPromise}/>
     </Suspense>
      <Footer/>
    </>
  )
}

export default App
