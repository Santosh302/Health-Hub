import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RequireAuth from './components/Auth/RequireAuth'
import Home from './pages/Home';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import Benifits from './pages/Benifits.jsx';
import Offers from './pages/Offers.jsx';
import JoinFranchise from './pages/JoinFranchise.jsx';
import DiseaseVsProducts from './pages/DiseaseVsProducts.jsx';
import Denied from './pages/Denied.jsx';
import Notfound from './pages/Notfound.jsx';
import AcceptPayment from './pages/AcceptPayment.jsx';


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
import Checkout from './pages/Payment/Checkout.jsx';
import CheckoutFailure from './pages/Payment/CheckoutFailure.jsx';
import CheckoutSuccess from './pages/Payment/CheckoutSuccess.jsx';
import EditProfile from './pages/User/EditProfile.jsx';
import Profile from './pages/User/Profile.jsx';
function App() {
  return (
      
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/acceptPayment" element={<AcceptPayment/>} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/benifits' element={<Benifits />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/joinFranchise' element={<JoinFranchise />} />
        <Route path='/diseaseVsProducts' element={<DiseaseVsProducts />} />    
        <Route path='/about' element={<Aboutus />} />

        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/editprofile" element={<EditProfile />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
        <Route path="/checkout/fail" element={<CheckoutFailure />} />
      </Route>

      {/*  <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
        <Route path="/course/create" element={<CreateCourse />} />
      </Route> 
 */}
        <Route path='/supportForCowCare' element={<SupportForCowCare />} />
        <Route path='/franchiseLocations' element={<FranchiseLocations />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sitemap' element={<Sitemap />} />
        <Route path='/internationalRates' element={<InternationalRates />} />
        <Route path='/shippingGuide' element={<ShippingGuide />} />
        <Route path='/orderInformation' element={<OrderInformation />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/liveChat' element={<LiveChat />} />
        <Route path='/customerService' element={<CustomerService />} />
        <Route path='/denied' element={<Denied />} />
      <Route path='*' element={<Notfound />} />
      </Routes>
     
  );
}

export default App;
