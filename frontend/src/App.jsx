import Navbar from "./components/Navbar"
import Category from "./components/Category"
import Category2 from "./components/Category2"
import Hero from "./components/Hero"
import Services from "./components/Services"

function App() {


  return (
    <div  className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar></Navbar>
      <Hero></Hero>
      <Category></Category>
      <Category2></Category2>
      <Services></Services>
    </div>
  )
}

export default App
