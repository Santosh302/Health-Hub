import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus.jsx';
import SupportForCowCare from './pages/SupportForCowCare';
import FranchiseLocations from './pages/FranchiseLocations';
import Contact from './pages/Contact.jsx';
import Sitemap from './pages/Sitemap.jsx';
import InternationalRates from './pages/InternationalRates.jsx';
import ShippingGuide from './pages/ShippingGuide.jsx';
import OrderInformation from './pages/OrderInformation.jsx';
import Faq from './pages/Faq.jsx';
import LiveChat from './pages/LiveChat.jsx';
import CustomerService from './pages/CustomerService.jsx';


function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/SupportForCowCare' element={<SupportForCowCare />} />
        <Route path='/FranchiseLocations' element={<FranchiseLocations />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Sitemap' element={<Sitemap />} />
        <Route path='/InternationalRates' element={<InternationalRates />} />
        <Route path='/ShippingGuide' element={<ShippingGuide />} />
        <Route path='/OrderInformation' element={<OrderInformation />} />
        <Route path='/Faq' element={<Faq />} />
        <Route path='/LiveChat' element={<LiveChat />} />
        <Route path='/CustomerService' element={<CustomerService />} />
      </Routes>
    
  );
}

export default App;
