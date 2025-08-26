import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import React from 'react'
import Hero from './components/Hero'
import OffersSection from './components/OffersSection'
import WorkShowcase from './components/WorkShowcase'

import Home from "./components/Sidebar/Home";
import About from "./components/Sidebar/About";
import Services from "./components/Sidebar/Services";
import Portfolio from "./components/Sidebar/Portfolio";
import Contact from "./components/Sidebar/Contact";
import BuildTogether from "./components/Build/BuildTogether";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import ContactForm from "./components/ContactForm/ContactForm";
import Images from "./components/Images";
import Footer from "./components/Footer/Footer";

function App() {
  return (

         <diV>
         <BuildTogether/>
         <ContactDetails/>
         <ContactForm/>
         <Images/>
         <Footer/>
         </diV>
    
  );
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        <Hero />
        <OffersSection />
        <WorkShowcase />
      </main>
    </div>
  
}

export default App;

