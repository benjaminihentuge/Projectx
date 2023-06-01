import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/SearchDiv/Search";
import Jobs from "./components/JobDiv/jobs";
import Value from "./components/ValueDiv/Value";
import Footer from "./components/FooterDiv/footer";


const App = () => {
  return(
    <div className="w-[85%] m-auto bg-white">
      <NavBar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>

      
    </div>
  )
}

export default App