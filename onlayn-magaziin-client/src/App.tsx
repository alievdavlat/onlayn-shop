import { Route, Routes } from "react-router-dom"
import { Home, Shop } from "./pages"
import Layout from "./components/Layout/Layout"


const App = () => {
  return (
    <div className="w-full">
     <Routes>
    
      <Route path="/" element={<Layout/>}>
        
        <Route index element={<Home/>}/>
        <Route  path="/shop" element={<Shop/> }/> 
      
      </Route>
    
        
    
    </Routes>
    </div>
  )
}

export default App