
import React from "react";
import Navbar from "./components/navigation/Navbar";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";
function App(){

  return(
    <div>
      <Navbar/>
      <ContactHeader/>
      <ContactForm/>
    </div>
       
  );
}

export default App;