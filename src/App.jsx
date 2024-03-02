// bg-[#808080]
// yellow-bg-[#FEE715]
// yellow-[#FFD700]
//footer-bg[rgb(99, 99, 99)]
import './App.css'
import Blogs from './components/Blogs'
import Calculation from './components/Calculation'
import Credit from './components/Credit'
import Feedbacks from './components/Feedbacks'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Sell from './components/Sell'

function App() {
  return (
    <main className='max-w-screen-xl mx-auto'>
    <Navbar />
    <Hero />
    <Sell />
    <Products />
    <Calculation />
    <Feedbacks />
    <Blogs />
    <Footer />
    <Credit />
    </main>
  )
}

export default App